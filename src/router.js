/**
 * Created by 皓强 on 2016/11/25 0025.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'

Vue.use(VueRouter)

// 实例化router对象
const router = new VueRouter({
  mode: 'history', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
  linkActiveClass: 'u-link--Active', // 这只链接激活时的class
  // base: '/app/', // 这个是设置根目录路径，一般用不到，默认'/'
  routes // 挂载路由集合
})

// 导出router对象
export default router
