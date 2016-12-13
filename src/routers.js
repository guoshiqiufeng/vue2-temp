/**
 * Created by 皓强 on 2016/11/25 0025.
 */
import Index from './components/Index.vue'
// 编写路由集合
const routes = [
  {
    name: 'index', // 路由名，这个字段是可选的
    path: '/index', // 路由路径，这里是根路径所以是'/'
    component: Index // 模板
  },
  {
    path: '*',
    redirect: '/index'
  }
]
// 导出路由集合
export default routes
