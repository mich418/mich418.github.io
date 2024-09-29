import { ref } from 'vue'

const privacyAcnowledged = ref(window.localStorage.getItem('privacyAcnowledged') === 'true')

const acnowledgePrivacy = () => {
  privacyAcnowledged.value = true
  window.localStorage.setItem('privacyAcnowledged', 'true')
}

export function usePrivacy() {
  return {
    acnowledgePrivacy,
    privacyAcnowledged
  }
}
