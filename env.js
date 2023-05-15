/*
 * @Author: 王玉珏 test@111.com
 * @Date: 2022-07-28 09:48:18
 * @LastEditors: 王玉珏 test@111.com
 * @LastEditTime: 2023-02-08 10:33:39
 * @FilePath: \government-web\env.js
 * @Description: 环境变量 利用：cross-env插件
 */
module.exports = {
    // 开发环境
    dev: {
        NODE_ENV: "development",
        // 开发服务器地址 安晓辉
        // API_URL: "http://192.168.4.189:8961",
        // 开发服务器地址 张宸瑜
        //API_URL: "http://192.168.1.11:8961",
        // 开发服务器地址 测试环境
        API_URL: "https://zj-wwwapi-test.huasuzl.com",
        // 华塑云链接地址 测试环境
        CLOUD_URL: "https://cloud-test.huasuzl.com",
        // 数据大屏地址
        DATA_URL: "https://zj-web-dataview-test.huasuzl.com",
        // referrer
        REFERRER: "no-referrer",
    },
    // 测试环境
    test: {
        NODE_ENV: "test",
        // 测试服务器地址
        API_URL: "https://zj-wwwapi-test.huasuzl.com",
        // 华塑云链接地址 测试环境
        CLOUD_URL: "https://cloud-test.huasuzl.com",
        // 数据大屏地址
        DATA_URL: "https://zj-web-dataview-test.huasuzl.com",
        // referrer strict-origin-when-cross-origin
        REFERRER: "strict-origin-when-cross-origin",
    },
    // 生产环境
    production: {
        NODE_ENV: "production",
        // 正式服务器地址
        API_URL: "https://zj-wwwapi.huasuzl.com",
        // 华塑云链接地址 正式环境
        CLOUD_URL: "https://cloud.huasuzl.com",
        // 数据大屏地址
        DATA_URL: "https://zj-web-dataview.huasuzl.com",
        // referrer
        REFERRER: "strict-origin-when-cross-origin",
    },
    //回归
    uat: {
        NODE_ENV: "uat",
        // 测试服务器地址
        API_URL: "https://zj-wwwapi-test.huasuzl.com",
        // 华塑云链接地址 测试环境
        CLOUD_URL: "https://cloud-test.huasuzl.com",
        // 数据大屏地址
        DATA_URL: "https://zj-web-dataview-test.huasuzl.com",
        // referrer
        REFERRER: "strict-origin-when-cross-origin",
    },
};
