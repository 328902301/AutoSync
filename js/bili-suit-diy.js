let $=kokoryh(),body=$response.body;if(body){var obj=JSON.parse(body);let e=getType(obj),t=$.getValue("bili_user_equip"),i=$.getValue("bili_load_equip"),o=$.getValue("bili_skin_num"),n=$.getValue("bili_load_num");setEquip(t,o,e,"user_equip"),setEquip(i,n,e,"load_equip"),$done({body:JSON.stringify(obj)})}else $done({});function setEquip(e,t,i,o){if(e){let n=JSON.parse(e),s=getNum(t.trim(),i);0===s||(1===n.length?obj.data[o]=n[0]:s<=n.length?obj.data[o]=n[s-1]:($.notify("B站装扮DIY","","参数设置过大，请检查BoxJs设置"),obj.data[o]=n[0]))}}function getNum(e,t){return e?parseInt(e)>=0?parseInt(e):/([;；]\d+(:\d+)?){2}/.test(e)?parseInt(e.split(/;|；/)[t+1].split(":")[0]):($.notify("B站装扮DIY","","参数格式非法，请检查BoxJs设置"),1):1}function getType(e){return e.data.skin_colors?0:1}function kokoryh(){const e="undefined"!=typeof $task,t="undefined"!=typeof $httpClient;return{isQuanX:e,isSurge:t,notify:(i,o,n)=>{e&&$notify(i,o,n),t&&$notification.post(i,o,n)},getValue:i=>e?$prefs.valueForKey(i):t?$persistentStore.read(i):void 0,setValue:(i,o)=>e?$prefs.setValueForKey(i,o):t?$persistentStore.write(i,o):void 0}}