<template>
  <div class="header-banner">
    <div class="header-banner-text relative my-24 w-full md:w-2/4 pr-8">
      <h1 class="text-5xl font-bold mb-6 text-neutral-800">
        <span class="text-blue-600">Automate</span> <TxtRotate :data='[ "your check-ins", "door opening", "payments", "your hotel business"]' />
      </h1>
      <p class="text-lg mb-8">
        A modern approach to hotel management in the digital age: automated solutions to optimize your business.
      </p>
      <div class="flex gap-3 items-center flex-wrap">
        <Button size="lg">Get in Touch</Button>
        <button class="text-sm font-bold text-neutral-800 hover:text-neutral-600 px-2 py-2">Explore how it works <Icon name="solar:double-alt-arrow-down-line-duotone" class="h-5" /></button>
      </div>
    </div>
    <div class="header-banner-image-block w-2/4 hidden md:block">
      <img class="object-contain lg:object-cover" src="../assets/images/header-image.png" alt="AI solution for manage your hotel business">
    </div>
  </div>
</template>

<script>
import TxtRotate from "~/components/TxtRotate.vue";
import Button from "~/components/UI/Button.vue";
export default {
  components: {
    TxtRotate,
    Button
  }
};
</script>

<style scoped>
.header-banner-text:before{
  content: "";
  background: url("@/assets/images/MaterialSymbolsKeyOutlineRounded.svg") no-repeat;
  background-size: contain;
  width: 40%;
  height: 80%;
  position: absolute;
  z-index: -1;
  transform: rotate(26deg);
  animation-name: rotation;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.header-banner-text:after{
  content: "";
  background: url("@/assets/images/MaterialSymbolsLockOpenRightOutline.svg") no-repeat;
  background-size: contain;
  width: 40%;
  height: 80%;
  position: absolute;
  z-index: -1;
  transform: rotate(15deg);
  right:0;
  bottom: -100px;
  animation-name: rotation;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.header-banner-image-block img {
  height: 100%;
}

@keyframes rotation {
  0% {transform:rotate(0deg);}
  100% {transform:rotate(360deg);}
}
</style>