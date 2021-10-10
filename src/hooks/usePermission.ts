import { useStore } from '@/store'

export default function usePermission(pageName: string, handleName: string) {
  const store = useStore()
  const verifyPermission = `system:${pageName}:${handleName}`
  const permissions = store.state.loginModule.permissions
  return !!permissions.find((item) => item === verifyPermission)
}
