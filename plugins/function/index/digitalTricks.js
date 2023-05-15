// WYJ 对于数字的一些操作

const DigitalTricks = (arg1, arg2) => {
    // 浮点数计算：乘法 arg1 * arg2
    var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
    try {
        if (s1.split(".")[1] != undefined) m += s1.split(".")[1].length;
    } catch (e) {}
    try {
        if (s2.split(".")[1] != undefined) m += s2.split(".")[1].length;
    } catch (e) {}
    return (
        (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
        Math.pow(10, m)
    );
};

DigitalTricks.division = (arg1, arg2) => {
    // 浮点数计算：除法 arg1 / arg2
    var r1 = 0,
        r2 = 0,
        m,
        s1 = arg1.toString(),
        s2 = arg2.toString();
    try {
        if (s1.split(".")[1] != undefined) r1 = s1.split(".")[1].length;
    } catch (e) {}
    try {
        if (s2.split(".")[1] != undefined) r2 = s2.split(".")[1].length;
    } catch (e) {}
    m = Math.pow(10, Math.max(r1, r2));
    return DigitalTricks(arg1, m) / DigitalTricks(arg2, m);
};

DigitalTricks.addition = (arg1, arg2) => {
    // 浮点数计算：加法 arg1 + arg2
    var r1 = 0,
        r2 = 0,
        m,
        s1 = arg1.toString(),
        s2 = arg2.toString();
    try {
        if (s1.split(".")[1] != undefined) r1 = s1.split(".")[1].length;
    } catch (e) {}
    try {
        if (s2.split(".")[1] != undefined) r2 = s2.split(".")[1].length;
    } catch (e) {}
    m = Math.pow(10, Math.max(r1, r2));
    return (DigitalTricks(arg1, m) + DigitalTricks(arg2, m)) / m;
};

DigitalTricks.subtraction = (arg1, arg2) => {
    // 浮点数计算：减法 arg1 - arg2
    var r1 = 0,
        r2 = 0,
        m,
        n,
        s1 = arg1.toString(),
        s2 = arg2.toString();
    try {
        if (s1.split(".")[1] != undefined) r1 = s1.split(".")[1].length;
    } catch (e) {}
    try {
        if (s2.split(".")[1] != undefined) r2 = s2.split(".")[1].length;
    } catch (e) {}
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka
    //动态控制精度长度
    n = r1 >= r2 ? r1 : r2;
    return (DigitalTricks(arg1, m) - DigitalTricks(arg2, m)) / m;
};

DigitalTricks.thousands = (num) => {
    // 数字添加千分符
    return String(num).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
};

export default DigitalTricks;
