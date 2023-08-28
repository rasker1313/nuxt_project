<template>
  <NuxtClientFallback>
    <kinesis-container event="move" :duration="2500">
      <div class="container mx-auto py-32 px-6 lg:px-8">
        <div class="min-h-[440px] h-fit flex flex-col lg:flex-row	justify-between items-center gap-12">
          <div class="basis-8/12 relative flex flex-col justify-between h-fit w-full">
            <div>
              <h1 class="relative top-0 left-0 text-5xl leading-tight font-bold text-neutral-800 mb-4 min-h-[120px] max-w-[510px] z-10">
                <span class="text-blue-600">Automate</span> <TxtRotate :data='[ "your check-ins", "door opening", "payments", "your hotel business"]' />
              </h1>
              <DecorationsBrokenLine class="absolute top-9 left-3 right-3 max-w-md	 fill-blue-400/30 z-0" />
            </div>
            <div>
              <p class="text-lg leading-7 text-slate-700 max-w-[510px]">
                A modern approach to hotel management in the digital age: automated solutions to optimize your business.
              </p>
              <div class="flex gap-3 items-center flex-wrap mt-8 ">
                <UiButton size="lg">Get in Touch</UiButton>
                <UiButton size="lg" color="light" icon="double-alt-arrow-down-line-duotone">Explore how it works</UiButton>
              </div>
            </div>
          </div>
          <div class="h-[260px] sm:h-[380px] md:h-[420px] lg:h-[400px] xl:h-[460px] 2xl:h-[500px] w-full grow relative">
            <kinesis-element :strength="1" class="absolute rounded-xl h-auto z-50" style="width: 80%; top: 5%; left: 5%">
              <img class="rounded-xl h-full w-auto" src="@/assets/images/hero/app-calendar.png" alt="Keysoft Calendar Ui">
            </kinesis-element>
            <kinesis-element :strength="8" class="absolute rounded-xl bg-gradient-to-r from-blue-600/90 to-indigo-600/80 z-20" style="width: 80%; top: 2%; left: 6%; rotate: 3deg">
              <img class="opacity-0 h-auto" src="@/assets/images/hero/app-calendar.png" alt="Keysoft Calendar Ui" style="padding: 4% 0;">
            </kinesis-element>
            <kinesis-element :strength="20" class="absolute rounded-xl bg-gradient-to-r from-slate-300/90 to-slate-400/70 z-10" style="width: 80%; top: 1%; left: 2%; rotate: -2deg">
              <img class="opacity-0 h-auto" src="@/assets/images/hero/app-calendar.png" alt="Keysoft Calendar Ui">
            </kinesis-element>
            <kinesis-element :strength="2" class="absolute rounded-xl h-auto z-50" style="width: 24%; right: 5%; bottom: 2%;">
              <img class="rounded-xl h-auto w-full" src="@/assets/images/hero/app-public-page.jpg" alt="Keysoft Calendar Ui">
            </kinesis-element>
            <kinesis-element :strength="4" class="absolute rounded-xl z-40 bg-gradient-to-r from-teal-600/80 from-70% to-blue-700/90" style="width: 24%; right: 3%; bottom: 3%; rotate: 2deg">
              <img class="opacity-0 h-auto" src="@/assets/images/hero/app-public-page.jpg" alt="Keysoft Calendar Ui" style="padding: 2% 0">
            </kinesis-element>
          </div>
        </div>
      </div>
    </kinesis-container>
  </NuxtClientFallback>
</template>

<script>
import TxtRotate from "~/components/TxtRotate.vue";
import { KinesisContainer, KinesisElement} from 'vue-kinesis'


export default {
  components: {
    TxtRotate, KinesisContainer, KinesisElement
  }
};
</script>

<style lang="css" scoped>
/*.header-banner-text:before{
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
}*/
</style>