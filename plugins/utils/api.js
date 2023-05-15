// axios封装
import { post, get } from "./http";
// 服务地址
const URL = process.env.API_URL;
// 接口
const api = {
    // 查询一些权限信息
    checkCategoryRole(params = {}) {
        return post(`${URL}/exponentPrice/checkCategoryRole`, params);
    },
};

// 抛出
export default api;
