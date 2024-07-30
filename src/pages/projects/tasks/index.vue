<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { Tables } from '../../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)
;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) console.log(error)

  tasks.value = data
})()
</script>

<template>
  <div>
    <h1>TasksView</h1>
    <RouterLink to="/projects">Go Projects</RouterLink>
    <ul>
      <li v-for="tasks in tasks" :key="tasks.id">
        {{ tasks.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
