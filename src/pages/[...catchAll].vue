<script setup lang="ts">
import AppError from '@/components/appError/AppErrorPage.vue'
import { useErrorStore } from '@/stores/error'

useErrorStore().setError({ error: 'Page not found', customCode: 404 })
</script>

<template>
  <AppError />
</template>
