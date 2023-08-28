<template>
  <div class="relative">
    <div class="flag-focus flex items-center lg:mr-4 cursor-pointer">
      <img class="mr-1 rounded-sm" :src="flagLink(locale, 32)" :alt="$t('language')">
      <Icon class="text-xl" name="ic:baseline-keyboard-arrow-down"  @click="isOpen = !isOpen" />
    </div>
    <div v-if="isOpen" class="dropdown-flag absolute py-4 px-4 mt-2 right-3 bg-white rounded text-lg z-40">
      <div v-for="(loc, key) in availableLocales" :key="key">
        <div @click="locale = loc" v-if="loc !== locale" class="flag-focus flex justify-center items-center cursor-pointer">
          <img :src="flagLink(loc, 24)" :alt="flagImg(loc).name" class="mr-2"> <div>{{ flagImg(loc).name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, availableLocales } = useI18n()
const isOpen = ref(false)

const flagImg = (loc) => {
  switch (loc) {
    case 'de':
      return {
        flag: 'DE',
        name: 'Deutsch',
      }
    case 'en':
      return {
        flag: 'GB',
        name: 'English',
      }
    case 'ua':
      return {
        flag: 'UA',
        name: 'Українська',
      }
    default:
      return {
        flag: 'GB',
        name: 'English',
      }
  }
}
const flagLink = (loc, size) => {
  const imgFlag = flagImg(loc)
  return `https://www.countryflagicons.com/FLAT/${size}/${imgFlag.flag}.png`
}
</script>

<style scoped>
.flag-focus:hover img {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2);
  transition: 0.5s;
}
.dropdown-flag{
  min-width: 160px;
}
</style>

