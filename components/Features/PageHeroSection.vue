<template>
  <div class="mx-auto max-w-container pt-4 lg:flex px-4 lg:px-8">
    <div class="relative z-10 hidden w-2/5 lg:flex items-center">
      <div class="mt-6 flex">
        <div v-if="!freeMedia" class="relative flex-shrink-0 p-4 w-full">
          <div class="relative z-10 overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5">
            <slot name="media"></slot>
          </div>
          <div class="z-0">
            <div
                class="absolute -right-12 left-0 top-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div
                class="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div
                class="absolute -right-12 bottom-14 left-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div
                class="absolute -bottom-8 -top-2 right-0 w-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
            <div class="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
              <div class="flex -mb-px h-[2px] w-80 -scale-x-100">
                <div
                    class="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div
                    class="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              </div>
            </div>
          </div>
        </div>
        <slot name="free-media"></slot>
      </div>
    </div>
    <div class="relative z-20 mx-auto pb-16 pt-16 lg:mx-0 lg:w-3/5 lg:max-w-none lg:flex-none lg:pb-24 lg:pl-12 lg:pt-20">
      <p class="text-base font-semibold leading-7 text-sky-500">{{ aboveTitle }}</p>
      <h1 class="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
        {{ title }}
      </h1>
      <p class="mt-4 text-base leading-7 text-slate-600">
        <slot name="description"></slot>
      </p>
      <div v-if="underDescription" class="flex flex-wrap mt-6">
        <div class="flex items-center mr-8" v-for="(item, key) in underDescription" :key="key">
          <Icon :name="item.icon" class="text-3xl mr-2"/>
          <span class="ml-2 text-xl leading-7 text-slate-600">{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="relative z-20 sm:z-auto mt-6 lg:mt-20">
    <div class="mx-auto max-w-container px-4 pb-16 sm:px-4 lg:px-8">
      <div class="relative mx-auto grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
        <div class="flex" v-for="(item, key) in heroSectionAdvantages" :key="key">
          <Icon class="text-3xl min-w-[48px] h-12 p-1 text-sky-500 rounded-lg
                shadow-[rgba(14,165,233,1)_0px_0px_0px_2px,_rgba(14,165,233,1)_0px_2px_2px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                :name="item.icon" />
          <div class="ml-6">
            <h2 class="text-sm font-semibold leading-6 text-slate-900">
              {{ item.title}}
            </h2>
            <p class="mt-2 text-sm leading-6 text-slate-700">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      freeMedia: {
        // use if you want to show something besides one img or one video and use slot "free-media" instead of "media"
        type: Boolean,
        default: false
      },
      aboveTitle: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      },
      underDescription: {
        type: Array,
        default: []
      },
      heroSectionAdvantages: {
        type: Array,
        default: []
      },
    }
  }

</script>

<style scoped>

</style>