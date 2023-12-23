<script setup>
import Navbar from "../components/static/Navbar.vue";
import Footer from "../components/static/Footer.vue";

const services = [
  {
    id: 1,
    title: "Service 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Service 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Service 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
];
</script>

<template>
  <div class="bg-bgcmi text-text2">
    <Navbar />
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold mb-4">Our Services</h1>
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="service in services"
          :key="service.id"
          class="p-4 bg-white shadow"
        >
          <h2 class="text-xl font-semibold mb-2">{{ service.title }}</h2>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
