<script setup>
import { ref } from "vue";
import Navbar from "../components/static/Navbar.vue";
import Footer from "../components/static/Footer.vue";

const name = ref("");
const email = ref("");
const message = ref("");

const submitForm = () => {
  // Handle form submission logic here
  // You can use the data properties (name, email, message) to access the form values
};
</script>

<template>
  <div class="bg-bgcmi text-text2">
    <Navbar />
    <div class="container mx-auto">
      <h1>Contact Us</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <label for="message">Message:</label>
          <textarea
            id="message"
            v-model="message"
            class="input input-bordered w-full max-w-xs"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    <Footer />
  </div>
</template>
