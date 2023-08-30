<template>
  <div class="relative overflow-x-hidden">
    <div class="container mx-auto">
      <PageHeroSection
          :aboveTitle="'By the makers of Tailwind CSS'"
          :title="'Modern website templates, crafted with Tailwind CSS.'"
          :underDescription="underDescription"
          :heroSectionAdvantages="heroSectionAdvantages"
      >
        <template v-slot:media>
          <img class="" src="@/assets/images/page-img.png" alt="title">
        </template>
        <template v-slot:description>
          Visually-stunning, easy to customize site templates built with
          React and Next.js. The perfect starting point for your next project and the ultimate resource for learning how
          experts build real websites with Tailwind CSS.
        </template>
      </PageHeroSection>
    </div>
  </div>
</template>

<script>
import PageHeroSection from '@/components/Features/PageHeroSection.vue'

export default {
  components: { PageHeroSection },
  data(){
    return{
      underDescription: [
        {
          icon: 'logos:vue',
          text: 'Vue 3'
        },
        {
          icon: 'logos:nuxt-icon',
          text: 'Nuxt.js'
        }
      ],
      heroSectionAdvantages: [
        {
          icon: 'solar:iphone-outline',
          title: 'Built with modern technologies',
          description: 'Each template is a well-structured Next.js project, giving you a codebase that’s productive and enjoyable to work in.'
        },
        {
          icon: 'solar:cursor-square-outline',
          title: 'Easy to customize',
          description: 'Everything is styled with utility classes, just open the markup in your editor and change whatever you want.'
        },
        {
          icon: 'solar:shield-user-outline',
          title: 'Built by experts',
          description: 'All of the code follows Tailwind CSS best practices, because it’s written by the same team who created and maintain the framework.'
        }
      ]
    }
  }
}

</script>

<style scoped>

</style>