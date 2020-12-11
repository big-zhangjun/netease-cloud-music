<template>
	<div class="header">
		<div class="header-menu iconfont icon-menu"></div>
		<div class="header-title">VMUSICZJ</div>
		<div class="header-search iconfont icon-sousuo"></div>
	</div>
</template>

<script>
export default {
	components: {}
}
</script>

<style lang="less">
.header {
	background: @background-color;
	color: @font-color;
	height: 44px;
	display: flex;
	align-items: center;
	.icon-menu,
	.icon-sousuo {
		font-size: 20px;
	}
	.iconfont {
		padding: 11px;
	}
	.header-title {
		flex: 1;
		text-align: center;
		line-height: 44px;
	}
}
</style>
