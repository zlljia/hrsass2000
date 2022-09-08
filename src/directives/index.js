// 负责管理所有的自定义指令
// src下面新增directives文件夹

export const imageerror = {
    inserted(dom, options) {
        // 监听图片img的错误事件 因为图片加载失败会触发onerror事件
        dom.src = dom.src || options.value;
        dom.onerror = function () {
            // 图片加载失败 赋值一个默认值
            dom.src = options.value
        }
    }
}