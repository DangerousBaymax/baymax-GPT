// 环境配置文件
import env from "./env";
// 配置项
export default {
    head: {
        title: "华塑智联",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            // 正式
            { charset: "utf-8" },
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
            // 以下这段代码作用于360浏览器、QQ浏览器等国产双核浏览器，意思是默认优先采用极速模式，即 Chromium Webkit 内核
            { name: "renderer", content: "webkit" },
            // 以下这段代码作用于其他双核浏览器，意思与上一段相同
            { name: "force-rendering", content: "webkit" },
            // 以下这段代码作用于IE浏览器，意思是当IE浏览器识别有 Google Chrome Frame 插件，则采用 Webkit 内核，否则采用最新IE内核
            { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/hs.png" }],
        script: [
            {
                // 检查浏览器版本，如果是ie，前往不兼容提示页面
                src: "/ie.js",
            },
        ],
    },

    // 环境变量
    env: {
        NODE_ENV: env[process.env.NODE_ENV].NODE_ENV,
        REFERRER: env[process.env.NODE_ENV].REFERRER,
        API_URL: env[process.env.NODE_ENV].API_URL,
        CLOUD_URL: env[process.env.NODE_ENV].CLOUD_URL,
        DATA_URL: env[process.env.NODE_ENV].DATA_URL,
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // element UI 样式
        "element-ui/lib/theme-chalk/index.css",
        // 全局自定义样式
        "@/assets/css/main.css",
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // 全局ssr配置
        {
            src: "~/plugins/main-ssr",
            ssr: true,
        },
        {
            src: "~/plugins/utils/router.js",
            ssr: true,
        },
        // 全局混入
        {
            src: "~/plugins/mixin-plugins",
            ssr: true,
        },
        // 缓存机制优化
        {
            src: "~/plugins/cacheView",
            ssr: true,
        },
        // 全局配置
        {
            src: "~/plugins/main",
            ssr: false,
        },
        // 自定义指令
        {
            src: "~/plugins/directives",
            ssr: false,
        },
        {
            src: "~/plugins/utils/http",
            ssr: false,
        },
    ],

    // 全局自动引入组件（制定只有ImportGlobal内部的组件执行全局自动引入，其他要手动引入）;
    // tips：这里dirs是配置了不需要以文件夹命名组件名的文件，详情：https://nuxtjs.org/docs/features/component-discovery
    // 官方文档：https://go.nuxtjs.dev/config-components
    components: {
        dirs: [
            // 直接目录下的
            "~/components",
        ],
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/axios"],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            postcssOptions: {
                plugins: [
                    require("postcss-pxtorem")({
                        // 换算的基数
                        rootValue: 37.5,
                        // 启用所有属性
                        propList: ["*"],
                        // 注意：严禁pc端的任意文件名包含mobile，若包含会被视作移动端进行适配处理，样式将出现问题
                        exclude: (file) => {
                            return !Boolean(file.indexOf("mobile") > -1);
                        },
                    }),
                ],
            },
        },
    },
};
