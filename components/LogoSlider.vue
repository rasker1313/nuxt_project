<template>
  <carousel v-bind="settings" class="mt-16 container mx-auto">
    <slide v-for="(slide, index) in slides" :key="index">
      <img class="mx-auto max-h-20 object-cover px-2" :src="slide.img" :alt="slide.title" />
    </slide>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
  data() {
    return {
      settings: {
        itemsToShow: 1,
        autoplay: 2000,
        transition: 500,
        pauseAutoplayOnHover: true,
        wrapAround: true,
        breakpoints: {
          640: {
            itemsToShow: 2,
            snapAlign: 'start',
          },
          768: {
            itemsToShow: 3,
            snapAlign: 'start',
          },
          1024: {
            itemsToShow: 4,
            snapAlign: 'start',
          },
          1200: {
            itemsToShow: 6,
            snapAlign: 'start',
          },
        }
      },
      slides: [
        {
          id: 1,
          title: 'Slide 1',
          img: '/images/logos/1.png',
        },
        {
          id: 2,
          title: 'Slide 2',
          img: '/images/logos/2.png',
        },
        {
          id: 3,
          title: 'Slide 3',
          img: '/images/logos/3.png',
        },
        {
          id: 4,
          title: 'Slide 4',
          img: '/images/logos/4.png',
        },
        {
          id: 5,
          title: 'Slide 5',
          img: '/images/logos/5.png',
        },
        {
          id: 6,
          title: 'Slide 6',
          img: '/images/logos/6.png',
        },
        {
          id: 7,
          title: 'Slide 7',
          img: '/images/logos/7.png',
        },
      ]
    }
  },
  components: {
    Carousel,
    Slide,
  },
}
</script>