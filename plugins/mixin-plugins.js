/*
 * @LastEditTime: 2022-11-30 19:01:41
 * @LastEditors: zhangze
 */
// 全局混入
import Vue from "vue";
// store内的信息
import { mapState } from "vuex";

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__my_mixin__) {
    Vue.__my_mixin__ = true;
    Vue.mixin({
        computed: {},
        methods: {},
    }); // Set up your mixin then
}
