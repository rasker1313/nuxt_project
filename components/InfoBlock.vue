<template>
  <section class="text-gray-600 body-font">
    <div class="mx-auto flex px-8 py-24 md:flex-row flex-col items-center">
      <div :class="direction === 'left' ? 'lg:pl-12 md:pl-8 md:order-1' : 'lg:pr-12 md:pr-8'" class="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          <slot name="title"></slot>
        </h1>
        <p class="mb-8 leading-relaxed text-lg">
          <slot name="description"></slot>
        </p>
        <div v-if="payments" class="flex justify-between h-16 ">
        <!-- https://www.flaticon.com/ -->
          <img src="@/assets/images/payments/apple-pay-badge-brand-color.svg" alt="Apple Pay" class="payment-icon">
          <img src="@/assets/images/payments/paypal-badge-brand-color.svg" alt="PayPal" class="payment-icon">
          <img src="@/assets/images/payments/visa-badge-brand-color.svg" alt="Visa" class="payment-icon">
          <img src="@/assets/images/payments/mastercard-badge-brand-color.svg" alt="MasterCard" class="payment-icon">
          <img src="@/assets/images/payments/maestro-badge-brand-color.svg" alt="Maestro" class="payment-icon">
          <img src="@/assets/images/payments/amex-badge-brand-color.svg" alt="American Express" class="payment-icon">
        </div>
        <div class="flex justify-center mt-8">
          <button class="btn bg-[#ebebeb] text-[#333333] hover:bg-gray-300">
            <slot name="button"></slot>
          </button>
        </div>
      </div>
      <div :class="direction === 'left' ? 'lg:pr-12 md:pr-8' : 'lg:pl-12 md:pl-8'" class="md:w-1/2 w-5/6">
        <img class="object-cover object-center rounded" alt="hero" :src="img">
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  direction: {
    type: String,
    default: 'left'
  },
  img: {
    type: String,
    default: '',
    required: true
  },
  payments: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>

</style>