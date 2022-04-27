<template>
    <div>
        <h1 v-text="msg" ref="h1"></h1>
        <button ref="btn" @click="logDom">点我输出一个DOM</button>
        <School ref="sch"/>
        <School/>
        <School/>
    </div>
</template>
<script>
    import School from './components/School'
    export default {
        name:'App',
        components:{School},
        data() {
            return {
                msg:"你好世界！"
            }
        },
        methods: {
            logDom(){
                console.log(this.$refs.btn); // 真实DOM
                console.log(this.$refs.h1); // 真实DOM
                console.log(this.$refs.sch); // vm
            }
        },
    }
</script>
<style>

</style>