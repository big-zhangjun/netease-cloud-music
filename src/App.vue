<template>
	<div id="app">
		<mainlayout></mainlayout>
		<router-view />
	</div>
</template>
<script>
import mainlayout from '@/layouts/mainLayout.vue'
export default {
	components: {
		mainlayout
	}
}
</script>
<style lang="less">
@import url('~@/assets/css/normalize.css');
@import url('~@/assets/css/base.css');
@import url('~@/assets/fonts/iconfont.css');
@import url('~@/assets/css/index.less');
body {
	// background: @background-color;
}
</style>
