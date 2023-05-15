<template>
    <el-scrollbar
        class="hs_el_default"
        :class="{ zIndex_unset: $route.path === '/consignment' }"
        ref="defaultRef"
    >
        <!-- 路由 -->
        <nuxt />
    </el-scrollbar>
</template>

<script>
export default {
    name: "default",
    components: {},
    data() {
        return {};
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>
