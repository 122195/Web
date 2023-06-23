<template>
	<div>
		<h1>{{msg}}</h1>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>学校年龄：{{MyAge}}</h2>
		<button @click="updateAge">尝试修改年龄</button>
	</div>
</template>

<script>
	export default {
		name:'MyStudent',
		data() {
			return {
				msg:'我是一个爱学习的好学生',
				MyAge:this.age
				// name:'李白',
				// sex:'男',
				// age:18,
			}
		},
		methods: {
			updateAge(){
				this.MyAge++
			}
		},
		// 简单声明接收
		props:['name','age','sex']
		// 接收的同时对数据进行类型限制
		/* props:{
			name:String,
			age:Number,
			sex:String
		} */

		// 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
		/* props:{
			name:{
				type:String, // name的类型是字符串
				required:true // name是必要的
			},
			age:{
				type:Number,
				default:99 // 默认值
			},
			sex:{
				type:String,
				required:true
			}
		} */
	}
</script>
