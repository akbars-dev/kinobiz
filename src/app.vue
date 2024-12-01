<script setup>
import navbar from './components/navbar.vue'


</script>

<template>
  <div class="wrapper w-full">
    <!-- Navbar  -->
    <navbar />

    <!-- Main Content -->
    <main class="max-w-[1200px] px-[10px] first:px-0 mx-auto">
      <router-view></router-view>
    </main>
  </div>
</template>
