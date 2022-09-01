import requests


def get_module_content(module_urls):
    config_dict = dict()
    for module_url in module_urls:
        module_text = requests.get(module_url).text
        section_key = ''
        for raw_line in module_text.split('\n'):
            if raw_line.startswith('#'):
                pass
            elif raw_line.startswith('['):
                section_key = raw_line.rstrip()
                if section_key not in config_dict:
                    config_dict[section_key] = list()
            else:
                line_content = raw_line.rstrip()
                if line_content:
                    if section_key:
                        if line_content not in config_dict[section_key]:
                            config_dict[section_key].append(line_content + '\n')
                        else:
                            print(line_content + ' is duplicated')
                    else:
                        print(line_content + ' has no section_key')
    return config_dict


sgmodules = ['https://raw.githubusercontent.com/sub-store-org/Sub-Store/master/config/Surge.sgmodule',
             'https://ruleset.skk.moe/Modules/sukka_mitm_hostnames.sgmodule',
             'https://gist.githubusercontent.com/futurkk/144a94ddac70290f638f998148ccccf8/raw/ami.sgmodule',
             'https://sgmodule-argument-proxy.vercel.app/api/temp?url=https%3A%2F%2Fraw.githubusercontent.com%2FVirgilClyne%2FiRingo%2Fmain%2Fsgmodule%2FWeather.sgmodule&arg=Switch%3Dtrue%26NextHour.Switch%3Dtrue%26NextHour.Source%3Dapi.caiyunapp.com%26AQI.Switch%3Dtrue%26AQI.Targets%3DHJ6332012%26AQI.Local.Switch%3Dtrue%26AQI.Local.Standard%3DWAQI_InstantCast%26AQI.Source%3Dapi.caiyunapp.com%26AQI.Comparison.Switch%3Dtrue%26AQI.Comparison.Source%3Dapi.caiyunapp.com%26Map.AQI%3Dfalse%26APIs.WeatherOL.HTTPHeaders%3D%7B%27Content-Type%27%3A%27application%2Fjson%27%7D%26APIs.ColorfulClouds.HTTPHeaders%3D%7B%27Content-Type%27%3A%27application%2Fjson%27%7D%26APIs.ColorfulClouds.Token%3D5Jo8Fr20vSRTaDYE%26APIs.ColorfulClouds.ForceCNForAQI%3Dtrue%26APIs.ColorfulClouds.ForceCNForComparison%3Dfalse%26APIs.WAQI.HTTPHeaders%3D%7B%27Content-Type%27%3A%27application%2Fjson%27%7D%26APIs.WAQI.Token%3D%26Log.Level%3Dinfo%26Log.Location%3Dfalse']

config_combine = get_module_content(sgmodules)


with open('./sgmodule/ami.sgmodule', 'w') as f:
    f.writelines(['#!name=ami@Surge\n', '#!desc=Some thing.\n', '\n'])
    for section_key in config_combine:
        f.write(section_key + '\n')
        f.writelines(config_combine[section_key])
        f.write('\n')
