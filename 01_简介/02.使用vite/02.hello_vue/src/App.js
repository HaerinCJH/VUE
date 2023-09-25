// 引入子组件
import MyButton from "./components/MyButton";
// 创建根组件
export default {
  data() {
    return {
      message: "我爱Vue!",
    };
  },

  // 在组件中注册子组件
  // 属性名和属性值相同时可以省略
  // html网页不区分大小写。组件名会转换为小写，找不到大写的组件名
  components: {
    MyButton,
    // "my-button":MyButton
    // mybutton:MyButton
    // MB:MyButton
  },

  /* 
       template是用字符串的形式在编写模板
           1.这些字符串会在项目运行时，在浏览器被编译为js的函数(性能较差)
           2.在字符串中编写代码，体验很差

       为了解决这个问题，Vue为我们提供了一种单文件组件（SFC）
          - 单文件组件的格式是vue(vscode需要安装插件：Vue Language Features (Volar))
          - vue文件用来编写单文件组件，vue文件本身并不能被浏览器所识别
             所以它必须要被构建工具打包后才能使用
          - 同时vue文件在打包时，构建工具会直接将template转换为函数
             无需在浏览器中去编译，这样能提高性能
  */
  template: `
    <h1>{{message}}</h1>
    <div>
    <h2>子组件</h2>
    <MyButton></MyButton>
    </div>
    `,
};
