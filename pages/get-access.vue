<template>
  <div class="top-bg"></div>
  <div class="bot-bg"></div>
  <div class="container mx-auto py-12 relative z-10">
    <div class="flex justify-between items-center md:flex-wrap lg:flex-nowrap px-6">
      <div class="text-left text-lg w-full lg:w-2/4 xl:w-2/3 py-20 lg:mr-20 2xl:mr-40">
        <h1 class="text-3xl font-bold mb-4">Get access</h1>
        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque commodi consequatur culpa cumque debitis deleniti, ducimus ea eius, eos hic impedit inventore ipsa iusto laboriosam libero maxime optio porro praesentium quidem quo ratione recusandae rem sit vel vitae voluptate.</p>
        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque commodi consequatur culpa cumque debitis deleniti, ducimus ea eius, eos hic impedit inventore ipsa iusto laboriosam libero maxime optio porro praesentium quidem quo ratione recusandae rem sit vel vitae voluptate.</p>
        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque commodi consequatur culpa cumque debitis deleniti, ducimus ea eius, eos hic impedit inventore ipsa iusto laboriosam libero maxime optio porro praesentium quidem quo ratione recusandae rem sit vel vitae voluptate.</p>
      </div>
      <div class="order-first lg:order-1 w-full lg:w-2/4 xl:w-1/3">
        <FormKit type="form"
                 submit-label="Registrate"
                 :value="formData"
                 @submit="handleSubmit">
          <FormKit
              label="Username"
              name="username"
              type="text"
              validation="required|length:2,20"
              placeholder="Username"
              prefix-icon="avatarMan"
          />
          <FormKit
              type="email"
              label="Email address"
              validation="required|email"
              validation-visibility="live"
              placeholder="keysoft@keysoft.com"
              prefix-icon="email"
          />
          <MazPhoneNumberInput
              v-model="phoneNumber"
              show-code-on-list
              color="info"
              @update="results = $event"
              :success="results?.isValid"
          />
          <FormKit
              type="select"
              label="Type of property"
              name="property"
              :options="[
                'Hotel',
                'Apartments',
                'For personal use',
                'Other',
              ]"
          />
          <FormKit
              v-model="value"
              type="radio"
              label="Do you want to connect your PMS?"
              :options="['Yes', 'No']"
              outerClass="radio-pms"
          />
          <pre wrap>{{ value }}</pre>
          <FormKit type="group">
            <FormKit
                type="password"
                name="password"
                value="password"
                label="Password"
                validation="required"
                validation-visibility="live"
                prefix-icon="password"
                suffix-icon="eyeClosed"
                @suffix-icon-click="handleIconClick"
            />
            <FormKit
                type="password"
                name="password_confirm"
                label="Confirm password"
                validation="required|confirm"
                validation-visibility="live"
                validation-label="Password confirmation"
                prefix-icon="password"
                suffix-icon="eyeClosed"
                @suffix-icon-click="handleIconClick"
            />
          </FormKit>

        </FormKit>
      </div>
    </div>
  </div>
</template>

<script setup>
// Невідомо чому виникає помилка, скоріш за все через відсутність типізації
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import { ref } from 'vue'
const phoneNumber = ref()
const results = ref()
const formData = ref({
  username: '',
  phone: '',
  email: '',
})

async function handleSubmit(data) {
  if (results.value && results.value.formatInternational) {
    data.phone = results.value.formatInternational
  }
  await wait(2000)
  console.log(data)
}

const handleIconClick = (node, e) => {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
}

</script>

<style>
.formkit-form{
  background: white;
  padding: 30px;
  border-radius: 20px;
  max-width: 440px;
}
.formkit-wrapper{
  max-width:100%;
}
.formkit-suffix-icon:hover {
  color: var(--fk-color-primary);
}
.m-phone-number-input{
  max-width:400px;
  margin-bottom:15px;
}
.m-input-wrapper{
  box-shadow: var(--fk-border-box-shadow);
  border-radius: var(--fk-border-radius);
  border: 0 !important;
}
.m-input-wrapper:focus-within {
  box-shadow: var(--fk-border-box-shadow-focus);
}
.radio-pms .formkit-options{
  display:flex;
}
.radio-pms .formkit-options li{
  margin-right:10px;
}
.top-bg {
  background: rgb(238,242,255);
  background: linear-gradient(180deg, rgba(238,242,255,1) 0%, rgba(255,255,255,1) 50%);
  position: absolute;
  width: 100%;
  height: 50%;
}
.bot-bg {
  background: rgb(238, 242, 255);
  background: linear-gradient(0deg, rgba(238, 242, 255, 1) 0%, rgba(255, 255, 255, 1) 50%);
  position: absolute;
  width: 100%;
  height: 50%;
  bottom:0;
}
@media (max-width: 1024px) {
  .formkit-wrapper, .formkit-fieldset, .m-phone-number-input, .formkit-form{
    margin: 0 auto !important;
  }
  .m-phone-number-input{
    margin-bottom:10px !important;
  }
  .formkit-message{
    text-align: center;
  }
}
</style>