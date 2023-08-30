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

    <ContentSection
        :aboveTitle="'Deploy faster'"
        :title="'A better workflow'"
        :description="'Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.'"
        :outerBlockHeight="700"
    >
      <template v-slot:media>
        <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" />
      </template>
      <template v-slot:content>
        <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
        <ul role="list" class="mt-8 space-y-8 text-gray-600">
          <li class="flex gap-x-3">
            <CloudArrowUpIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</span>
          </li>
          <li class="flex gap-x-3">
            <LockClosedIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span>
          </li>
          <li class="flex gap-x-3">
            <ServerIcon class="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
            <span><strong class="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
          </li>
        </ul>
        <p class="mt-8">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
        <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
        <p class="mt-6">Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.</p>
      </template>
    </ContentSection>
    <ReviewSection
        :text="'Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.'"
        :autor="'Judith Black'"
        :autorPosition="'CEO of Workcation'"
    >
      <template v-slot:image>
        <img class="shadow-2xl rounded-2xl object-cover absolute w-full h-full max-w-full"
             src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2102&amp;q=80"
             alt="">
      </template>
    </ReviewSection>
  </div>
</template>

<script>
import PageHeroSection from '@/components/Features/PageHeroSection.vue'
import ContentSection from '@/components/Features/ContentSection.vue'
import ReviewSection from '@/components/Features/ReviewSection.vue'

export default {
  components: { PageHeroSection, ContentSection, ReviewSection },
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
.scrollbar::-webkit-scrollbar {
  width: 10px;
  background-color: #f9f9fd;
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgb(37, 99, 235);
}

.scrollbar::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: #f9f9fd;
}
</style>