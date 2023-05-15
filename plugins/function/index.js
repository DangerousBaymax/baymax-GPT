// 登录校验
import LogOnToCheck from "./index/logOnToCheck";
// 新建标签页打开页面
import OpenLinks from "./index/openLinks";
// 对于字符串的一些操作
import StringTricks from "./index/stringTricks";
// 对于数字的一些操作
import DigitalTricks from "./index/digitalTricks";

export default {
    install(Vue) {
        Vue.prototype.$logOnToCheck = LogOnToCheck;
        Vue.prototype.$openLinks = OpenLinks;
        Vue.prototype.$stringTricks = StringTricks;
        Vue.prototype.$digitalTricks = DigitalTricks;
    },
};
