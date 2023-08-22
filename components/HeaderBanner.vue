<template>
  <div class="header-banner">
    <div class="header-banner-text relative my-24 w-full md:w-2/4 pr-8">
      <h1 class="text-4xl font-bold mb-6">
          <TxtRotate :data='[ "Keysoft", "AI технології"]' class="text-blue-500" /> майбутнє в управлінні вашим готелем
      </h1>
      <p class="text-lg mb-8">
        Автоматизація, швидкість, комфорт та ефективність. Все, що потрібно вашому готелю для сучасного управління.
      </p>
      <div>
        <button class="btn mr-4 mb-4">Замовити консультацію</button>
        <button class="btn btn-gray">Дізнатися більше</button>
      </div>
    </div>
    <div class="header-banner-image-block w-2/4 hidden md:block">
      <img class="object-contain lg:object-cover" src="../assets/images/header-image.png" alt="AI solution for manage your hotel business">
    </div>
  </div>
</template>

<script>
import TxtRotate from "~/components/TxtRotate.vue";
export default {
  components: {
    TxtRotate
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