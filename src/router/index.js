import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'

Vue.use(VueRouter)

const routes = [
	{
		path: '/home',
		component: Home
	},
	{
		path: '/',
		redirect: '/home',
		component: Home
	},
	{
		path: '/singer',
		component: () =>
			import(/* webpackChunkName: "index" */ '@/views/singer/Singer.vue')
	},
	{
		path: '/ranking',
		component: () =>
			import(/* webpackChunkName: "index" */ '@/views/ranking/Ranking.vue')
	},
	{
		path: '/private',
		component: () =>
			import(/* webpackChunkName: "index" */ '@/views/private/Private.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass: 'active',
	routes
})

export default router
