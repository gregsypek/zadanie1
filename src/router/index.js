import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import History from "../views/History.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/history",
		name: "History",
		component: History,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
