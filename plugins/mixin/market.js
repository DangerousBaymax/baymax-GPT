// 行情混入
import { mapState } from "vuex";

// 用户信息混入
export default {
    data() {
        // 获取当前路由内的品类信息
        const {
            params: { materials },
        } = this.$route || { params: {} };
        // 品类名
        let MaterialsName = materials ? materials.split("-")[0] : "";
        // 品类id
        let MaterialsId = materials ? parseInt(materials.split("-")[1]) : 0;
        return {
            // 品类名
            MaterialsName,
            // 品类id
            MaterialsId,
        };
    },
    computed: {
        ...mapState("market", {
            // 行情的模块展示情况
            // type 1-区域均价 2-市场牌号 3-出厂牌号 4-上游单体 5-分析预测 6-进出口量 7-产量 8-表观消费 9-利润
            MarketTab: (state) => state.marketTab,
            // 品类的详细信息
            CategoryMsg: (state) => state.categoryMsg,
        }),
        ...mapState({
            // 品类权限 0 没有权限 1有权限
            HasRole: (state) => state.hasRole,
        }),
    },
};
