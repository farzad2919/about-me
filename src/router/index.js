import { createRouter, createWebHistory } from "vue-router";
import mainPage from "../views/main-page.vue";
import rightCard from "../components/right-card/right-card.vue";
import aboutMe from "../components/left-card/about-me.vue";
import mySkills from "../components/left-card/my-skills.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainPage",
      component: mainPage,
      children : [
        { path: "/rightCard", name: "rightCard", component: rightCard } ,
        { path: "/aboutMe", name: "aboutMe", component: aboutMe } ,
        { path: "/mySkills", name: "mySkills", component: mySkills }
      ]
    },
  ],
});

export default router;
