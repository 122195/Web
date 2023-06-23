<template>
	<div class="demo">
		<h2 class="title">学生姓名：{{name}}</h2>
		<h2 class="qwe">学生性别：{{sex}}</h2>
	</div>
</template>

<script>
	export default {
		name:'MyStudent',
		data() {
			return {
				name:'李白',
				sex:'男',
			}
		},
	}
</script>
<style lang="less" scoped>
	.demo {
		background-color: orange;
		.qwe{
			font-size: 40px;
		}
	}
</style>