// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: baseball-ball;
/********************************************************
 ************* MAKE SURE TO COPY EVERYTHING *************
 *******************************************************
 ************ © 2021 Copyright Nicolas-kings ************/
/********************************************************
 * script     : ONE-NBAMATCH.js
 * version    : 1.4
 * author     : Nicolas-kings
 * date       : 2021-06-03
 * desc       : 具体配置说明，详见微信公众号-曰(读yue)坛
 * github     : https://github.com/Nicolasking007/Scriptable
 * Changelog  : v1.4 - 修复因混淆导致判断出错的问题
 *              v1.3 - 修复不能正常使用的问题，建议立即更新
 *              v1.2 - 修复背景报错，新增多个图片背景选项
 *              v1.1 - 修复一个不可饶恕的bug，我的锅 
 *              v1.0 - 首次发布              
----------------------------------------------- */
//##############公共参数配置模块############## 

const changePicBg = false  //选择true时，使用透明背景 
const ImageMode = true   //选择true时，使用必应壁纸
const previewSize = (config.runsInWidget ? config.widgetFamily : "medium");   //预览大小  medium/large//
const colorMode = false // 是否使用纯色背景
const bgColor = new Color('#223A70', 1)// 小组件背景色
const blurStyle = "dark" // 高斯样式：light/dark
const blursize = 100   //模糊程度
const Imgstyle = 1   //1 图片加蒙板 2 unsplash壁纸  3 Bing 壁纸
const IMAGE_SEARCH_TERMS = "nature,wather"  // 仅当选项为Unsplash 有效
//##############用户自定义参数配置模块-开始##############
//⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊⇊
//##############请在首次运行之前进行修改##############

const teamId = args.widgetParameter || '17'    //关注的球队id 湖人13 在此修改或桌面组件Parameter处 详见公众号配置
const maxEvents = previewSize === "large" ? 7 : 4  //显示内容数量
//⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈⇈
//##############用户自定义参数配置模块-结束##############
const filename = `${Script.name()}.jpg`
const files = FileManager.local()
const path = files.joinPath(files.documentsDirectory(), filename)
const versionData = await getversion()
let needUpdated = await updateCheck(1.4)
const NBAdata = await getNBAdata()

const format = formatDate()
const datenvet = new Date().format("yyyy-MM")
const padding = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
}
const widget = await createWidget()

//#####################背景模块-START#####################

if (!colorMode && !ImageMode && !config.runsInWidget && changePicBg) {
    const okTips = "您的小部件背景已准备就绪"
    let message = "图片模式支持相册照片&背景透明"
    let options = ["图片选择", "透明背景"]
    let isTransparentMode = await generateAlert(message, options)
    if (!isTransparentMode) {
        let img = await Photos.fromLibrary()
        message = okTips
        const resultOptions = ["好的"]
        await generateAlert(message, resultOptions)
        files.writeImage(path, img)
    } else {
        message = "以下是【透明背景】生成步骤，如果你没有屏幕截图请退出，并返回主屏幕长按进入编辑模式。滑动到最右边的空白页截图。然后重新运行！"
        let exitOptions = ["继续(已有截图)", "退出(没有截图)"]

        let shouldExit = await generateAlert(message, exitOptions)
        if (shouldExit) return

        // Get screenshot and determine phone size.
        let img = await Photos.fromLibrary()
        let height = img.size.height
        let phone = phoneSizes()[height]
        if (!phone) {
            message = "您似乎选择了非iPhone屏幕截图的图像，或者不支持您的iPhone。请使用其他图像再试一次!"
            await generateAlert(message, ["好的！我现在去截图"])
            return
        }

        // Prompt for widget size and position.
        message = "您想要创建什么尺寸的小部件？"
        let sizes = ["小号", "中号", "大号"]
        let size = await generateAlert(message, sizes)
        let widgetSize = sizes[size]

        message = "您想它在什么位置？"
        message += (height == 1136 ? " (请注意，您的设备仅支持两行小部件，因此中间和底部选项相同。)" : "")

        // Determine image crop based on phone size.
        let crop = { w: "", h: "", x: "", y: "" }
        if (widgetSize == "小号") {
            crop.w = phone.小号
            crop.h = phone.小号
            let positions = ["顶部 左边", "顶部 右边", "中间 左边", "中间 右边", "底部 左边", "底部 右边"]
            let position = await generateAlert(message, positions)

            // Convert the two words into two keys for the phone size dictionary.
            let keys = positions[position].split(' ')
            crop.y = phone[keys[0]]
            crop.x = phone[keys[1]]

        } else if (widgetSize == "中号") {
            crop.w = phone.中号
            crop.h = phone.小号

            // 中号 and 大号 widgets have a fixed x-value.
            crop.x = phone.左边
            let positions = ["顶部", "中间", "底部"]
            let position = await generateAlert(message, positions)
            let key = positions[position].toLowerCase()
            crop.y = phone[key]

        } else if (widgetSize == "大号") {
            crop.w = phone.中号
            crop.h = phone.大号
            crop.x = phone.左边
            let positions = ["顶部", "底部"]
            let position = await generateAlert(message, positions)

            // 大号 widgets at the 底部 have the "中间" y-value.
            crop.y = position ? phone.中间 : phone.顶部
        }

        // Crop image and finalize the widget.
        let imgCrop = cropImage(img, new Rect(crop.x, crop.y, crop.w, crop.h))

        message = "您的小部件背景已准备就绪，退出到桌面预览。"
        const resultOptions = ["好的"]
        await generateAlert(message, resultOptions)
        files.writeImage(path, imgCrop)
    }

}


//#####################背景模块-设置小组件的背景#####################

if (colorMode) {
    widget.backgroundColor = bgColor
} else if (ImageMode) {
    switch (Imgstyle) {
        case 1:
            const blugImgs = await getImageByUrl("https://source.unsplash.com/random/800x373?" + IMAGE_SEARCH_TERMS, `_${Script.name()}-bg`, false)
            bgImg = await blurImage(blugImgs, blurStyle, blursize)
            widget.backgroundImage = bgImg
            break;
        case 2:
            const unsplashurl = "https://source.unsplash.com/random/800x373?" + IMAGE_SEARCH_TERMS
            const orginImgs = await getImageByUrl(unsplashurl, `_${Script.name()}-orginImgs-bg`, false)
            bgImg = await shadowImage(orginImgs)
            widget.backgroundImage = bgImg
            break;
        case 3:
            const bingurl = "https://api.dujin.org/bing/1366.php"
            const bingImgs = await getImageByUrl(bingurl, `_${Script.name()}-bingImgs-bg`, false)
            bgImg = await shadowImage(bingImgs)
            widget.backgroundImage = bgImg
            break;
    }

}
else {
    widget.backgroundImage = files.readImage(path)
}
// 设置边距(上，左，下，右)
widget.setPadding(padding.top, padding.left, padding.bottom, padding.right)

if (!config.runsInWidget) {
    switch (previewSize) {
        case "small":
            await widget.presentSmall();
            break;
        case "medium":
            await widget.presentMedium();
            break;
        case "large":
            await widget.presentLarge();
            break;
    }
}
Script.setWidget(widget)
// 完成脚本
Script.complete()
// 预览

//#####################内容模块-创建小组件内容#####################

async function createWidget() {

    let w = new ListWidget();
    const events = NBAdata.data
    const imageSize = previewSize === "large" ? 32 : 26;
    const keys = await getObjectKeys(events)
    var status = false
    var key;
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        if (key == datenvet) {
            status = true
            break;

        }

    }

    if (previewSize == 'large') {

        const teamName = events[key][events[key].length - 1].matchDesc
        // w.addSpacer(2)
        let header = w.addStack()
        header.centerAlignContent()
        let _icon = header.addImage(await getImageByUrl(`https://search-operate.cdn.bcebos.com/8e4afe1c2bf65156b69d5f65300c038d.png`, `ONE-NBAicon-bg`, false))
        _icon.imageSize = new Size(90, 45)
        _icon.cornerRadius = 4
        // header.addSpacer(5)
        let _title = header.addText(`\u0032\u0030\u0032\u0030\u002d\u0032\u0030\u0032\u0031\u5e74\u5ea6 · ${teamName}`)
        _title.textColor = Color.white()
        _title.textOpacity = 0.7
        _title.font = Font.boldRoundedSystemFont(15)  //new Font("Chalkduster", 16) 
        header.addSpacer()
        const timeFormatter = new DateFormatter();
        timeFormatter.locale = "en";
        timeFormatter.useNoDateStyle();
        timeFormatter.useShortTimeStyle();

        const dateLine = header.addText(`↻ ${timeFormatter.string(new Date())}`);
        dateLine.font = new Font("Chalkduster", 10)
        dateLine.textColor = Color.white();
        dateLine.textOpacity = 0.7;

        // w.addSpacer(10)


    }


    if (status) {

        const limitedEvents = events[datenvet].slice(0, maxEvents)
        for (let i = 0; i < limitedEvents.length; i++) {
            let e = events[key].slice(-maxEvents)
            let competitors = e[i];

            //   if (previewSize === "large" || i > 0) {
            //     w.addSpacer(10)
            //   }

            // let homeImg = ""
            // let awayImg = ""


            // homeImg = teamImg
            awayImg = await getImageByUrl(competitors.leftBadge, `ONE-NBAleft-bg`, false)// 
            // await getTeamImg(competitors.leftBadge)

            homeImg = await getImageByUrl(competitors.rightBadge, `ONE-NBAright-bg`, false)
            //     await getTeamImg(competitors.rightBadge)
            // awayImg = teamImg

            let rowStack = w.addStack()
            rowStack.centerAlignContent()
            rowStack.addSpacer(15)

            // home team image
            let homeImageStack = rowStack.addStack();
            let homeImage = homeImageStack.addImage(homeImg);
            homeImage.imageSize = new Size(imageSize, imageSize)
            homeImageStack.addSpacer(10)

            // home team name1
            let homeNameStack = rowStack.addStack();
            let homeName = homeNameStack.addText(competitors.rightName);
            homeName.font = Font.mediumSystemFont(12);
            homeName.textColor = Color.white()
            homeNameStack.size = new Size(90, 14)
            homeNameStack.addSpacer()

            if (Number(competitors.rightGoal) > Number(competitors.leftGoal)) {
                let homescoreStack = rowStack.addStack();
                let homescore = homescoreStack.addText(competitors.rightGoal);
                homescore.font = Font.boldRoundedSystemFont(12) //new Font("Chalkduster", 12)
                homescore.textColor = Color.red()
                homescoreStack.size = new Size(36, 12)
                homescoreStack.addSpacer(5)

            } else {
                let homescoreStack = rowStack.addStack();
                let homescore = homescoreStack.addText(competitors.rightGoal);
                homescore.font = Font.boldRoundedSystemFont(12) //new Font("Chalkduster", 12)
                homescore.textColor = Color.white()
                homescoreStack.size = new Size(36, 12)
                homescoreStack.addSpacer(5)

            }



            let separatorStack = rowStack.addStack();
            let separator = separatorStack.addText('-')
            separator.font = Font.mediumSystemFont(12)
            separator.textColor = Color.white()
            separatorStack.size = new Size(24, 12)
            separatorStack.addSpacer(10)

            // away team name
            if (Number(competitors.leftGoal) > Number(competitors.rightGoal)) {
                let awayscoreStack = rowStack.addStack();
                let awayscore = awayscoreStack.addText(competitors.leftGoal);
                awayscore.font = Font.boldRoundedSystemFont(12) //new Font("Chalkduster", 12)
                awayscore.textColor = Color.red()
                awayscoreStack.size = new Size(36, 12)
                awayscoreStack.addSpacer(5)

            } else {
                let awayscoreStack = rowStack.addStack();
                let awayscore = awayscoreStack.addText(competitors.leftGoal);
                awayscore.font = Font.boldRoundedSystemFont(12) //new Font("Chalkduster", 12)
                awayscore.textColor = Color.white()
                awayscoreStack.size = new Size(36, 12)
                awayscoreStack.addSpacer(5)

            }



            let awayNameStack = rowStack.addStack();
            awayNameStack.addSpacer()
            let awayName = awayNameStack.addText(competitors.leftName);
            awayName.font = Font.mediumSystemFont(12);
            awayName.textColor = Color.white()
            awayNameStack.size = new Size(90, 14)
            awayNameStack.addSpacer(10)

            // away team image
            let awayImageStack = rowStack.addStack();
            let awayImage = awayImageStack.addImage(awayImg);
            awayImage.imageSize = new Size(imageSize, imageSize);

            w.addSpacer(5)

            let infoRowStack = w.addStack()
            infoRowStack.centerAlignContent()
            infoRowStack.addSpacer()

            let dateStack = infoRowStack.addStack()
            const dateFormatter = new DateFormatter()
            dateFormatter.useMediumDateStyle()
            dateFormatter.useShortTimeStyle()
            // let parsedDate = new Date(Date.parse(events['2021-05'][0].startTime))
            // let formattedDate = dateFormatter.string()
            if (competitors.liveType == 4) {
                let date = infoRowStack.addText(new Date(competitors.startTime.replace(/-/g, "/")).format("M月d日 hh:mm") + " ⤧ " + '\u5df2\u7ed3\u675f')
                date.font = Font.mediumSystemFont(8)
                date.textColor = Color.white()
                date.centerAlignText()
                //date.textOpacity = 0.7

            } else if (competitors.livePeriod == 1 && competitors.quarterTime !== undefined) {
                let date = infoRowStack.addText('\u76f4\u64ad\u4e2d\uff1a' + competitors.quarter + ' - ' + competitors.quarterTime)
                date.font = Font.mediumSystemFont(8)
                date.textColor = Color.red()
                date.centerAlignText()

            } else {
                let date = infoRowStack.addText(new Date(competitors.startTime.replace(/-/g, "/")).format("M月d日 hh:mm") + " ⤧ " + '\u672a\u5f00\u59cb')
                date.font = Font.mediumSystemFont(8)
                date.textColor = Color.white()
                date.centerAlignText()
                //  date.textOpacity = 0.7
            }
            w.url = 'https://sports.qq.com/kbsweb/kbsshare/game.htm?mid=' + competitors.mid
            //dateStack.addSpacer(10)
            infoRowStack.addSpacer()
            //分割线
            // if (i !== maxEvents - 1) {
            //   w.addSpacer(10)

            //   let dividerStack = w.addStack()
            //   let divider = dividerStack.addImage(createDivider())
            //   divider.imageOpacity = 0.5
            // }

        }

    } else {
        w.addSpacer()
        let error = w.addText(versionData['ONE-NBAMATCH'].notice)
        error.font = Font.boldSystemFont(16);
        error.centerAlignText()
        error.textColor = Color.white()
        w.addSpacer()
    }



    return w
}

//#####################事务逻辑处理模块#####################

async function getNBAdata() {
    const NBACachePath = files.joinPath(files.documentsDirectory(), "NBAMATCH-NK")
    var NBAData
    try {
        NBAData = await new Request(`https://matchweb.sports.qq.com/team/matchList?teamId=${teamId}&competitionId=100000&_=1539156446423`).loadJSON()
        files.writeString(NBACachePath, JSON.stringify(NBAData))
        log("[+]\u004e\u0042\u0041\u8d5b\u7a0b\u4fe1\u606f\u83b7\u53d6\u6210\u529f")
    } catch (e) {
        NBAData = JSON.parse(files.readString(NBACachePath))
        log("[+]\u83b7\u53d6\u004e\u0042\u0041\u8d5b\u7a0b\u4fe1\u606f\u5931\u8d25\uff0c\u4f7f\u7528\u7f13\u5b58\u6570\u636e")
    }

    return NBAData
}

async function getTeamImg(imageUrl) {

    let imgReq = new Request(imageUrl)
    let img = await imgReq.loadImage()
    // FileManager.local().writeImage(img)
    return img
}


function getObjectKeys(object) {
    var keys = [];
    for (var property in object)
        keys.push(property);
    return keys;
}

function formatDate() {
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1,                 //月份 
            "d+": this.getDate(),                    //日 
            "h+": this.getHours(),                   //小时 
            "m+": this.getMinutes(),                 //分 
            "s+": this.getSeconds(),                 //秒 
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
            "S": this.getMilliseconds()             //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }

}



function createDivider() {
    const drawContext = new DrawContext()
    drawContext.size = new Size(543, 1)
    const path = new Path()
    path.addLine(new Point(1000, 20))
    drawContext.addPath(path)
    drawContext.setStrokeColor(Device.isUsingDarkAppearance() ? new Color("#fff", 1) : new Color("#000000", 1))
    drawContext.setLineWidth(1)
    drawContext.strokePath()
    return drawContext.getImage()
}

//#####################背景模块-逻辑处理部分#####################

async function shadowImage(img) {
    let ctx = new DrawContext()
    // 把画布的尺寸设置成图片的尺寸
    ctx.size = img.size
    // 把图片绘制到画布中
    ctx.drawImageInRect(img, new Rect(0, 0, img.size['width'], img.size['height']))
    // 设置绘制的图层颜色，为半透明的黑色
    ctx.setFillColor(new Color('#000000', 0.5))
    // 绘制图层
    ctx.fillRect(new Rect(0, 0, img.size['width'], img.size['height']))

    // 导出最终图片
    return await ctx.getImage()
}

async function generateAlert(message, options) {
    let alert = new Alert()
    alert.message = message

    for (const option of options) {
        alert.addAction(option)
    }

    let response = await alert.presentAlert()
    return response
}

// Crop an image into the specified rect.
function cropImage(img, rect) {
    let draw = new DrawContext()
    draw.size = new Size(rect.width, rect.height)
    draw.drawImageAtPoint(img, new Point(-rect.x, -rect.y))
    return draw.getImage()
}


// **
//  * 图片高斯模糊
//  * @param {Image} img 
//  * @param {string} style light/dark
//  * @return {Image} 图片
//  */
async function blurImage(img, style, blur = blursize) {
    const js = `
 var mul_table=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var shg_table=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function stackBlurCanvasRGB(id,top_x,top_y,width,height,radius){if(isNaN(radius)||radius<1)return;radius|=0;var canvas=document.getElementById(id);var context=canvas.getContext("2d");var imageData;try{try{imageData=context.getImageData(top_x,top_y,width,height)}catch(e){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");imageData=context.getImageData(top_x,top_y,width,height)}catch(e){alert("Cannot access local image");throw new Error("unable to access local image data: "+e);return}}}catch(e){alert("Cannot access image");throw new Error("unable to access image data: "+e);}var pixels=imageData.data;var x,y,i,p,yp,yi,yw,r_sum,g_sum,b_sum,r_out_sum,g_out_sum,b_out_sum,r_in_sum,g_in_sum,b_in_sum,pr,pg,pb,rbs;var div=radius+radius+1;var w4=width<<2;var widthMinus1=width-1;var heightMinus1=height-1;var radiusPlus1=radius+1;var sumFactor=radiusPlus1*(radiusPlus1+1)/2;var stackStart=new BlurStack();var stack=stackStart;for(i=1;i<div;i++){stack=stack.next=new BlurStack();if(i==radiusPlus1)var stackEnd=stack}stack.next=stackStart;var stackIn=null;var stackOut=null;yw=yi=0;var mul_sum=mul_table[radius];var shg_sum=shg_table[radius];for(y=0;y<height;y++){r_in_sum=g_in_sum=b_in_sum=r_sum=g_sum=b_sum=0;r_out_sum=radiusPlus1*(pr=pixels[yi]);g_out_sum=radiusPlus1*(pg=pixels[yi+1]);b_out_sum=radiusPlus1*(pb=pixels[yi+2]);r_sum+=sumFactor*pr;g_sum+=sumFactor*pg;b_sum+=sumFactor*pb;stack=stackStart;for(i=0;i<radiusPlus1;i++){stack.r=pr;stack.g=pg;stack.b=pb;stack=stack.next}for(i=1;i<radiusPlus1;i++){p=yi+((widthMinus1<i?widthMinus1:i)<<2);r_sum+=(stack.r=(pr=pixels[p]))*(rbs=radiusPlus1-i);g_sum+=(stack.g=(pg=pixels[p+1]))*rbs;b_sum+=(stack.b=(pb=pixels[p+2]))*rbs;r_in_sum+=pr;g_in_sum+=pg;b_in_sum+=pb;stack=stack.next}stackIn=stackStart;stackOut=stackEnd;for(x=0;x<width;x++){pixels[yi]=(r_sum*mul_sum)>>shg_sum;pixels[yi+1]=(g_sum*mul_sum)>>shg_sum;pixels[yi+2]=(b_sum*mul_sum)>>shg_sum;r_sum-=r_out_sum;g_sum-=g_out_sum;b_sum-=b_out_sum;r_out_sum-=stackIn.r;g_out_sum-=stackIn.g;b_out_sum-=stackIn.b;p=(yw+((p=x+radius+1)<widthMinus1?p:widthMinus1))<<2;r_in_sum+=(stackIn.r=pixels[p]);g_in_sum+=(stackIn.g=pixels[p+1]);b_in_sum+=(stackIn.b=pixels[p+2]);r_sum+=r_in_sum;g_sum+=g_in_sum;b_sum+=b_in_sum;stackIn=stackIn.next;r_out_sum+=(pr=stackOut.r);g_out_sum+=(pg=stackOut.g);b_out_sum+=(pb=stackOut.b);r_in_sum-=pr;g_in_sum-=pg;b_in_sum-=pb;stackOut=stackOut.next;yi+=4}yw+=width}for(x=0;x<width;x++){g_in_sum=b_in_sum=r_in_sum=g_sum=b_sum=r_sum=0;yi=x<<2;r_out_sum=radiusPlus1*(pr=pixels[yi]);g_out_sum=radiusPlus1*(pg=pixels[yi+1]);b_out_sum=radiusPlus1*(pb=pixels[yi+2]);r_sum+=sumFactor*pr;g_sum+=sumFactor*pg;b_sum+=sumFactor*pb;stack=stackStart;for(i=0;i<radiusPlus1;i++){stack.r=pr;stack.g=pg;stack.b=pb;stack=stack.next}yp=width;for(i=1;i<=radius;i++){yi=(yp+x)<<2;r_sum+=(stack.r=(pr=pixels[yi]))*(rbs=radiusPlus1-i);g_sum+=(stack.g=(pg=pixels[yi+1]))*rbs;b_sum+=(stack.b=(pb=pixels[yi+2]))*rbs;r_in_sum+=pr;g_in_sum+=pg;b_in_sum+=pb;stack=stack.next;if(i<heightMinus1){yp+=width}}yi=x;stackIn=stackStart;stackOut=stackEnd;for(y=0;y<height;y++){p=yi<<2;pixels[p]=(r_sum*mul_sum)>>shg_sum;pixels[p+1]=(g_sum*mul_sum)>>shg_sum;pixels[p+2]=(b_sum*mul_sum)>>shg_sum;r_sum-=r_out_sum;g_sum-=g_out_sum;b_sum-=b_out_sum;r_out_sum-=stackIn.r;g_out_sum-=stackIn.g;b_out_sum-=stackIn.b;p=(x+(((p=y+radiusPlus1)<heightMinus1?p:heightMinus1)*width))<<2;r_sum+=(r_in_sum+=(stackIn.r=pixels[p]));g_sum+=(g_in_sum+=(stackIn.g=pixels[p+1]));b_sum+=(b_in_sum+=(stackIn.b=pixels[p+2]));stackIn=stackIn.next;r_out_sum+=(pr=stackOut.r);g_out_sum+=(pg=stackOut.g);b_out_sum+=(pb=stackOut.b);r_in_sum-=pr;g_in_sum-=pg;b_in_sum-=pb;stackOut=stackOut.next;yi+=width}}context.putImageData(imageData,top_x,top_y)}function BlurStack(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}
       // https://gist.github.com/mjackson/5311256
     
       function rgbToHsl(r, g, b){
           r /= 255, g /= 255, b /= 255;
           var max = Math.max(r, g, b), min = Math.min(r, g, b);
           var h, s, l = (max + min) / 2;
     
           if(max == min){
               h = s = 0; // achromatic
           }else{
               var d = max - min;
               s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
               switch(max){
                   case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                   case g: h = (b - r) / d + 2; break;
                   case b: h = (r - g) / d + 4; break;
               }
               h /= 6;
           }
     
           return [h, s, l];
       }
     
       function hslToRgb(h, s, l){
           var r, g, b;
     
           if(s == 0){
               r = g = b = l; // achromatic
           }else{
               var hue2rgb = function hue2rgb(p, q, t){
                   if(t < 0) t += 1;
                   if(t > 1) t -= 1;
                   if(t < 1/6) return p + (q - p) * 6 * t;
                   if(t < 1/2) return q;
                   if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                   return p;
               }
     
               var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
               var p = 2 * l - q;
               r = hue2rgb(p, q, h + 1/3);
               g = hue2rgb(p, q, h);
               b = hue2rgb(p, q, h - 1/3);
           }
     
           return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
       }
       
       function lightBlur(hsl) {
       
         // Adjust the luminance.
         let lumCalc = 0.35 + (0.3 / hsl[2]);
         if (lumCalc < 1) { lumCalc = 1; }
         else if (lumCalc > 3.3) { lumCalc = 3.3; }
         const l = hsl[2] * lumCalc;
         
         // Adjust the saturation. 
         const colorful = 2 * hsl[1] * l;
         const s = hsl[1] * colorful * 1.5;
         
         return [hsl[0],s,l];
         
       }
       
       function darkBlur(hsl) {
     
         // Adjust the saturation. 
         const colorful = 2 * hsl[1] * hsl[2];
         const s = hsl[1] * (1 - hsl[2]) * 3;
         
         return [hsl[0],s,hsl[2]];
         
       }
     
       // Set up the canvas.
       const img = document.getElementById("blurImg");
       const canvas = document.getElementById("mainCanvas");
     
       const w = img.naturalWidth;
       const h = img.naturalHeight;
     
       canvas.style.width  = w + "px";
       canvas.style.height = h + "px";
       canvas.width = w;
       canvas.height = h;
     
       const context = canvas.getContext("2d");
       context.clearRect( 0, 0, w, h );
       context.drawImage( img, 0, 0 );
       
       // Get the image data from the context.
       var imageData = context.getImageData(0,0,w,h);
       var pix = imageData.data;
       
       var isDark = "${style}" == "dark";
       var imageFunc = isDark ? darkBlur : lightBlur;
     
       for (let i=0; i < pix.length; i+=4) {
     
         // Convert to HSL.
         let hsl = rgbToHsl(pix[i],pix[i+1],pix[i+2]);
         
         // Apply the image function.
         hsl = imageFunc(hsl);
       
         // Convert back to RGB.
         const rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
       
         // Put the values back into the data.
         pix[i] = rgb[0];
         pix[i+1] = rgb[1];
         pix[i+2] = rgb[2];
     
       }
     
       // Draw over the old image.
       context.putImageData(imageData,0,0);
     
       // Blur the image.
       stackBlurCanvasRGB("mainCanvas", 0, 0, w, h, ${blur});
       
       // Perform the additional processing for dark images.
       if (isDark) {
       
         // Draw the hard light box over it.
         context.globalCompositeOperation = "hard-light";
         context.fillStyle = "rgba(55,55,55,0.2)";
         context.fillRect(0, 0, w, h);
     
         // Draw the soft light box over it.
         context.globalCompositeOperation = "soft-light";
         context.fillStyle = "rgba(55,55,55,1)";
         context.fillRect(0, 0, w, h);
     
         // Draw the regular box over it.
         context.globalCompositeOperation = "source-over";
         context.fillStyle = "rgba(55,55,55,0.4)";
         context.fillRect(0, 0, w, h);
       
       // Otherwise process light images.
       } else {
         context.fillStyle = "rgba(255,255,255,0.4)";
         context.fillRect(0, 0, w, h);
       }
     
       // Return a base64 representation.
       canvas.toDataURL(); 
       `

    // Convert the images and create the HTML.
    let blurImgData = Data.fromPNG(img).toBase64String()
    let html = `
       <img id="blurImg" src="data:image/png;base64,${blurImgData}" />
       <canvas id="mainCanvas" />
       `

    // Make the web view and get its return value.
    let view = new WebView()
    await view.loadHTML(html)
    let returnValue = await view.evaluateJavaScript(js)

    // Remove the data type from the string and convert to data.
    let imageDataString = returnValue.slice(22)
    let imageData = Data.fromBase64String(imageDataString)

    // Convert to image and crop before returning.
    let imageFromData = Image.fromData(imageData)
    // return cropImage(imageFromData)
    return imageFromData
}

async function getImageByUrl(url, cacheKey, useCache = true) {
    // console.log(useCache())
    const cacheFile = FileManager.local().joinPath(FileManager.local().temporaryDirectory(), cacheKey)
    const exists = FileManager.local().fileExists(cacheFile)
    // 判断是否有缓存
    if (useCache && exists) {
        return Image.fromFile(cacheFile)
    }
    try {
        const req = new Request(url)
        const img = await req.loadImage()
        // 存储到缓存
        FileManager.local().writeImage(cacheFile, img)
        return img
    } catch (e) {
        console.error(`图片加载失败：${e} - 使用缓存数据`)
        if (exists) {
            return Image.fromFile(cacheFile)
        }
        // 没有缓存+失败情况下，返回黑色背景
        let ctx = new DrawContext()
        ctx.size = new Size(100, 100)
        ctx.setFillColor(Color.black())
        ctx.fillRect(new Rect(0, 0, 100, 100))
        return await ctx.getImage()
    }
}

// Pixel sizes and positions for widgets on all supported phones.
function phoneSizes() {
    let phones = {
        "2340": { // 12mini
            "小号": 436,
            "中号": 936,
            "大号": 980,
            "左边": 72,
            "右边": 570,
            "顶部": 212,
            "中间": 756,
            "底部": 1300,
        },

        "2532": { // 12/12 Pro
            "小号": 472,
            "中号": 1012,
            "大号": 1058,
            "左边": 78,
            "右边": 618,
            "顶部": 230,
            "中间": 818,
            "底部": 1408,
        },

        "2778": { // 12 Pro Max
            "小号": 518,
            "中号": 1114,
            "大号": 1162,
            "左边": 86,
            "右边": 678,
            "顶部": 252,
            "中间": 898,
            "底部": 1544,
        },

        "2688": {
            "小号": 507,
            "中号": 1080,
            "大号": 1137,
            "左边": 81,
            "右边": 654,
            "顶部": 228,
            "中间": 858,
            "底部": 1488
        },

        "1792": {
            "小号": 338,
            "中号": 720,
            "大号": 758,
            "左边": 54,
            "右边": 436,
            "顶部": 160,
            "中间": 580,
            "底部": 1000
        },

        "2436": {
            "小号": 465,
            "中号": 987,
            "大号": 1035,
            "左边": 69,
            "右边": 591,
            "顶部": 213,
            "中间": 783,
            "底部": 1353
        },

        "2208": {
            "小号": 471,
            "中号": 1044,
            "大号": 1071,
            "左边": 99,
            "右边": 672,
            "顶部": 114,
            "中间": 696,
            "底部": 1278
        },

        "1334": {
            "小号": 296,
            "中号": 642,
            "大号": 648,
            "左边": 54,
            "右边": 400,
            "顶部": 60,
            "中间": 412,
            "底部": 764
        },

        "1136": {
            "小号": 282,
            "中号": 584,
            "大号": 622,
            "左边": 30,
            "右边": 332,
            "顶部": 59,
            "中间": 399,
            "底部": 399
        }
    }
    return phones
}


//#####################版本更新模块#####################

async function getversion() {
    const versionCachePath = files.joinPath(files.documentsDirectory(), "version-NK")
    var versionData
    try {
        versionData = await new Request("https://cdn.jsdelivr.net/gh/Nicolasking007/CDN@latest/Scriptable/UPDATE.json").loadJSON()
        files.writeString(versionCachePath, JSON.stringify(versionData))
        console.log(`===>\u6b22\u8fce\u4f7f\u7528：${versionData.author}\u5236\u4f5c\u7684\u5c0f\u7ec4\u4ef6<===`);
        console.log("[+]\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u524d\u5f80\u516c\u4f17\u53f7\uff1a\u66f0\u575b\u0020\u53cd\u9988");
        log("[+]\u7248\u672c\u4fe1\u606f\u83b7\u53d6\u6210\u529f")
    } catch (e) {
        versionData = JSON.parse(files.readString(versionCachePath))
        log("[+]\u83b7\u53d6\u7248\u672c\u4fe1\u606f\u5931\u8d25\uff0c\u4f7f\u7528\u7f13\u5b58\u6570\u636e")
    }

    return versionData
}


async function updateCheck(version) {

    const uC = versionData
    log('[+]\u6700\u65b0\u7248\u672c：' + uC['ONE-NBAMATCH'].version)
    let needUpdate = false
    if (uC['ONE-NBAMATCH'].version != version) {
        needUpdate = true
        log("[+]\u68c0\u6d4b\u5230\u6709\u65b0\u7248\u672c\uff01")
        if (!config.runsInWidget) {
            log("[+]\u6267\u884c\u66f4\u65b0\u6b65\u9aa4")
            let upd = new Alert()
            upd.title = "\u68c0\u6d4b\u5230\u6709\u65b0\u7248\u672c\uff01"
            upd.addDestructiveAction("\u6682\u4e0d\u66f4\u65b0")
            upd.addAction("\u7acb\u5373\u66f4\u65b0")
            upd.add
            upd.message = uC['ONE-NBAMATCH'].notes
            if (await upd.present() == 1) {
                const req = new Request(uC['ONE-NBAMATCH'].cdn_scriptURL)
                const codeString = await req.loadString()
                files.writeString(module.filename, codeString)
                const n = new Notification()
                n.title = "\u4e0b\u8f7d\u66f4\u65b0\u6210\u529f"
                n.body = "\u8bf7\u70b9\u51fb\u5de6\u4e0a\u89d2\u0044\u006f\u006e\u0065\u5b8c\u6210\uff0c\u91cd\u65b0\u8fdb\u5165\u811a\u672c\u5373\u53ef\u007e"
                n.schedule()

            }
            Script.complete()
        }

    } else {
        log("[+]\u5f53\u524d\u7248\u672c\u5df2\u662f\u6700\u65b0")
    }

    return needUpdate
}

/********************************************************
 ************* MAKE SURE TO COPY EVERYTHING *************
 *******************************************************
 ************ © 2021 Copyright Nicolas-kings ************/