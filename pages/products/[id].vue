<template>
  <div>
    <Head>
      <Title>{{ product.title }}</Title>
      <Meta name="description" :content="splitDescription(product.description, 40)" />
    </Head>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await useFetch(uri, { key: id })

if (!product.value) {
  throw createError ({ statusCode: 404, statusMessage: 'Product not found'})  // ,fatal: true - 404 error for broken links
}

definePageMeta({
  layout: 'products'
})

function splitDescription(string, length) {
  //Обрізання опису зі збереженням останнього цілого слова
  const truncateString = (str, length) => str.length <= length ? str : str.slice(0, length).split(' ').slice(0, -1).join(' ') + '...';

  return truncateString(string, length);
}



</script>

<style scoped>

</style>