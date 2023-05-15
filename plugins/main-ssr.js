/*
 * @Description:
 * @Author: 张卓
 * @Date: 2022-08-02 10:55:52
 * @LastEditTime: 2022-08-02 11:03:05
 * @LastEditors:
 */
// 需要ssr的配置
import Vue from "vue";

// 接口地址
import api from "@/plugins/utils/api.js";
import Cookies from "js-cookie";
Vue.prototype.$Cookies = Cookies;
Vue.prototype.$api = api;
Vue.prototype.$randomString = function randomString(length, chars) {
    //字符集生成随机
    var result = "";
    for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
};
String.prototype.$replace = function (end, start) {
    //字符串内容替换加...
    if (!this) {
        return;
    }
    if (this.length > end) {
        if (start) {
            return this.substring(start, end) - 1 + "...";
        } else {
            return this.substring(0, end - 1) + "...";
        }
    } else {
        if (start) {
            return this.substring(start, end);
        } else {
            return this.substring(0, end);
        }
    }
};

// element UI
import Element from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
Vue.use(Element, { locale });
