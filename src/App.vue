<template>
    <div>
        <img src="./assets/logo.png" alt="Vue logo">
        <School />
        <Student />
    </div>
</template>
<script>
    // 引入组件
    import Student from './components/MyStudent'
    import School from './components/MySchool'

    export default {
        name:'App',
        components: {
            School,
            Student
        }
    }
</script>