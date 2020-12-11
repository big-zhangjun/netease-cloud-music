<template>
	<div class="tab-list">
		<router-link to="/home" tag="div">推荐</router-link>
		<router-link to="/ranking" tag="div">排行</router-link>
		<router-link to="/private" tag="div">私人FM</router-link>
		<router-link to="/singer" tag="div">歌手</router-link>
	</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.tab-list {
	display: flex;
	justify-content: space-around;
	height: 44px;
	align-items: center;
	background: @background-color;
	color: rgba(255, 255, 255, 0.6);
	font-size: 13px;
	div {
		flex: 1;
		text-align: center;
		line-height: 44px;
	}
	.active {
		color: @font-color;
		position: relative;
		z-index: 1;
		&::before {
			content: '';
			display: block;
			width: 38px;
			height: 4px;
			border-radius: 4px;
			background-image: @background-change;
			position: absolute;
			z-index: -1;
			bottom: 14px;
			left: 50%;
			transform: translateX(-50%);
		}
	}
}
</style>
