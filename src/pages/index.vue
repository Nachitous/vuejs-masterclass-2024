<script setup lang="ts"></script>

<template>
  <div>
    <h1>HomeView</h1>
    <RouterLink :to="{ name: '/projects/[id]', params: { id: 1 } }">Go to projects</RouterLink>
  </div>
</template>

<style scoped></style>
