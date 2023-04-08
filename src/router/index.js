import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [   
    {
        path:"/",
        component: ()=> import("../views/Login")
    },
    {
        path:"/myrt",
        component: ()=> import("../views/MyRight")
    },
    {
        path:"/crc",
        component: ()=> import("../views/CopyRightCertifi")
    },
    {
        path:"/pc",
        component: ()=> import("../views/PersonalCenter")
    },
    {
        path:"/ts",
        component: ()=> import("../views/TsetWeb3")
    },
    {
        path:"/hom",
        component: ()=> import("../views/HomeView")
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;