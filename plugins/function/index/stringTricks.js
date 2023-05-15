// WYJ 对于字符串的一些操作

const StringTricks = (arg) => {
    // 让中括号变成span标签并着色
    let left = new RegExp(/\[/, "g");
    let right = new RegExp(/\]/, "g");
    return arg
        .replace(left, `<span style="color: rgba(231, 0, 0, 1)">`)
        .replace(right, `</span>`);
};

export default StringTricks;
