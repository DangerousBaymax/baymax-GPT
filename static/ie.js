// 判断ie环境
if (
    /*@cc_on!@*/ false ||
    (!!window.MSInputMethodContext && !!document.documentMode)
) {
    // 若不在ie错误信息页，则进入信息页
    if (window.location.pathname !== "/html/ieError.html") {
        window.location.href = window.location.origin + "/html/ieError.html";
    }
}
