<template>
	<div class="song-list">
		<div>
			<h1>{{ title }}</h1>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '推荐歌单'
		}
	}
}
</script>

<style></style>
