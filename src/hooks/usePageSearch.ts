import { ref } from 'vue'

import PageContent from '@/components/page-content'

export default function usePageSearch() {
  const pageContent = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = () => {
    pageContent.value?.getPageContent()
  }
  const handleQueryClick = (queryInfo: any) => {
    pageContent.value?.getPageContent(queryInfo)
  }

  return [pageContent, handleResetClick, handleQueryClick]
}
