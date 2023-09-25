<script>

// 组件，一个组件可以创建多个组件实例 
// 组件就是一个普通的js对象
export default {

  // data是一个函数或者方法
  // 在data中，this就是当前的组件实例vm
  data(){
    console.log("data",this);
    return{
      msg:"我爱vue"
    }
  }
}
</script>

<template>
  <h1>{{msg}}</h1>
</template>