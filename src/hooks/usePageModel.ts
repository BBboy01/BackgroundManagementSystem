import { ref } from 'vue'

import PageModel from '@/components/page-model'

export default function usePageModel(
  newCallback?: (item?: any) => void,
  editCallback?: (item?: any) => void
) {
  const pageModelRef = ref<InstanceType<typeof PageModel>>()

  const defaultInfo = ref({})

  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisible = true
    }
    newCallback && newCallback()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisible = true
    }
    editCallback && editCallback(item)
  }

  return [pageModelRef, defaultInfo, handleNewData, handleEditData]
}
