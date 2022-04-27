<template>
    <div class="demo">
        <h3>学生名称:{{name}}</h3>
        <h3>学生年龄:{{age}}</h3>
        <button @click="logMsg">点我输出学生信息</button>
    </div>
</template>
<script>
    export default {
        name:"MyStudent",
        data() {
            return {
                name:"袁婷婷",
                age:25
            }
        },
        methods: {
            logMsg(){
                console.log(this.name + '\n' + this.age + '\n');
            }
        },

    }
</script>
<style>
    .demo{
        background-color:aquamarine;
    }
</style>