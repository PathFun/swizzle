import DefaultTheme from 'vitepress-for-component/dist/client/theme-default';
import './reset-table.css'
import 'ant-design-vue/dist/antd.css';
import 'form-render-vue3/dist/style.css';

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        // register global components
        // app.component('MyGlobalComponent' /* ... */)
    }
}