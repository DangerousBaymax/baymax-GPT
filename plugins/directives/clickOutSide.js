// 自定义指令：点击除去某个模块dom时，进行一些操作（比如关闭弹框）

// 自定义记录名
const clickoutsideContext = "__antsooClickOutSide__";

// 执行
export default {
    /**
     * @param el 指令所绑定的元素
     * @param binding {Object}
     * @param vnode vue编译生成的虚拟节点
     */
    bind(el, binding, vnode) {
        // 指令第一次绑定到元素时调用
        const documentHandler = function (e) {
            // 当不包含虚拟节点或点击dom包含绑定dom时
            if (!vnode.context || el.contains(e.target)) {
                return false;
            }
            // expression：字符串形式的指令表达式
            if (binding.expression) {
                // 存在指令时，调用对应的方法
                vnode.context[el[clickoutsideContext].methodName](e);
            } else {
                el[clickoutsideContext].bindingFn(e);
            }
        };
        el[clickoutsideContext] = {
            documentHandler,
            // expression：字符串形式的指令表达式
            methodName: binding.expression,
            // value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2
            bindingFn: binding.value,
        };
        // 给dom全局点击绑定事件
        setTimeout(() => {
            document.addEventListener("click", documentHandler);
        }, 0);
    },
    update(el, binding) {
        // 所在组件的 VNode 更新时调用
        el[clickoutsideContext].methodName = binding.expression;
        el[clickoutsideContext].bindingFn = binding.value;
    },
    unbind(el) {
        // 指令与元素解绑时调用
        document.removeEventListener(
            "click",
            el[clickoutsideContext].documentHandler
        );
    },
};
