
var ddgksf2013=JSON.parse($response.body);ddgksf2013.materialsList&&(1==ddgksf2013.materialsList.length?(ddgksf2013.materialsList[0].filePath="",ddgksf2013.advertParam.skipTime=1,ddgksf2013.advertParam.skipTimeAgain=5,ddgksf2013.advertParam.showSkipBtn=-1):1<ddgksf2013.materialsList.length&&(ddgksf2013.materialsList=[{}])),$done({body:JSON.stringify(ddgksf2013)});
