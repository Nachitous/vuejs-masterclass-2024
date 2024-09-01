<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectsColumns'
import { projectsQuery } from '@/utils/supaQueries'
import type { Projects } from '@/utils/supaQueries'

usePageStore().pageData.title = 'Projects'

const projects = ref<Projects | null>(null)
const getProjects = async () => {
  const { data, error, status } = await projectsQuery

  if (error) useErrorStore().setError({ error, customCode: status })

  projects.value = data
}

await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

<style scoped></style>
