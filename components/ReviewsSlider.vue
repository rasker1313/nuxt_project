<template>
  <div class="absolute right-6 -mt-10">
    <Icon @click="prev" class="text-5xl cursor-pointer" name="ic:baseline-keyboard-double-arrow-left" />
    <Icon @click="next" class="text-5xl cursor-pointer" name="ic:baseline-keyboard-double-arrow-right" />
  </div>
  <carousel ref="carousel" v-bind="settings" class="pb-10 mt-10">
    <slide v-for="(slide, index) in slides" :key="index">
      <div class="bg-white flex flex-wrap rounded-3xl text-left py-6 px-8">
        <div class="w-full mb-6">{{ slide.description }}</div>
        <div class="flex justify-center items-center w-full">
          <div class="mr-2 w-full">
            <div class="font-bold">{{ slide.name }}</div>
            <div class="text-md">{{ slide.company }}</div>
          </div>
          <img class="w-12 h-12 rounded-3xl" :src="slide.photo" :alt="slide.name" />
        </div>
      </div>
    </slide>
  </carousel>

</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
  data() {
    return {
      settings: {
        itemsToShow: 1,
        autoplay: 3000,
        transition: 500,
        pauseAutoplayOnHover: true,
        wrapAround: true,
        breakpoints: {
          768: {
            itemsToShow: 2,
            snapAlign: 'left',
          },
          1200: {
            itemsToShow: 3,
            snapAlign: 'center',
          },
        }
      },
      slides: [
        {
          id: 1,
          name: 'Олександр Семенюк',
          company: 'Готель "Дніпровська Брама"',
          photo: '/images/reviews/1.png',
          description: 'KeySoft змінив наш підхід до спілкування з клієнтами. Система нотифікацій дозволила нам тримати руку на пульсі потреб гостей і відповідати на їх запити миттєво.'
        },
        {
          id: 2,
          name: 'Тетяна Левченко',
          company: 'Курорт "Закарпатські Зорі"',
          photo: '/images/reviews/2.png',
          description: 'Від того моменту, як ми інтегрували KeySoft, процес заселення став набагато швидшим і зручнішим для наших гостей. Завдяки автоматизації, ми змогли зосередитися на наданні кращого сервісу.'
        },
        {
          id: 3,
          name: 'Ігор Коваленко',
          company: 'Група апартаментів "Місто Лева"',
          photo: '/images/reviews/3.png',
          description: 'Платіжна система KeySoft забезпечила нам безпеку операцій та комфорт для наших гостей. Автоматичний доступ після успішної оплати став справжнім генієм нашого бізнесу.'
        },
        {
          id: 4,
          name: 'Джон Доу',
          company: 'Невідома компанія',
          photo: '/images/reviews/2.png',
          description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
        },
      ]
    }
  },
  components: {
    Carousel,
    Slide,
  },
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    }
  }
}
</script>

<style scoped>

.carousel__slide {
  padding: 5px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(10deg) scale(0.85);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.85);
}

</style>