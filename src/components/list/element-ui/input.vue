<template>
	<el-input :placeholder="placeholder"></el-input>
</template>
<script>
	export default {
		props: {
			placeholder: {
				type: String,
				default: '输入框'
			}
		}
	}
</script>
