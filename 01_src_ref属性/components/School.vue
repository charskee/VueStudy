<template>
    <div class="school">
        <h3>学校名称：{{name}}</h3>
        <h3>学校地址：{{address}}</h3>
    </div>
</template>
<script>
    export default {
        name:'School',
        data() {
            return {
                name:'Vue学习大本营',
                address:"湖南省娄底市"
            }
        },

    }
</script>
<style>
    .school {
        background-color: bisque;
        
    }
</style>