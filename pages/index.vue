<script setup lang="ts">
import Navbar from "../components/static/Navbar.vue";
import Footer from "../components/static/Footer.vue";

const route = useRoute();
</script>

<template>
  <div class="bg-bgcmi text-text2">
    <Navbar />
    <div class="flex justify-between">
      <div class="container w-full mx-auto px-16">Home</div>
    </div>
    <Footer />
  </div>
</template>
