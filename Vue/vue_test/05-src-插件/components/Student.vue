<template>
	<div>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<input type="text" v-fbind:value="name">
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
