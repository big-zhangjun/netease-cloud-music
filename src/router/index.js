import Vue from 'vue'
import VueRouter from 'vue-router'
import mainlayout from '@/layouts/mainLayout.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		component: mainlayout
	},
	{
		path: '/',
		redirect: '/home',
		component: mainlayout
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
