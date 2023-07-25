<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium assumenda commodi cum delectus dignissimos, dolor eaque enim error esse fugiat laudantium modi natus nobis non omnis possimus quibusdam, repellendus reprehenderit rerum sed veritatis voluptatem voluptatibus. Amet blanditiis doloremque dolores eos, molestiae molestias nihil nisi nostrum nulla possimus, quaerat quam quos repellendus rerum sed similique sint, voluptate! A aliquid aperiam architecto atque, culpa cum cupiditate dicta, dolor dolore eius error expedita explicabo facere fugiat fugit hic iste iure nam necessitatibus nesciunt officiis optio quaerat qui quia quibusdam repudiandae sit tempora unde voluptate voluptatem? Consectetur deserunt esse et odit praesentium provident.</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}

</style>