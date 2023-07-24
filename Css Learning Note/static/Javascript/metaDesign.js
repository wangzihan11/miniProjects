//  通过 run 按钮找到对应的control-space
function GetControlSpaceInRunningBox(OneElement) {
    while (OneElement != document.body) {
        // 检测是不是找到了running-box
        if (OneElement.className.includes('running-box')) {
            break;
        }
        OneElement = OneElement.parentNode;
    }
    let ControlSpace = OneElement.getElementsByClassName('control-space')
    if (ControlSpace.length != 1) {
        alert("running-box中control-space的数量出错")
        return false;
    }
    return ControlSpace[0];

}
// 通过runing box 里面的按钮找到 running box
function getRuningBoxWithInsideElement(insideElement){
    while (insideElement != document.body) {
        // 检测是不是找到了running-box
        if (insideElement.className.includes('running-box')) {
            break;
        }
        insideElement = insideElement.parentNode;
    }
    return insideElement
}