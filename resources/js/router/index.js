import { createRouter, createWebHistory } from "vue-router";
import FeedbackForm from "../components/FeedbackForm.vue";
import FeedbackList from "../components/FeedbackList.vue";

const routes = [
    { path: "/", component: FeedbackForm },
    { path: "/list", component: FeedbackList },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
