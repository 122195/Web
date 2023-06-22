<template>
    <div class="demo">
        <!-- 组件的结构 -->
        <h2>学生名称：{{name}}</h2>
        <h2>学生地址：{{age}}</h2>
    </div>
</template>

<script>
    // 组件交互相关的代码(数据、方法等等)
    export default {
        name:'MyStudent',
        data() {
            return {
                name:'张三',
                age:18
            }
        },
    }
</script>