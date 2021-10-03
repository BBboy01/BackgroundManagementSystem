import type { RouteRecordRaw } from 'vue-router'

import { IBreadCrumb } from '@/base-ui/breadcrumb'

export let firstMenu: any = null

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
        if (!firstMenu) firstMenu = menu
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)

  return routes
}

export function pathMap2Menu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadCrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMap2Menu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function pathMap2Breadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadCrumb[] = []
  pathMap2Menu(userMenus, currentPath, breadcrumbs)

  return breadcrumbs
}
