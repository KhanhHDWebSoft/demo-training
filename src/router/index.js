import Vue from "vue";
import Router from "vue-router";

// components
import Home from "../views/Home.vue";
import Nested from "../views/Nested.vue";
import Vuelidate from "../views/Vuelidate.vue";
import Veelidate from "../views/Veelidate.vue";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: "Home",
            component: Home 
        },
        {
            path: "/nested",
            component: Nested,
            children: [
                {
                    path: "vuelidate",
                    name:"Vuelidate",
                    component: Vuelidate
                },

                {
                    path: "veelidate",
                    name: "Veelidate",
                    component: Veelidate
                }
            ]
        },

    ]
})

export default router;