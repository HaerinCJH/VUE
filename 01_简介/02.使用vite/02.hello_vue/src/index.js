// 引入vue
import {createApp} from "vue/dist/vue.esm-bundler.js"
// 引入根组件App
import App from "./App.vue"

// 创建一个根组件

// 创建应用挂载到页面
// mount的返回值是根组件的实例
const vm = createApp(App).mount("#app")