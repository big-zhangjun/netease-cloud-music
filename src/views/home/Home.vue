<template>
	<div class="home">
		<!-- 轮播图 -->
		<div class="slider-wrapper" v-if="banner.length">
			<div class="slider-div"></div>
			<slider>
				<div class="banner-list" v-for="item in banner" :key="item.pic">
					<img :src="item.pic" alt="" />
				</div>
			</slider>
		</div>
		<!-- 首页推荐图标 -->
		<dragon-ball :ballList="ballList"></dragon-ball>

		<!-- 推荐歌单 -->
		<song-list></song-list>
	</div>
</template>

<script>
import Slider from '@/components/common/slider/slider.vue'
import DragonBall from '@/components/common/dragonBall/DragonBall.vue'

import { getBannerList, getDragonBall } from '@/network/home.js'
export default {
	name: 'Home',
	components: {
		Slider,
		DragonBall
	},
	data() {
		return {
			banner: [],
			playList: [],
			recommendMusic: [],
			ballList: []
		}
	},
	created() {
		this.getBannerListFun()
		getDragonBall().then((res) => {
			this.ballList = res.data
		})
	},
	methods: {
		async getBannerListFun() {
			const res = await getBannerList({ type: 1 })
			this.banner = res.banners
		}
	}
}
</script>
<style lang="less" scoped>
.home {
	.slider-div {
		background: @background-color;
		position: absolute;
		height: 50%;
		width: 100%;
		z-index: -1;
	}
	.slider-wrapper {
		// width: 92%;
		position: relative;
		margin: 0 auto;
		overflow: hidden;
	}
	.banner-list {
		img {
			width: 100%;
			display: block;
		}
	}
}
</style>
