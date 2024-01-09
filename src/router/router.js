import Main from "@/pages/Main"
import River from "@/pages/River"
import World from "@/pages/World"
import Winter from "@/pages/Winter"
import Africa from "@/pages/Africa"
import Shop from "@/pages/Shop"

import { createRouter, createWebHistory } from "vue-router"

const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/russia',
		component: River
	},
	{
		path: '/worldmap',
		component: World
	},
	{
		path: '/canada',
		component: Winter
	},
	{
		path: '/africa',
		component: Africa
	},
	{
		path: '/shop',
		component: Shop
	},
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})

export default router;