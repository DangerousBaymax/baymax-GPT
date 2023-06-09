/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import Vue from "vue";
import axios from "axios";
// 请求超时时间

axios.defaults.timeout = 10000;

// 请求拦截器
axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.error(error);
    }
);

// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        return Promise.resolve(response);
    },
    // 服务器状态码不是200的情况
    (error) => {
        if (error.response.status) {
        }
    }
);
/**
 * get方法，对应get请求
 * @param {String} url 请求的url地址
 * @param {Object} params 请求时携带的参数
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}
/**
 * post方法，对应post请求
 * @param {String} url 请求的url地址
 * @param {Object} params 请求时携带的参数
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}
