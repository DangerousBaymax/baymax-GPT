import Vue from "vue";

export default ({ app }) => {
    app.router.beforeEach((to, form, next) => {
        if (process.browser) {
            // 切换页面回到顶部
            document.querySelector(".el-scrollbar__wrap").scrollTop = 0;
        }
        next();
    });
};
