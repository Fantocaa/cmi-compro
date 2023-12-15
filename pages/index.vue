<script setup lang="ts">
import navbar from "../components/static/navbar.vue";

const route = useRoute();
</script>

<template>
  <div>
    <navbar />
    <!-- <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a> -->
    <div class="flex justify-between">
      <h1>Home</h1>
      <button>meong</button>
    </div>
  </div>
</template>
