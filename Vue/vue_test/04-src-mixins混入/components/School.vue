<template>
	<div>
		<h2 @click="showName">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	// 引入一个hunhe
	import {hunhe} from '../mixin'
	export default {
		name:'MySchool',
		data() {
			return {
				name:'你好',
				address:'北京'
			}
		},
		// methods: {
		// 	showName(){
		// 		alert(this.name)
		// 	}
		// },
		mixins:[hunhe]
	}
</script>
