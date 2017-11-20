<template>
	<el-radio>{{text}}</el-radio>
</template>
<script>
	export default {
		props: {
			text: {
				type: String,
				default: 'radio'
			}
		}
	}
</script>