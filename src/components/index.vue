<template>
	<div>
		<mu-appbar title="VUE Empire">
  			<mu-icon-button icon="menu" slot="left"/>
		</mu-appbar>
		 <mu-paper class="block" :zDepth="2" >
			<router-link :to="{name: 'main'}">页面设计器</router-link>
		 </mu-paper>
		 <mu-paper class="block" :zDepth="2" >
		 	<router-link :to="{name: 'formDesign'}">表单验证生成器</router-link>
		 </mu-paper>
		 <mu-paper class="block" :zDepth="2" >
		 	<router-link :to="{name: 'tableDesign'}">表格设计器</router-link>
		</mu-paper>
	</div>
</template>
<style lang="css">
	.block {
	  display: inline-block;
	  height: 100px;
	  width: 100px;
	  margin: 20px;
	  line-height: 100px;
	  text-align: center;
	}
</style>