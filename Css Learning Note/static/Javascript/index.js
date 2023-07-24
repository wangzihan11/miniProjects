// 修改背景的颜色  Home
function ChangeBackgoundColor(ThisNode) {
    let controlSpace = GetControlSpaceInRunningBox(ThisNode);
    controlSpace.style.background='red';
}
function ResetChangeBackgoundColor(ThisNode){
    let controlSpace = GetControlSpaceInRunningBox(ThisNode);
    controlSpace.style.background='';
}