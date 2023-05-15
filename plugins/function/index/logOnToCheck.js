/*
 * @Author: 王玉珏 test@111.com
 * @Date: 2022-03-01 14:05:49
 * @LastEditors: 王玉珏 test@111.com
 * @LastEditTime: 2022-11-08 11:19:47
 * @FilePath: \government-web\plugins\function\index\logOnToCheck.js
 * @Description: 登录方法
 */

// 登录校验
const LogOnToCheck = () => {
    // 获取hszlUserInfo，用于判断是否登录
    const V = document.cookie.match("(^|;) ?hszlUserInfo=([^;]*)(;|$)");
    const USERINFO = V ? JSON.parse(decodeURIComponent(V[2])) : null;
    return Boolean(
        (!USERINFO && $nuxt.UserId) ||
            (USERINFO && $nuxt.UserId !== USERINFO.id)
    );
};

// 刷新
LogOnToCheck.reload = () => {
    window.location.reload();
};

// 产业大脑用户体系打通
LogOnToCheck.singleSignOn = (that) => {
    // 产业大脑用户信息code授权码
    let code = that.$route.query.code;
    // 不存在code拦截
    if (!code) return;
    // 如果存在code，说明需要进行产业大脑用户打通操作
    that.$api
        .singleSignOn({
            code: code,
        })
        .then((res) => {
            if (res.isSuccess) {
                // 存储用户信息
                that.$store.commit("saveUserInfo", {
                    userInfo: JSON.stringify(res.body.user),
                    userToken: res.body.token,
                });
                // Cookie的过期时间与Token的过期时间一致，为7天
                that.$Cookies.set("hszlToken", res.body.token, {
                    expires: 7,
                    domain:
                        process.env.NODE_ENV === "development"
                            ? ""
                            : ".huasuzl.com",
                });
                that.$Cookies.set(
                    "hszlUserInfo",
                    JSON.stringify(res.body.user),
                    {
                        expires: 7,
                        domain:
                            process.env.NODE_ENV === "development"
                                ? ""
                                : ".huasuzl.com",
                    }
                );
                // 删除地址栏code，顺便刷新页面更新登录状态
                that.$router.replace({
                    query: {},
                });
            }
        });
};

export default LogOnToCheck;
