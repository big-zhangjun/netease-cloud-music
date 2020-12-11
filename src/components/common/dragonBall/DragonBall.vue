<template>
	<div class="dragon-ball">
		<div v-for="item in ballList" :key="item.id">
			<div class="icon">
				<img :src="item.iconUrl" alt="" />
			</div>
			<div class="title">{{ item.name }}</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		ballList: {
			type: Array,
			default() {
				return [1, 2, 3]
			}
		}
	}
}
</script>

<style lang="less" scoped>
.dragon-ball {
	display: flex;
	justify-content: space-around;
	font-size: 12px;
	margin-top: 20px;
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.icon {
		width: 40px;
		height: 40px;
		background-image: @background-change-icon;
		border-radius: 50%;
		margin-bottom: 12px;
	}
	img {
		display: block;
		width: 100%;
	}
}
</style>
