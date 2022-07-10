import { createRouter,createWebHashHistory} from 'vue-router'
import index from '../src/page/index/index.vue'
import room from '../src/page/room/index.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:index
        },
        {
            path:'/room',
            component:room
        }
    ]
})
export default router