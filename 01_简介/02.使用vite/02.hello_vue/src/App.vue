<script>
   //引入MyButton.vue文件
   import MyButton from './components/MyButton.vue';
  

   /* 编写组件代码*/
   export default{
    data(){
        return{
            msg:"我超级爱Vue!"
        }
    },

    components:{
       MyButton
    }
   }
</script>

<template>
    <h1>{{ msg }}</h1>

    <MyButton></MyButton>
    

</template>