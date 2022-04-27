<template>
    <div class="demo">
        <h3>学校名称:{{name}}</h3>
        <h3>学校地址:{{address}}</h3>
        <button @click="logMsg">点我输出学校信息</button>
    </div>
</template>
<script>
    export default {
        name:"MySchool",
        data() {
            return {
                name:"新垌第一中学",
                address:'广东省高州市新垌镇安山'
            }
        },
        methods: {
            logMsg(){
                console.log(this.name + '\n' + this.address + '\n');
            }
        },

    }
</script>
<style>
    .demo{
        background-color:aquamarine;
    }
</style>