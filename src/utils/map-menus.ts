import type { RouteRecordRaw } from 'vue-router'

export default function mapMenus2Routes(userMenus: Array<any>): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 获取所有的路由
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts$/) // 获取以 main 文件夹为相对路径的文件路径
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.replace('./', '/'))
    allRoutes.push(route.default)
  })
  // 根据权限获取需要添加的路由
  const _recurseGetRoute = (menus: Array<any>) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        route && routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}
