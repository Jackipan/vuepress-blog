//  全局注册 element 组件库
import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

export default ({
    Vue,
    options,
    router
}) => {
    Vue.use(Element)
}