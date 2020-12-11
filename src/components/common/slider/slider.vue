<template>
	<div class="slider" ref="slider">
		<div class="slider-group" ref="sliderGroup">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BTscroll from 'better-scroll'
export default {
	props: {
		// 循环轮播
		loop: {
			type: Boolean,
			default: true
		},
		// 自动轮播
		autoPlay: {
			type: Boolean,
			default: true
		},
		// 间隔
		interval: {
			type: Number,
			default: 4000
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.getSilderWidth()
			this.initSlider()
		})
	},
	methods: {
		getSilderWidth() {
			let children = this.$refs.sliderGroup.children
			let sliderWidth = this.$refs.slider.clientWidth
			let width = 0
			for (let i = 0; i < children.length; i++) {
				width += sliderWidth
				children[i].style.width = sliderWidth + 'px'
			}
			if (this.loop) {
				width += 2 * sliderWidth
			}
			this.$refs.sliderGroup.style.width = width + 'px'
		},
		initSlider() {
			let slider = new BTscroll(this.$refs.slider, {
				scrollX: true,
				momentum: false,
				snap: {
					loop: this.loop,
					threshold: 0.3,
					speed: 400
				},
				snapSpeed: 400,
				bounce: false,
				stopPropagation: true,
				click: true
			})
			console.log(slider)
		}
	}
}
</script>

<style lang="less" scoped>
.slider {
	width: 92%;
	margin: 0 auto;
	overflow: hidden;
	border-radius: 8px;
}
.slider-group {
	display: flex;
}
</style>
