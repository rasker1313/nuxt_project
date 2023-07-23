<template>
  <div>
    <h2>Product details for {{ id }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, laborum, quis! Consequatur culpa fugiat officia,
      officiis possimus quam sint soluta.</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params

definePageMeta({
  layout: 'products'
})
</script>

<style scoped>

</style>