<template>
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
// 引入组件
import School from './school.vue';
import Student from './student.vue';
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