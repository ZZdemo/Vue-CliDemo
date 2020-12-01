import {createApp, h} from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHashHistory} from 'vue-router'
import Todos from "./components/Todos.vue";
import Dashboard from "./components/Dashboard.vue";
 
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        name: 'dashboard',
        component: Dashboard
    }, {
        path: '/todos',
        name: 'todos',
        component: Todos
    }]
 
})
// 动态路由
 
// router.addRoute({
//     path: '/about',
//     name: 'about',
//     component: () => import('./components/About.vue')
// })
// router.addRoute('about', {
//     path: '/about/info',
//     name: 'info',
//     component: {
//         render() {
//             return h('div', 'info page');
//         }
//     }
// })
createApp(App)
    .use(router)
    .mount('#app')