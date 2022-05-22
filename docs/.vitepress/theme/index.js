import DefaultTheme from 'vitepress/dist/client/theme-default'
import './reset-laout.css'
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