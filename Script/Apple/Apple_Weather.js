/*
README:https://github.com/VirgilClyne/iRingo
*/

const $ = new Env("Apple Weather AQI v3.0.0-beta");
const URL = new URLSearch();
const DataBase = {
	"Weather":{"Switch":true,"Mode":"WAQI Public","Location":"Station","Verify":{"Mode":"Token","Content":null},"Scale":"EPA_NowCast.2201"},
	"Siri":{"Switch":true,"CountryCode":"TW","Domains":["web","itunes","app_store","movies","restaurants","maps"],"Functions":["flightutilities","lookup","mail","messages","news","safari","siri","spotlight","visualintelligence"],"Safari_Smart_History":true}
};
var { url } = $request;
var { body } = $response;

/***************** Processing *****************/
!(async () => {
	const { Settings } = await setENV("iRingo", url, DataBase);
	if (Settings.Switch) {
		url = URL.parse(url);
		let data = JSON.parse(body);
		// AQI
		if (url.params?.include?.includes("air_quality") || url.params?.dataSets?.includes("airQuality")) {
			const Status = await getStatus(data);
			if (Status == true) {
				$.log(`🎉 ${$.name}, 需要替换AQI`, "");
				const Params = await getParams(url.path);
				if (Settings.Mode == "WAQI Public") {
					$.log(`🚧 ${$.name}, 工作模式: waqi.info 公共API`, "")
					var { Station, idx } = await WAQI("Nearest", { api: Params.ver, lat: Params.lat, lng: Params.lng });
					const Token = await WAQI("Token", { idx: idx });
					//var NOW = await WAQI("NOW", { token:Token, idx: idx });
					var AQI = await WAQI("AQI", { token: Token, idx: idx });
				} else if (Settings.Mode == "WAQI Private") {
					$.log(`🚧 ${$.name}, 工作模式: waqi.info 私有API`, "")
					const Token = Settings?.Verify?.Content;
					if (Settings.Location == "Station") {
						$.log(`🚧 ${$.name}, 定位精度: 观测站`, "")
						var { Station, idx } = await WAQI("Nearest", { api: Params.ver, lat: Params.lat, lng: Params.lng });
						var AQI = await WAQI("StationFeed", { token: Token, idx: idx });
					} else if (Settings.Location == "City") {
						$.log(`🚧 ${$.name}, 定位精度: 城市`, "")
						var AQI = await WAQI("CityFeed", { token: Token, lat: Params.lat, lng: Params.lng });
					}
				};
				data = await outputAQI(Params.ver, Station, AQI, data, Settings);
			} else $.log(`🎉 ${$.name}, 无须替换, 跳过`, "");
		}
		// NextHour
		if (url.params?.dataSets?.includes("forecastNextHour")) {
			const Params = await getParams(url.path);
			$.log(`🚧 ${$.name}, 获取分钟级降水信息`, "");
			const minutelyData = await getGridWeatherMinutely(Params.lat, Params.lng);

			data = await outputNextHour(Params.ver, minutelyData, data, Settings);
		}
		body = JSON.stringify(data);
	}
})()
	.catch((e) => $.logErr(e))
	.finally(() => $.done({ body }))

/***************** Async Function *****************/
/**
 * Set Environment Variables
 * @author VirgilClyne
 * @param {String} name - Persistent Store Key
 * @param {String} url - Request URL
 * @param {Object} database - Default DataBase
 * @return {Promise<*>}
 */
async function setENV(name, url, database) {
	$.log(`⚠ ${$.name}, Set Environment Variables`, "");
	/***************** Platform *****************/
	const Platform = /weather-(.*)\.apple\.com/i.test(url) ? "Weather"
		: /smoot\.apple\.(com|cn)/i.test(url) ? "Siri"
			: /\.apple\.com/i.test(url) ? "Apple"
				: "Apple"
	$.log(`🚧 ${$.name}, Set Environment Variables`, `Platform: ${Platform}`, "");
	/***************** BoxJs *****************/
	// 包装为局部变量，用完释放内存
	// BoxJs的清空操作返回假值空字符串, 逻辑或操作符会在左侧操作数为假值时返回右侧操作数。
	let BoxJs = $.getjson(name, database)
	$.log(`🚧 ${$.name}, Set Environment Variables`, `BoxJs类型: ${typeof BoxJs}`, `BoxJs内容: ${JSON.stringify(BoxJs)}`, "");
	/***************** Settings *****************/
	let Settings = BoxJs?.[Platform] || BoxJs?.Settings?.[Platform] || BoxJs?.Apple?.[Platform] || database[Platform];
	$.log(`🎉 ${$.name}, Set Environment Variables`, `Settings: ${typeof Settings}`, `Settings内容: ${JSON.stringify(Settings)}`, "");
	/***************** Argument *****************/
	if (typeof $argument != "undefined") {
		$.log(`🎉 ${$.name}, $Argument`);
		let arg = Object.fromEntries($argument.split("&").map((item) => item.split("=")));
		$.log(JSON.stringify(arg));
		Object.assign(Settings, arg);
	};
	/***************** Prase *****************/
	Settings.Switch = JSON.parse(Settings.Switch) // BoxJs字符串转Boolean
	if (typeof Settings?.Domains == "string") Settings.Domains = Settings.Domains.split(",") // BoxJs字符串转数组
	if (typeof Settings?.Functions == "string") Settings.Functions = Settings.Functions.split(",") // BoxJs字符串转数组
	if (Settings?.Safari_Smart_History) Settings.Safari_Smart_History = JSON.parse(Settings.Safari_Smart_History) // BoxJs字符串转Boolean
	$.log(`🎉 ${$.name}, Set Environment Variables`, `Settings: ${typeof Settings}`, `Settings内容: ${JSON.stringify(Settings)}`, "");
	return { Platform, Settings };
};

/**
 * Get Origin Parameters
 * @author VirgilClyne
 * @param {String} url - Request URL
 * @return {Promise<*>}
 */
async function getParams(path) {
	const Regular = /^(?<ver>v1|v2)\/weather\/(?<language>[\w-_]+)\/(?<lat>-?\d+\.\d+)\/(?<lng>-?\d+\.\d+).*(?<countryCode>country=[A-Z]{2})?.*/i;
	const Params = path.match(Regular).groups;
	$.log(`🚧 ${$.name}`, `Params: ${JSON.stringify(Params)}`, "");
	return Params
};

/**
 * Get AQI Source Status
 * @author VirgilClyne
 * @param {Object} data - Parsed response body JSON
 * @return {Promise<*>}
 */
async function getStatus(data) {
	const result = ["和风天气", "QWeather"].includes(data.air_quality?.metadata?.provider_name ?? data.airQuality?.metadata?.providerName ?? "QWeather");
	$.log(`🚧 ${$.name}, ${data.air_quality?.metadata?.provider_name ?? data.airQuality?.metadata?.providerName}`, '');
	return (result || false)
};

/**
 * WAQI
 * @author VirgilClyne
 * @param {String} type - type
 * @param {Object} input - verify
 * @return {Promise<*>}
 */
async function WAQI(type = "", input = {}) {
	$.log(`⚠ ${$.name}, WAQI`, `input: ${JSON.stringify(input)}`, "");
	// 构造请求
	let request = await GetRequest(type, input);
	// 发送请求
	let output = await GetData(type, request);
	$.log(`🚧 ${$.name}, WAQI`, `output: ${JSON.stringify(output)}`, "");
	return output
	/***************** Fuctions *****************/
	async function GetRequest(type = "", input = { api: "v2", lat: 0, lng: 0, idx: 0, token: "na" }) {
		$.log(`⚠ ${$.name}, Get WAQI Request, type: ${type}`, "");
		let request = {
			"url": "https://api.waqi.info",
			"headers": {
				"Content-Type": "application/x-www-form-urlencoded",
				"Origin": "https://waqi.info",
				"User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1",
				"Referer": "https://waqi.info/"
			}
		};
		if (type == "Nearest") {
			$.log('获取最近站点');
			if (input.api == "v1") mapq = "mapq";
			else if (input.api == "v2") mapq = "mapq2";
			request.url = `${request.url}/${mapq}/nearest?n=1&geo=1/${input.lat}/${input.lng}`;
		} else if (type == "Token") {
			$.log('获取令牌');
			request.url = `${request.url}/api/token/${input.idx}`
		} else if (type == "NOW") {
			$.log('获取即时信息');
			request.url = `${request.url}/api/feed/@${input.idx}/now.json`
			request.body = `token=${input.token}&id=${input.idx}`
		} else if (type == "AQI") {
			$.log('获取空气质量信息');
			request.url = `${request.url}/api/feed/@${input.idx}/aqi.json`
			request.body = `token=${input.token}&id=${input.idx}`
		} else if (type == "CityFeed") {
			$.log('获取城市信息');
			request.url = `${request.url}/feed/geo:${input.lat};${input.lng}/?token=${input.token}`
		} else if (type == "StationFeed") {
			$.log('获取站点信息');
			request.url = `${request.url}/feed/@${input.idx}/?token=${input.token}`
		}
		//$.log(`🎉 ${$.name}, Get WAQI Request`, `request: ${JSON.stringify(request)}`, "");
		return request
	};

	function GetData(type, request) {
		$.log(`⚠ ${$.name}, Get WAQI Data, type: ${type}`, "");
		return new Promise(resolve => {
			if (type == "NOW" || type == "AQI") {
				$.post(request, (error, response, data) => {
					try {
						if (error) throw new Error(error)
						else if (data) {
							const _data = JSON.parse(data)
							// Get Nearest Observation Station AQI Data
							// https://api.waqi.info/api/feed/@station.uid/now.json
							// https://api.waqi.info/api/feed/@station.uid/aqi.json
							if (type == "NOW" || type == "AQI") {
								if (_data.rxs.status == "ok") {
									if (_data.rxs.obs.some(o => o.status == 'ok')) {
										let i = _data.rxs.obs.findIndex(o => o.status == 'ok')
										let m = _data.rxs.obs.findIndex(o => o.msg)
										//$.obs = _data.rxs.obs[i].msg;
										if (i >= 0 && m >= 0) {
											$.log(`🎉 ${$.name}, GetData:${type}完成`, `i = ${i}, m = ${m}`, '')
											resolve(_data.rxs.obs[i].msg)
										} else if (i < 0 || m < 0) {
											$.log(`❗️ ${$.name}, GetData:${type}失败`, `OBS Get Error`, `i = ${i}, m = ${m}`, `空数据，浏览器访问 https://api.waqi.info/api/feed/@${idx}/aqi.json 查看获取结果`, '')
											resolve(_data.rxs.obs[i].msg)
										}
									} else $.log(`❗️ ${$.name}, GetData:${type}失败`, `OBS Status Error`, `obs.status: ${_data.rxs.obs[0].status}`, `data = ${data}`, '')
								} else $.log(`❗️ ${$.name}, GetData:${type}失败`, `RXS Status Error`, `status: ${_data.rxs.status}`, `data = ${data}`, '')
							}
						} else throw new Error(response);
					} catch (e) {
						$.logErr(`❗️${$.name}, GetData:${type}执行失败`, ` request = ${JSON.stringify(request)}`, ` error = ${error || e}`, `response = ${JSON.stringify(response)}`, `data = ${data}`, '')
					} finally {
						//$.log(`🚧 ${$.name}, GetData:${type}调试信息`, ` request = ${JSON.stringify(request)}`, `data = ${data}`, '')
						resolve()
					}
				})
			} else {
				$.get(request, (error, response, data) => {
					try {
						if (error) throw new Error(error)
						else if (data) {
							const _data = JSON.parse(data)
							// Search Nearest Observation Station
							// https://api.waqi.info/mapq/nearest/?n=1&geo=1/lat/lng
							// https://api.waqi.info/mapq2/nearest?n=1&geo=1/lat/lng
							if (type == "Nearest") {
								// 空值合并运算符
								var station = _data?.data?.stations?.[0] ?? _data?.d?.[0] ?? null;
								var idx = station?.idx ?? station?.x ?? null;
								var name = station?.name ?? station?.u ?? station?.nna ?? station?.nlo ?? null;
								var aqi = station?.aqi ?? station?.v ?? null;
								var distance = station?.distance ?? station?.d ?? null;
								//var country = station?.cca2 ?? station?.country ?? null;
								$.log(`🎉 ${$.name}, GetData:${type}完成`, `idx: ${idx}`, `观测站: ${name}`, `AQI: ${aqi}`, `距离: ${distance}`, '')
								resolve({ station, idx })
							}
							// Get Nearest Observation Station Token
							// https://api.waqi.info/api/token/station.uid
							else if (type == "Token") {
								var token = _data.rxs?.obs[0]?.msg?.token ?? "na"
								$.log(`🎉 ${$.name}, GetData:${type}完成`, `token = ${token}`, '')
								resolve(token)
							}
							// Geolocalized Feed
							// https://aqicn.org/json-api/doc/#api-Geolocalized_Feed-GetGeolocFeed
							// https://api.waqi.info/feed/geo::lat;:lng/?token=:token
							else if (type == "CityFeed") {
								var city = (_data.status == 'ok') ? _data?.data : null;
								$.log(`🎉 ${$.name}, GetData:${type}完成`, `idx: ${city?.idx}`, `观测站: ${city?.city?.name}`, `AQI: ${city?.aqi}`, '')
								resolve(city)
							}
							// Station Feed
							// https://api.waqi.info/feed/@station.uid/?token=:token
							else if (type == "StationFeed") {
								var station = (_data.status == 'ok') ? _data?.data : null;
								$.log(`🎉 ${$.name}, GetData:${type}完成`, `idx: ${station?.idx}`, `观测站: ${station?.city?.name}`, `AQI: ${station?.aqi}`, '')
								resolve(station)
							}
						} else throw new Error(response);
					} catch (e) {
						$.logErr(`❗️${$.name}, GetData:${type}执行失败`, ` request = ${JSON.stringify(request)}`, ` error = ${error || e}`, `response = ${JSON.stringify(response)}`, `data = ${data}`, '')
					} finally {
						//$.log(`🚧 ${$.name}, GetData:${type}调试信息`, ` request = ${JSON.stringify(request)}`, `data = ${data}`, '')
						resolve()
					}
				})
			};
		});
	};
};

/**
 * get Grid Weather Minutely
 * @author WordlessEcho
 * @param {Number} lat - latitude
 * @param {Number} lng - longitude
 * @return {Promise<*>}
 */
function getGridWeatherMinutely(lat, lng) {
	const request = {
		"url": `https://www.weatherol.cn/api/minute/getPrecipitation?type=forecast&ll=${lng},${lat}`
	};

	return new Promise((resolve) => {
		$.get(request, (error, response, data) => {
			try {
				const _data = JSON.parse(data)

				if (error) {
					throw new Error(error);
				}

				if (_data.status == "ok") {
					resolve(_data);
				}
			} catch (e) {
				$.log(`❗️ ${$.name}, getGridWeatherMinutely执行失败! `, `error = ${error || e}, `, `response = ${JSON.stringify(response)}, `, `data = ${data}`, '');
			} finally {
					//$.log(`⚠️ ${$.name}, getGridWeatherMinutely, `, `data = ${data}`, '');
					$.log(`🎉 ${$.name}, getGridWeatherMinutely执行完成！`, '');
			}
		});
	});
};

// 
/**
 * Output Air Quality Data
 * @author VirgilClyne
 * @param {String} api - API Version
 * @param {Object} now - minutelyData
 * @param {Object} obs - weather
 * @param {Object} weather - weather
 * @param {Object} Settings - Settings
 * @return {Promise<*>}
 */
async function outputAQI(api, now, obs, weather, Settings) {
	$.log(`⚠️ ${$.name}, ${outputAQI.name}检测`, `AQ data ${api}`, '');
	const AQIname = (api == "v1") ? "air_quality"
		: (api == "v2") ? "airQuality"
			: "airQuality";
	const unit = (api == "v1") ? "μg\/m3"
		: (api == "v2") ? "microgramsPerM3"
			: "microgramsPerM3";
	//创建对象
	if (!weather[`${AQIname}`]) {
		$.log(`⚠️ ${$.name}, 没有空气质量数据, 创建`, '');
		weather[`${AQIname}`] = {
			"isSignificant": true, // 重要/置顶
			"pollutants": {},
			"metadata": {},
			"name": "AirQuality",
		};
		if (api == "v1") {
			weather[`${AQIname}`].metadata.version = 1;
			weather[`${AQIname}`].metadata.data_source = 0; //来自XX读数 0:监测站 1:模型
		}
		else if (api == "v2") {
			weather[`${AQIname}`].metadata.units = "m";
			weather[`${AQIname}`].metadata.version = 2;
			weather[`${AQIname}`].sourceType = "station"; //station:监测站 modeled:模型
		}
	};
	// 注入数据
	//条件运算符 & 可选链操作符
	weather[`${AQIname}`].source = obs?.city?.name ?? now?.name ?? now?.u ?? now?.nna ?? now?.nlo;
	weather[`${AQIname}`].learnMoreURL = obs?.city?.url + `/${now?.country ?? now?.cca2}/m`.toLowerCase();
	weather[`${AQIname}`].primaryPollutant = switchPollutantsType(obs?.dominentpol ?? now?.pol);
	weather[`${AQIname}`].pollutants.CO = { "name": "CO", "amount": obs.iaqi.co?.v || -1, "unit": unit };
	weather[`${AQIname}`].pollutants.NO = { "name": "NO", "amount": obs.iaqi.no?.v || -1, "unit": unit };
	weather[`${AQIname}`].pollutants.NO2 = { "name": "NO2", "amount": obs.iaqi.no2?.v || -1, "unit": unit };
	weather[`${AQIname}`].pollutants.SO2 = { "name": "SO2", "amount": obs.iaqi.so2?.v || -1, "unit": unit };
	weather[`${AQIname}`].pollutants.OZONE = { "name": "OZONE", "amount": obs.iaqi.o3?.v || -1, "unit": unit };
	weather[`${AQIname}`].pollutants.NOX = { "name": "NOX", "amount": obs.iaqi.nox?.v || -1, "unit": unit };
	weather[`${AQIname}`].pollutants["PM2.5"] = { "name": "PM2.5", "amount": obs.iaqi.pm25?.v || -1, "unit": unit };
	weather[`${AQIname}`].pollutants.PM10 = { "name": "PM10", "amount": obs.iaqi.pm10?.v || -1, "unit": unit };
	weather[`${AQIname}`].metadata.longitude = obs?.city?.geo?.[0] ?? now?.geo?.[0];
	weather[`${AQIname}`].metadata.latitude = obs?.city?.geo?.[1] ?? now?.geo?.[1];
	weather[`${AQIname}`].metadata.language = weather?.[`${AQIname}`]?.metadata?.language ?? weather?.currentWeather?.metadata?.language ?? weather?.current_observations?.metadata?.language;
	if (api == "v1") {
		weather.air_quality.airQualityIndex = obs?.aqi ?? now?.aqi ?? now?.v;
		weather.air_quality.airQualityScale = Settings?.Scale || "EPA_NowCast.2201";
		weather.air_quality.airQualityCategoryIndex = classifyAirQualityLevel(obs?.aqi ?? now?.aqi ?? now?.v);
		weather.air_quality.metadata.reported_time = convertTime(new Date(obs?.time?.v ?? now?.t), 'remain', api);
		//weather.air_quality.metadata.provider_name = obs?.attributions?.[obs.attributions.length - 1]?.name;
		weather.air_quality.metadata.provider_name = obs?.attributions?.[0]?.name;
		weather.air_quality.metadata.expire_time = convertTime(new Date(obs?.time?.v ?? now?.t), 'add-1h-floor', api);
		weather.air_quality.metadata.provider_logo = "https://hub.nan.ge/IconSet/Color/Apple_1.png";
		weather.air_quality.metadata.read_time = convertTime(new Date(), 'remain', api);
	} else if (api == "v2") {
		weather.airQuality.index = obs?.aqi ?? now?.aqi ?? now?.v;
		weather.airQuality.scale = Settings?.Scale || "EPA_NowCast.2201";
		weather.airQuality.categoryIndex = classifyAirQualityLevel(obs?.aqi ?? now?.aqi ?? now?.v);
		weather.airQuality.metadata.providerLogo = "https://hub.nan.ge/IconSet/Color/Apple_1.png";
		//weather.airQuality.metadata.providerName = obs?.attributions?.[obs.attributions.length - 1]?.name;
		weather.airQuality.metadata.providerName = obs?.attributions?.[0]?.name;
		weather.airQuality.metadata.expireTime = convertTime(new Date(obs?.time?.iso ?? now?.utime), 'add-1h-floor', api);
		weather.airQuality.metadata.reportedTime = convertTime(new Date(obs?.time?.iso ?? now?.utime), 'remain', api);
		weather.airQuality.metadata.readTime = convertTime(new Date(), 'remain', api);
	}
	$.log(`🎉 ${$.name}, ${outputAQI.name}完成`, '');
	return weather
};

/**
 * output forecast NextHour Data
 * @author WordlessEcho
 * @param {String} api - API Version
 * @param {Object} minutelyData - minutelyData
 * @param {Object} weather - weather
 * @param {Object} Settings - Settings
 * @return {Promise<*>}
 */
async function outputNextHour(api, minutelyData, weather, Settings) {
	const minutely = minutelyData?.result?.minutely;

	if (minutelyData?.status !== "ok" || minutely?.status !== "ok") {
		$.log(`❗️ ${$.name}, 分钟级降水信息获取失败`, `minutely = ${JSON.stringify(minutelyData)}`, '');
		return weather;
	}

	$.log(`⚠️ ${$.name}, Detect`, `forecastNextHour data ${api}`, '');
  if (!weather.forecastNextHour) {
    $.log(`⚠️ ${$.name}, non-existent forecastNextHour data`, `creating`, '');
    weather.forecastNextHour = {
      "name": "NextHourForecast",
      "metadata": {},
      "condition": [],
      "summary": [],
      "startTime": "",
      "minutes": [],
    }
  }

	// TODO: split API logic from this function
	weather.forecastNextHour.metadata.expireTime = convertTime(new Date(minutelyData?.server_time * 1000), 'add-1h-floor', api);
	// this API doesn't support language switch
	// replace `zh_CN` to `zh-CN`
	weather.forecastNextHour.metadata.language = minutelyData?.lang.replace('_', '-');
	weather.forecastNextHour.metadata.longitude = minutelyData?.location[1];
	weather.forecastNextHour.metadata.latitude = minutelyData?.location[0];
	weather.forecastNextHour.metadata.providerName = "气象在线";
	weather.forecastNextHour.metadata.readTime = convertTime(new Date(), 'remain', api);
	// actually we use radar data directly
	// it looks like Apple doesn't care this data
	// weather.forecastNextHour.metadata.units = "m";
	weather.forecastNextHour.metadata.units = "radar";
	weather.forecastNextHour.metadata.version = 2;

	const addMinutes = (date, minutes) => (new Date()).setTime(date.getTime() + (1000 * 60 * minutes));

	const zeroSecondTime = (new Date(minutelyData?.server_time * 1000)).setSeconds(0);
	const nextMinuteWithoutSecond = addMinutes(new Date(zeroSecondTime), 1);
	const startTimeIos = convertTime(new Date(nextMinuteWithoutSecond), 'remain', api);

	const conditions = {
		"startTime": startTimeIos,
		// TODO: type of weather
		"token": minutely.precipitation_2h.find(precipitation => precipitation > 0) === undefined ? "clear" : "rain.constant",
		"longTemplate": minutelyData?.result?.forecast_keypoint ?? minutely?.description,
		// use forecast_keypoint from ColorfulClouds?
		"shortTemplate": minutely?.description,
		// TODO
		"parameters": {},
	};
	weather.forecastNextHour.condition.push(conditions);

	const summaries = {
		"startTime": startTimeIos,
		// TODO: type of weather
		"condition": minutely.precipitation_2h.find(precipitation => precipitation > 0) === undefined ? "clear" : "rain",
	};

	const radarToApplePrecipitation = value => {
		const DECIMALS_LENGTH = 10000;
		const PRECIPITATION_RANGE = {
			noRainOrSnow: { lower: 0, upper: 0.031 },
			lightRainOrSnow: { lower: 0.031, upper: 0.25 },
			moderateRainOrSnow: { lower: 0.25, upper: 0.35 },
			heavyRainOrSnow: { lower: 0.35, upper: 0.48 },
			stormRainOrSnow: { lower: 0.48, upper: Number.MAX_VALUE },
		};
		const PRECIP_INTENSITY_PERCEIVED_DIVIDER = {
			beginning: 0, levelBottom: 1, levelMiddle: 2, levelTop: 3,
		};
		const {
			noRainOrSnow,
			lightRainOrSnow,
			moderateRainOrSnow,
			heavyRainOrSnow,
			stormRainOrSnow
		} = PRECIPITATION_RANGE;

		if (value < noRainOrSnow.upper) {
			if (value < noRainOrSnow.lower) {
				$.log(`⚠️ ${$.name}, 降水强度不应为负值`, `minutely = ${JSON.stringify(minutely)}`,'');
			}

			return PRECIP_INTENSITY_PERCEIVED_DIVIDER.beginning;
		} else if (value < lightRainOrSnow.upper) {
			return (
				// multiple 10000 for precision of calculation
				// base of previous levels + percentage of the value in its level
				PRECIP_INTENSITY_PERCEIVED_DIVIDER.beginning +
				(((value - noRainOrSnow.upper) * DECIMALS_LENGTH) /
				((lightRainOrSnow.upper - lightRainOrSnow.lower) * DECIMALS_LENGTH))
			);
		} else if (value < moderateRainOrSnow.upper) {
			return (
				PRECIP_INTENSITY_PERCEIVED_DIVIDER.levelBottom +
				(((value - lightRainOrSnow.upper) * DECIMALS_LENGTH) /
				((moderateRainOrSnow.upper - moderateRainOrSnow.lower) * DECIMALS_LENGTH))
			);
		} else if (value < heavyRainOrSnow.upper) {
			return (
				PRECIP_INTENSITY_PERCEIVED_DIVIDER.levelMiddle +
				(((value - moderateRainOrSnow.upper) * DECIMALS_LENGTH) /
				((heavyRainOrSnow.upper - heavyRainOrSnow.lower) * DECIMALS_LENGTH))
			);
		} else {
			return PRECIP_INTENSITY_PERCEIVED_DIVIDER.levelTop;
		}
	};

	if (Math.max(...minutely.probability) > 0) {
		// convert to percentage
		summaries.precipChance = parseInt(Math.max(...minutely.probability) * 100);
		// TODO: find the limit of precipIntensity
		summaries.precipIntensity = Math.max(...minutely.precipitation_2h) * 0.1;
	}

	weather.forecastNextHour.summary.push(summaries);

	weather.forecastNextHour.startTime = startTimeIos;

	const startTimeDate = new Date(startTimeIos);
	minutely.precipitation_2h.forEach((value, index) => {
		const nextMinuteTime = addMinutes(startTimeDate, index);

		weather.forecastNextHour.minutes.push({
			"startTime": convertTime(new Date(nextMinuteTime), 'remain', api),
			// we only have per half hour probability data
			// `index / 30` => use one probability for 30 minutes
			// `* 100` => convert to percentages
			"precipChance": value > 0 ? parseInt(minutely.probability[parseInt(index / 30)] * 100) : 0,
			// it looks like Apple doesn't care this data
			// TODO: find the limit of precipIntensity
			"precipIntensity": value * 0.1,
			"precipIntensityPerceived": radarToApplePrecipitation(value),
		});
	});

	$.log(`🚧 ${$.name}, forecastNextHour = ${JSON.stringify(weather.forecastNextHour)}`, "");
	$.log(`🎉 ${$.name}, 下一小时降水强度替换完成`, '');
	return weather;
};

/***************** Fuctions *****************/
// Function 1
// Switch Pollutants Type
// https://github.com/Hackl0us/SS-Rule-Snippet/blob/master/Scripts/Surge/weather_aqi_us/iOS15_Weather_AQI_US.js
function switchPollutantsType(pollutant) {
	const pollutant_map = { "co": "CO", "no": "NO", "no2": "NO2", "so2": "SO2", "o3": "OZONE", "nox": "NOX", "pm25": "PM2.5", "pm10": "PM10" };
	return pollutant_map?.[pollutant] ?? "OTHER";
};

// Function 2
// Convert Time Format
// https://github.com/Hackl0us/SS-Rule-Snippet/blob/master/Scripts/Surge/weather_aqi_us/iOS15_Weather_AQI_US.js
function convertTime(time, action, api) {
	switch (action) {
		case 'remain':
			time.setMilliseconds(0);
			break;
		case 'add-1h-floor':
			time.setHours(time.getHours() + 1);
			time.setMinutes(0, 0, 0);
			break;
		default:
			$.log(`⚠️ ${$.name}, Time Converter, Error`, `time: ${time}`, '');
	}
	if (api == "v1") {
		let timeString = time.getTime() / 1000;
		return timeString;
	}
	if (api == "v2") {
		let timeString = time.toISOString().split('.')[0] + 'Z';
		return timeString;
	}
};

// Function 3
// Calculate Air Quality Level
// https://github.com/Hackl0us/SS-Rule-Snippet/blob/master/Scripts/Surge/weather_aqi_us/iOS15_Weather_AQI_US.js
function classifyAirQualityLevel(aqiIndex) {
	if (aqiIndex >= 0 && aqiIndex <= 50) return 1;
	else if (aqiIndex >= 51 && aqiIndex <= 100) return 2;
	else if (aqiIndex >= 101 && aqiIndex <= 150) return 3;
	else if (aqiIndex >= 151 && aqiIndex <= 200) return 4;
	else if (aqiIndex >= 201 && aqiIndex <= 300) return 5;
	else if (aqiIndex >= 301 && aqiIndex <= 500) return 6;
	else {
		$.log(`⚠️ ${$.name}, classifyAirQualityLevel, Error`, `aqiIndex: ${aqiIndex}`, '');
		return 0;
	}
};

/***************** Env *****************/
// prettier-ignore
// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}isStash(){return"undefined"!=typeof $environment&&$environment["stash-version"]}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,i=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":i}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

// https://github.com/VirgilClyne/iRingo/blob/main/function/URLSearch.min.js
function URLSearch(s){return new class{constructor(s=[]){this.name="urlParams v1.0.0",this.opts=s,this.json={url:{scheme:"",host:"",path:""},params:{}}}parse(s){let t=s.match(/(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/)?.groups??null;return t?.params&&(t.params=Object.fromEntries(t.params.split("&").map((s=>s.split("="))))),t}stringify(s=this.json){return s?.params?s.scheme+"://"+s.host+"/"+s.path+"?"+Object.entries(s.params).map((s=>s.join("="))).join("&"):s.scheme+"://"+s.host+"/"+s.path}}(s)}