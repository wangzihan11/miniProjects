//  征集winndows onload

function AddEvent(func) {
    let onload = window.onload;
    if (typeof (onload) != 'function') window.onload = func;
    else {
        window.onload = function () {
            onload();
            func();
        }
    }
}

// AddEvent(PR.prettyPrint())
AddEvent(FunctionGroups);

// AddEvent(PR.)onload="PR.prettyPrint()"