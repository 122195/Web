<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
// 引入组件
import School from './components/school.vue';
import Student from './components/student.vue';
export default {
    name:'App',
    components:{
        School,
        Student
    }
}
</script>

<style>

</style>