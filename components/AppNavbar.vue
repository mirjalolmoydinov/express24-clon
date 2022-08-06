<template>
  <nav class="flex items-center justify-between mt-4 w-11/12 mx-auto border-solid border-black-200 border-b-2 pb-4">
    <div class="logo ml-4">
      <img src="@/assets/img/header-logo.svg" alt="" class="w-48 cursor-pointer">
    </div>
    <div class="search">
      <input type="text" placeholder="поиск" class="py-2 px-2 border-solid border-2 rounded w-96">
    </div>
    <ul class="flex items-center">
      <li
        class="text-md font-bold text-black cursor-pointer border-white transition duration-700 ease-in-out border-b-2 hover:border-black border-solid">
        <nuxt-link to="/">Адрес не указан</nuxt-link>
      </li>
      <li class="text-md font-bold text-black cursor-pointer border-white transition duration-700 ease-in-out border-b-2 hover:border-black border-solid ml-10
      ">
        <nuxt-link to="/about">Вжод</nuxt-link> |
      </li>
      <li
        class="text-md font-bold text-black cursor-pointer border-white transition duration-700 ease-in-out border-b-2 hover:border-black border-solid ml-3">
        <nuxt-link to="/login">Регистратсия</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
</style>