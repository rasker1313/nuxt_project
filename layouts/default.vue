<template>
  <div class="flex flex-col min-h-full">
    <Header />
    <div class="wrapper relative">
      <slot />
    </div>
    <Footer />
    <UnderFooter />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import UnderFooter from '@/components/UnderFooter.vue'
export default {
  components: { Header, Footer, UnderFooter },
  setup() {
    const route = useRoute();
    const isIndexPage = route.name === 'index';

    return {
      isIndexPage
    };
  }
};
</script>

<style>
html, body, #__nuxt {
  height: 100%;
}
body.overflow-hidden {
  overflow: hidden;
}
.wrapper{
  flex: 1 1 auto;
}
</style>