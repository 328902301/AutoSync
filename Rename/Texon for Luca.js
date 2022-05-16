function operator(proxies) {
  const AirportName = 'Texon';
  const PREFIX_NAMES = [{chinese: '实验',english: 'Exp'}, {chinese: '高级',english: 'Pro'}, {chinese:'标准',english:'Std'}];
  const RESION_NAMES = [{chinese: '香港',english: 'Hong Kong'}, {chinese: '美國',english: 'United States'}, {chinese:'新加坡',english:'Singapore'}, {chinese:'日本',english:'Japan'}, {chinese:'台灣',english:'Taiwan'}];
  
  const simpleRegionMap = Object.values(RESION_NAMES);
  return proxies.map((res) => {
    const proxyRegionName = simpleRegionMap.find((set) => res.name.includes(set.chinese));
    let modifyName;
    if (proxyRegionName) {
      modifyName = `${AirportName} > ${proxyRegionName.english}`;
      const regionNumber = res.name.match(/\d+/g)?.[0];
      const proxyPrefix = PREFIX_NAMES.find((set) => res.name.includes(set.chinese))?.english;
      if (proxyPrefix !== undefined) {
        modifyName += ` ${proxyPrefix}`;
      }
      if (regionNumber !== undefined) {
        modifyName += ` ${regionNumber}`;
      }
    }
    return {
      ...res,
      name: modifyName || res.name,
    };
  });
}
