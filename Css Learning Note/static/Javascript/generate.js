// ==========================================尝试使用新版本========================================================
        // 生成运行按钮
function GenerateControlButton(ButtonName, FunctionName) {
    let TemButton = document.createElement('button');
    //  生成Button的名称
    TemButton.appendChild(document.createTextNode(ButtonName));
    // 生成对应的函数
    TemButton.setAttribute('onclick', FunctionName + '(this)');
    // if (ButtonName == 'Run') 
    return TemButton;

}

    //  生成一个函数代码块
function getCodeBlock(functionName){
    let temPre = document.createElement('pre');
    let temCode = document.createElement('code');
    temCode.classList.add('css')
    temCode.appendChild(document.createTextNode(eval(functionName)));
    temPre.appendChild(temCode);
    return temPre;
}
    // 使用别的函数进行覆盖
function recoverFunction(thisNode,functionName){
    // alert(typeof(functionName),functionName)
    let runningBox = getRuningBoxWithInsideElement(thisNode);
    let buttons = runningBox.getElementsByTagName('button')
    let runs = []
    for (let i =0;i<buttons.length;i++){
        if (!buttons[i].hasAttribute('function')){
            runs.push(buttons[i])
        }
    }
    if(runs.length !=2) return;
    runs[0].setAttribute('onclick',functionName+"(this)")
    runs[1].setAttribute('onclick',"Reset"+functionName+"(this)")
    // 对于函数部分
    let preInRunningBox = runningBox.getElementsByTagName('pre')[0]
    preInRunningBox.parentNode.removeChild(preInRunningBox)
    newPre = getCodeBlock(functionName)

    // let newPre = document.createElement('pre')
    // let newCode = document
    // newPre.appendChild(document.createTextNode(eval(functionName)))
    runningBox.firstElementChild.appendChild(newPre)
}


    // 生成的是函数按钮，对应的是函数名称
function generateChangeContentButton(functions){
    // alert(typeof(functions[0]),functions[0])
    let functionsDiv = document.createElement("div")
    for(let i =0;i<functions.length;i++){
        let temButton = document.createElement('button')
        temButton.setAttribute('function',functions[i])
        temButton.appendChild(document.createTextNode(functions[i]))
        temButton.setAttribute('onclick',"recoverFunction(this,"+"'"+functions[i]+"'"+")")
        functionsDiv.appendChild(temButton)
    }
    return functionsDiv
}

// 生成所有的函数组
function FunctionGroups() {
    let FunctionGroup = document.getElementsByClassName("function-group");
    // alert(FunctionGroup[0])
    for (let i = 0; i < FunctionGroup.length; i++) {

    // 对于一个function-group进行加载
        let OneCodeBlock = FunctionGroup[i]
        //对于一块
        // 获得所有的函数
        let Functions = OneCodeBlock.getAttribute('function').split(" ");
        // alert(typeof(Functions[0]))
        if (Functions.length < 1) continue;
        // 首先生成函数按钮
        OneCodeBlock.appendChild(generateChangeContentButton(Functions))

        // 生成这个函数对应上的按钮
        // 生成一下 Start 按钮
        OneCodeBlock.appendChild(GenerateControlButton('Run', Functions[0]));
        // 生成reset按钮
        OneCodeBlock.appendChild(GenerateControlButton('Reset', 'Reset' + Functions[0]));
        // 生成代码
        let temPre = getCodeBlock(Functions[0]);
        // let temPre = document.createElement('pre');
        // let temCode = document.createElement('code')
        // temCode.appendChild(document.createTextNode(Functions[0]))
        // temCode.className='language-javascript';
        // temPre.appendChild(temCode)
        OneCodeBlock.appendChild(temPre);
    }

}



