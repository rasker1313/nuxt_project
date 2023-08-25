<template>
  <div class="underfooter">
    <div>© 2021-{{ currYear }}, Keysoft Cloud</div>
    <div>
      <NuxtLink to="#" class="mr-2 text-white hover:opacity-80">
        <Icon class="text-2xl cursor-pointer" name="ri:instagram-fill" />
      </NuxtLink>
      <NuxtLink to="#" class="text-white hover:opacity-80">
        <Icon class="text-2xl cursor-pointer" name="ri:twitter-fill" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const todayDate = new Date();
const currYear = todayDate.getFullYear();
</script>

<style scoped>

</style>