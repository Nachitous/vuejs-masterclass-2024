<script setup lang="ts">
import Sidebar from './components/ui/layout/Sidebar.vue'
import TopNavbar from './components/ui/layout/TopNavbar.vue'
</script>

<template>
  <Sidebar />
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <TopNavbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>
