// 修改字体的的颜色，继承关系
function ChangeFatherNodeColor(ThisNode) {
    // 这个函数改变作用域div的color
    let AimElment = GetControlSpaceInRunningBox(ThisNode)
    AimElment.style.color = 'green';
}
function ResetChangeFatherNodeColor(ThisNode) {
    let AimElment = GetControlSpaceInRunningBox(ThisNode)
    AimElment.style.color = '';
}