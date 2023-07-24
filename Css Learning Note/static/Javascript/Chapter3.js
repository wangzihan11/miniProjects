
// 给对应的属性增加1
function AddOneStyleAttr(AimElements,StyleAttr,aimTimes){
    // alert(aimTimes)
    if(aimTimes <= 0) return;
    //empty 检测
    if(AimElements.length<1) return;
    let NowAttr = parseInt(getComputedStyle(AimElements[0],null).getPropertyValue(StyleAttr));
    // alert(NowAttr)
    NowAttr += 1;
    for(let i=0;i<AimElements.length;i++){
        AimElements[i].style.setProperty(StyleAttr,NowAttr)
    }
    setTimeout( 
        function(){
            AddOneStyleAttr(AimElements,StyleAttr,aimTimes-1);},
            5
    )
    
}
// margin部分
function ShowMarginPart(ThisNode, Counter = 50){
    // 获得空间
    let ControlSpace = GetControlSpaceInRunningBox(ThisNode);
    let ControlBoxes = ControlSpace.getElementsByClassName('control-box');
    // 首先获得margin
    let margin = parseInt(getComputedStyle(ControlBoxes[0],null).getPropertyValue('margin'))
    if (margin==Counter) return;
    AddOneStyleAttr(ControlBoxes,'margin',Counter-margin)
}
function ResetShowMarginPart(ThisNode) {
    let ControlSpace = GetControlSpaceInRunningBox(ThisNode);
    let ControlBoxes = ControlSpace.getElementsByClassName('control-box');
    for (let j = 0; j < ControlBoxes.length; j++) {
        // await delay(10);
        ControlBoxes[j].style.margin = "";
    }
}
//padding 部分
function ShowPadding(ThisNode,Counter=50){
    // 首先找到这个节点的control-space
    let ControlSpace  = GetControlSpaceInRunningBox(ThisNode)
    let ControlBoxes = ControlSpace.getElementsByClassName('control-box');
    let padding = parseInt(getComputedStyle(ControlBoxes[0]).getPropertyValue('padding'))
    if (padding==Counter) return;
    AddOneStyleAttr(ControlBoxes,'padding',Counter-padding)
}
function ResetShowPadding(ThisNode){
    let ControlSpace = GetControlSpaceInRunningBox(ThisNode);
    let ControlBoxes = ControlSpace.getElementsByClassName('control-box');
    for(let i=0;i<ControlBoxes.length;i++){
        ControlBoxes[i].style.padding="";
    }
}
// border部分
function ShowBorder(thisNode,Counter=50){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let controlBoxes = controlSpace.getElementsByClassName('control-box');
    for(let i=0;i<50;i++){
        for(let j=0;j< controlBoxes.length;j++){
            controlBoxes[j].style.border=i+'px';
            controlBoxes[j].style.borderStyle='solid';
        }
    }
}
function ResetShowBorder(thisNode){
    let ControlSpace = GetControlSpaceInRunningBox(thisNode);
    let ControlBoxes = ControlSpace.getElementsByClassName('control-box');
    for(let i=0;i<ControlBoxes.length;i++){
        ControlBoxes[i].style.border="";
    }
}
// outline部分
function ShowOutline(thisNode,Counter=50){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let controlBoxes = controlSpace.getElementsByClassName('control-box');
    let outline = parseInt(getComputedStyle(controlBoxes[0]).getPropertyValue('outline-width'))
    if (outline == Counter) return;
    for(let i=-0;i<50;i++){
        for(let j=0;j< controlBoxes.length;j++){
            controlBoxes[j].style.outlineWidth=i+'px';
            controlBoxes[j].style.outlineStyle='solid';
        }
    }
}

function ResetShowOutline(thisNode){
    let controlSpace = GetControlSpaceInRunningBox(thisNode);
    let controlBoxes = controlSpace.getElementsByClassName('control-box');
    for(let i=0;i<controlBoxes.length;i++){
        controlBoxes[i].style.outlineWidth="";
    }
}