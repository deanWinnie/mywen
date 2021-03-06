import Vue from 'vue'
import Router from 'vue-router'
import NanNing from './pages/nanNing'
import NingXia from './pages/ningXia'
import WeiZhouDao from './pages/weiZhouDao'
import Home from './pages/home'
import TogetherDate from './pages/togetherDate'
import Index from './pages/index'
import Picture from './pages/picture'

Vue.use(Router);
export default new Router({
    routes:[   //这里的属性是routes不是routers千万不能写错
        {
            path:'/',
            name:'home',
            component:Home,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:Index
                },{
                    path:'/togetherDate',
                    name:'togetherDate',
                    component:TogetherDate
                },{
                    path:'/picture/:id',
                    name:'picture',
                    component:Picture
                }
            ]
        },{
            path:'/nanNing',
            name:'nanNing',
            component:NanNing
        },{
            path:'/ningXia',
            name:'ningXia',
            component:NingXia
        },{
            path:'/weiZhouDao',
            name:'weiZhouDao',
            component:WeiZhouDao
        }
    ]
});