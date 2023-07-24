// 逐步修正某个属性 
    /*element是要改变属性的元素的数组
      attrName要改变属性的名字
      aimAttrValue 是改变属性目标的值的集合
      duration=200 是改变的间隔
      temLen=0 是当前进行到的长度
      */
function graduateChangeattrs(elements,attrName,aimAttrValue,duration=200,temLen=0)
{
    if(temLen==aimAttrValue.length) return;
    if (elements.length < 1) return;
    for (let i=0; i< elements.length;i++){
        elements[i].style.setProperty(attrName,aimAttrValue[temLen]);
    }
    setTimeout(
        function(){
            graduateChangeattrs(elements,attrName,aimAttrValue,duration=duration,temLen=temLen+1);
        },
        duration
    )
}
// 修正fontSize
function changeFontSize(thisNode){
    let controlSpace =GetControlSpaceInRunningBox(thisNode)
    let nowText = controlSpace.getElementsByTagName('p')
    let textSize = ['1.5em','3.5em','5.0em']
    graduateChangeattrs(nowText,'font-size',textSize)
    // graduateChangeSize(nowText,textSize);
}
function ResetchangeFontSize(thisNode){
    let controlSpace =GetControlSpaceInRunningBox(thisNode)
    let nowText = controlSpace.getElementsByTagName('p')
    for(let i=0;i<nowText.length;i++){
        nowText[i].style.fontSize="";
    }
    
}
// 检验em和rem
function showEmEffect(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let firstLayer = controlSpace.firstElementChild;
    let secondLayer = firstLayer.firstElementChild;
    firstLayer.style.fontSize='2em'
    secondLayer.style.fontSize='2em'
}
function ResetshowEmEffect(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let firstLayer = controlSpace.firstElementChild;
    let secondLayer = firstLayer.firstElementChild;
    firstLayer.style.fontSize=''
    secondLayer.style.fontSize=''   
}
function showRemEffect(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let firstLayer = controlSpace.firstElementChild;
    let secondLayer = firstLayer.firstElementChild;
    firstLayer.style.fontSize='2rem'
    secondLayer.style.fontSize='2rem'
}
function ResetshowRemEffect(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let firstLayer = controlSpace.firstElementChild;
    let secondLayer = firstLayer.firstElementChild;
    firstLayer.style.fontSize=''
    secondLayer.style.fontSize='' 
}
//  测试行盒子
    // 修改行高
function changeLineHeight(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let lines = controlSpace.getElementsByTagName('p')
    let lineHeights = [1,1.5,2,2.5,3,3.5]
    graduateChangeattrs(lines,'line-height',lineHeights);
}
function ResetchangeLineHeight(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let lines = controlSpace.getElementsByTagName('p')
    for(let i=0;i<lines.length;i++){
        lines[i].style.lineHeight="";
    } 
}
    // 修改该粗细
function changeFontWeight(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let lines = controlSpace.getElementsByTagName('p');
    let fontWeights = [100,200,300,400,500,600]
    graduateChangeattrs(lines,'font-weight',fontWeights)
}
function ResetchangeFontWeight(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let lines = controlSpace.getElementsByTagName('p')
    for(let i=0;i<lines.length;i++){
        lines[i].style.fontWeight="";
    } 
}
    // 词间距
function changeWordSpace(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let lines = controlSpace.getElementsByTagName('p');
    let spaces =['0.1em','0.2em','0.3em','0,4em']
    graduateChangeattrs(lines,'word-spacing',spaces);
}
function ResetchangeWordSpace(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let lines = controlSpace.getElementsByTagName('p')
    for(let i=0;i<lines.length;i++){
        lines[i].style.wordSpacing="";
    } 
}
    // 字母间距
function changeLetterSpace(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let lines = controlSpace.getElementsByTagName('p');
    let spaces =['0.1em','0.2em','0.3em','0,4em']
    graduateChangeattrs(lines,'letter-spacing',spaces);
}
function ResetchangeLetterSpace(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let lines = controlSpace.getElementsByTagName('p')
    for(let i=0;i<lines.length;i++){
        lines[i].style.letterSpacing="";
    } 
}


/* 接下来是字体排版部分，将对于一段话进行排版*/
// 改变宽度
function lineWidth(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    article.style.maxWidth='36em';
    article.style.margin = "0 auto";
}
function ResetlineWidth(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    article.style.maxWidth='';
}
// 进行文本缩进
function textIndent(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    let paragraphs = article.getElementsByTagName('p')
    for(let i=0;i<paragraphs.length;i++){
        paragraphs[i].style.textIndent = '1.5em'
    }
}
function ResettextIndent(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    let paragraphs = article.getElementsByTagName('p')
    for(let i=0;i<paragraphs.length;i++){
        paragraphs[i].style.textIndent = ''
    }
}
// 消除毛边
function rightStraight(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    let paragraphs = article.getElementsByTagName('p')
    for(let i=0;i<paragraphs.length;i++){
        paragraphs[i].style.textAlign = 'justify';
    }
}
function ResetrightStraight(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    let paragraphs = article.getElementsByTagName('p')
    for(let i=0;i<paragraphs.length;i++){
        paragraphs[i].style.textAlign = '';
    }
}
//  修改成多栏杆
    /*对类进行处理的抽象*/
function multiColum(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    article.classList.add("multi-cols");
    /*
    .multi-cols{
    max-width: 70em;
    columns: 20em;
    column-gap: 1.5em;
    margin: 0 auto;
}
    */
}
function ResetmultiColum(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    article.classList.remove("multi-cols");
}
    // 对于元素进行跨栏显示
function columnSpanTitle(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    let articleHead = article.firstElementChild;
    articleHead.style.columnSpan = 'all'
}
function ResetcolumnSpanTitle(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    let articleHead = article.firstElementChild;
    articleHead.style.columnSpan = ''
}
function columnSpanParaHead(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    let paraHeads = article.getElementsByTagName('h6')
    for(let i=0;i<paraHeads.length;i++){
        paraHeads[i].style.columnSpan='all'
    }
}
function ResetcolumnSpanParaHead(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    let paraHeads = article.getElementsByTagName('h6')
    for(let i=0;i<paraHeads.length;i++){
        paraHeads[i].style.columnSpan='all'
    }
}
// 修改h4的字体
function changeheaderStylr(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    let articleHead = article.firstElementChild;
    articleHead.style.fontFamily="Vollkorn,Georgia,self";
}
function ResetchangeheaderStylr(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let article = controlSpace.firstElementChild;
    let articleHead = article.firstElementChild;
    articleHead.style.fontFamily="";
}
// 修改数字的格式
function changeNumberFormat(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let numbers = controlSpace.getElementsByClassName("number")
    for(let i=0;i<numbers.length;i++){
        numbers[0].style.fontVariantNumeric='lining-nums'
        numbers[0].style.fontFeatureSettings='lnum'
    }

}
function ResetchangeNumberFormat(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let numbers = controlSpace.getElementsByClassName("number")
    for(let i=0;i<numbers.length;i++){
        numbers[0].style.fontVariantNumeric=''
        numbers[0].style.fontFeatureSettings=''
    }

}