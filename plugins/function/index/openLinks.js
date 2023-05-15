/*
 * @Author: 王玉珏 test@111.com
 * @Date: 2022-02-25 17:02:47
 * @LastEditors: 王玉珏 test@111.com
 * @LastEditTime: 2022-08-03 14:27:10
 * @FilePath: \government-web\plugins\function\index\openLinks.js
 * @Description: 极速跳转方法
 */
// WYJ 环境配置文件
import env from "../../../env";

// 新建标签页打开页面，本站
const OpenLinks = (path = "/") => {
    let urls = window.location.origin + path;
    // 新建标签页
    window.open(urls);
};

// 新建标签页打开页面，华塑云
OpenLinks.cloud = (path = "/") => {
    let urls = process.env.CLOUD_URL + path;
    // 新建标签页
    window.open(urls);
};

// 新建标签页打开页面，数据大屏
OpenLinks.data = (path = "/") => {
    let urls = process.env.DATA_URL + path;
    // 新建标签页
    window.open(urls);
};

export default OpenLinks;
