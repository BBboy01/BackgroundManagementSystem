import { ref } from 'vue'

import PageModel from '@/components/page-model'

export default function usePageModel() {
  const pageModel = ref<InstanceType<typeof PageModel>>()

  const defaultInfo = ref({})

  const handleNewData = () => {
    if (pageModel.value) {
      pageModel.value.dialogVisible = true
    }
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = Object.assign({}, item)
    if (pageModel.value) {
      pageModel.value.dialogVisible = true
    }
  }

  return [pageModel, defaultInfo, handleNewData, handleEditData]
}
