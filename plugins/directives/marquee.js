// 自定义指令：溢出内容鼠标悬停时，实现跑马灯效果

// 使用注意：
// 1、给需要鼠标悬停出现跑马灯效果的元素进行指令绑定，注意必须是跑马灯元素的父级及以上
// 2、跑马灯元素的父级必须是指定宽度，并且为溢出隐藏
// 3、跑马灯元素本身必须包含指定类名：【is_ellipsis】，目前是配合一行溢出...的css使用的

// 拓展以及完善，记得在这里改备注哟

// 执行
export default {
    /**
     * @param el 指令所绑定的元素
     * @param binding {Object}
     * @param vnode vue编译生成的虚拟节点
     */
    bind(el, binding, vnode) {
        // 走动画
        const enter = function (root) {
            // 获取新老宽度
            let oldWidth = root.offsetWidth;
            root.style.width = "fit-content";
            let newWidth = root.offsetWidth;
            // 其他样式
            root.style.textOverflow = "clip";
            // 计算位移宽度
            let inX = newWidth - oldWidth;
            // 超出容器，需要滚动
            if (inX >= 0) {
                // 计算一个速度
                let timer = inX / 30;
                // 植入
                root.style.transition = `all ${timer}s linear`;
                root.style.transform = `translateX(-${inX}px)`;
            }
        };
        // 还原
        const leave = function (root) {
            root.style.width = "100%";
            root.style.textOverflow = "ellipsis";
            root.style.transition = "none";
            root.style.transform = "translateX(0)";
        };
        // 递归查找dom元素
        const getDom = function (root, type) {
            // 循环查找对应dom
            for (let x = 0; x < root.children.length; x++) {
                if (root.children[x].className.indexOf("is_ellipsis") !== -1) {
                    if (type) {
                        enter(root.children[x]);
                    } else {
                        leave(root.children[x]);
                    }
                    continue;
                } else {
                    getDom(root.children[x], type);
                }
            }
        };
        // 指令：悬停时激活动画
        el.onmouseenter = function (e) {
            getDom(el, 1);
        };
        // 指令：鼠标移出还原
        el.onmouseleave = function (e) {
            getDom(el, 0);
        };
    },
    unbind(el) {
        // 指令与元素解绑时调用
    },
};
