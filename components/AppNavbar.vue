<template>
  <nav class="flex items-center justify-between">
    <ul class="flex items-center">
      <li class="p-4 bg-yellow-200
      text-2xl text-black ml-4 cursor-pointer">
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li class="p-4 bg-yellow-200
      text-2xl text-black ml-4  cursor-pointer">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li class="p-4 bg-yellow-200
      text-2xl text-black ml-4  cursor-pointer">
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
      <li class="p-4 bg-yellow-200
      text-2xl text-black ml-4  cursor-pointer">
        <nuxt-link to="/movie">Movie</nuxt-link>
      </li>
      <li class="p-4 bg-yellow-200
      text-2xl text-black ml-4  cursor-pointer">
        <nuxt-link to="/login">Login</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
mounted() {
  console.log(this.$axios);
},
}
</script>

<style>
</style>