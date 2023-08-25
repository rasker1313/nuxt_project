<template>
  <header class="header relative z-40">
    <div class="flex items-center justify-between w-full px-4 py-3 sm:p-0">
      <div class="lg:hidden w-14">
        <div @click="isOpen = !isOpen" type="button" class="menu-button">
          <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true" class="menu-icon-line" :class="{'rotate-45': isOpen,' -translate-y-1.5': !isOpen }"></span>
            <span aria-hidden="true" class="menu-icon-line" :class="{'opacity-0': isOpen } "></span>
            <span aria-hidden="true" class="menu-icon-line" :class="{'-rotate-45': isOpen, ' translate-y-1.5': !isOpen}"></span>
          </div>
        </div>
      </div>
      <div class="flex items-center relative">
        <NuxtLink to="/" class="mr-10">
          <img  src="@/assets/images/logo.png" alt="Keysoft" width="160" />
        </NuxtLink>
        <div class="hidden lg:block">
          <nav class="flex justify-between text-lg">
            <NuxtLink class="header-link hover-link" to="#">Функції</NuxtLink>
            <NuxtLink class="header-link hover-link" to="#">Рішення</NuxtLink>
            <NuxtLink class="header-link hover-link" to="#">Ціни</NuxtLink>
            <NuxtLink class="header-link hover-link" to="#">Блог</NuxtLink>
          </nav>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <LanguageChanger />
        <NuxtLink to="/get-access" class="btn hidden lg:block">{{ $t('buttons.get_access')}}</NuxtLink>
      </div>
    </div>
  </header>
  <Transition name="slide-fade">
    <div v-if="isOpen" class="mainDropdownMenu absolute bg-indigo-50 w-full z-30 flex items-center justify-center flex-wrap flex-col lg:hidden">
      <nav class="px-2 pt-2 pb-4 flex text-lg items-center flex-col w-full">
        <NuxtLink class="header-link hover-link mb-6 block w-full text-center" to="#">Функції</NuxtLink>
        <NuxtLink class="header-link hover-link mb-6 block w-full text-center" to="#">Рішення</NuxtLink>
        <NuxtLink class="header-link hover-link mb-6 block w-full text-center" to="#">Ціни</NuxtLink>
        <NuxtLink class="header-link hover-link block w-full text-center" to="#">Блог</NuxtLink>
      </nav>
      <button class="btn mt-6 min-w-[50%]">{{ $t('buttons.get_access')}}</button>
    </div>
  </Transition>

</template>

<script>
import LanguageChanger from "~/components/LanguageChanger.vue";
import HeaderMenu from "~/components/HeaderMenu.vue";
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  components: {
        LanguageChanger, HeaderMenu
  },
  watch: {
    isOpen(val) {
      if (val) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
}
</script>

<style scoped>
.mainDropdownMenu{
  height: calc(100% - 95px);
}
.icon-transition {
  transition: transform 0.5s ease-in-out;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-500px);
}
</style>