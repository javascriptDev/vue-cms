<template>
	<el-button>
		{{text}}
	</el-button>
</template>
<script>
	export default {
		props: {
			text: {
				type: String,
				default: '按钮'
			}
		}
	}
</script>
