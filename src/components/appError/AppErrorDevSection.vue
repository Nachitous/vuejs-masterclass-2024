<script setup lang="ts">
defineProps<{
  message: string
  customCode: number
  statusCode: number
  details: string
  code: string
  hint: string
}>()
</script>

<template>
  <div>
    <iconify-icon icon="lucide:triangle-alert" class="error__icon" />
    <h1 class="error__code">{{ customCode || code }}</h1>
    <p class="error__code" v-if="statusCode">Status Code: {{ statusCode || code }}</p>
    <p class="error__msg">{{ message }}</p>
    <p class="error__msg" v-if="hint">Hint: {{ hint }}</p>
    <p class="error__msg" v-if="details">Details: {{ details }}</p>
    <div class="error-footer">
      <p class="error-footer__text">You'll find lots to explore on the home page.</p>
      <RouterLink to="/">
        <Button class="max-w-36"> Back to homepage </Button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
