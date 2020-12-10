<template>
	<div>
		<HeaderItem>
			<template v-slot:menu>
				<h1>Here might be a page title</h1>
			</template>
		</HeaderItem>
	</div>
</template>

<script>
import HeaderItem from '@/components/common/header/HeaderItem.vue'
export default {
	components: {
		HeaderItem
	}
}
</script>

<style></style>
