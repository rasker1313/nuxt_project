<template>
  <div class="top-bg"></div>
  <div class="bot-bg"></div>
  <div class="container mx-auto py-12 relative z-10">
    <div class="flex justify-between items-center flex-wrap lg:flex-nowrap px-6">
      <div class="text-left text-lg w-full lg:w-2/4  py-20 ">
        <h1 class="text-3xl font-bold mb-4">Get access</h1>
        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque commodi consequatur culpa cumque debitis deleniti, ducimus ea eius, eos hic impedit inventore ipsa iusto laboriosam libero maxime optio porro praesentium quidem quo ratione recusandae rem sit vel vitae voluptate.</p>
        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque commodi consequatur culpa cumque debitis deleniti, ducimus ea eius, eos hic impedit inventore ipsa iusto laboriosam libero maxime optio porro praesentium quidem quo ratione recusandae rem sit vel vitae voluptate.</p>
        <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque commodi consequatur culpa cumque debitis deleniti, ducimus ea eius, eos hic impedit inventore ipsa iusto laboriosam libero maxime optio porro praesentium quidem quo ratione recusandae rem sit vel vitae voluptate.</p>
      </div>
      <div class="order-first lg:order-1 w-full lg:w-2/4 lg:pl-10 2xl:pl-40">
        <FormKit type="form"
                 submit-label="Registrate"
                 :value="formData"
                 @submit="handleSubmit">
          <FormKit
              label="First name"
              name="firstname"
              type="text"
              validation="required|length:2,20"
              placeholder="First name"
              outerClass="username"
              prefix-icon="avatarMan"
          />
          <FormKit
              label="Last name"
              name="lastname"
              type="text"
              validation="required|length:2,20"
              placeholder="Last name"
              outerClass="username"
              prefix-icon="avatarMan"
          />
          <FormKit
              type="email"
              label="Email address"
              validation="required|email"
              placeholder="keysoft@keysoft.com"
              prefix-icon="email"
          />
          <label for="MazInput-572" class="formkit-label">Phone number</label>
          <MazPhoneNumberInput
              v-model="phoneNumber"
              show-code-on-list
              color="info"
              :onlyCountries="['DE', 'GB', 'FR', 'PL', 'UA']"
              @update="results = $event"
              :success="results?.isValid"
          />
          <client-only>
            <FormKit
                type="select"
                label="Do you want to connect your PMS?"
                name="pms"
                :options="[
                'Yes',
                'No',
                'Maybe',
                'Other',
              ]"
            />
            <FormKit
                type="select"
                label="How did you hear about us?"
                name="contact"
                :options="[
                'Find in internet',
                'Friend give me a link',
                'From blurb',
                'Other',
              ]"
            />
          </client-only>


        </FormKit>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  padding: 60px;
  border-radius: 20px;
  max-width: 460px;
  border: 1px solid rgba(0,0,0, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin:0 auto;
}
.formkit-wrapper{
  max-width:100%;
}
.formkit-suffix-icon:hover {
  color: var(--fk-color-primary);
}
.formkit-label{
  line-height: 1.25rem !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  margin-bottom: 10px !important;
  color: rgb(75 85 99);
}
.formkit-form .formkit-inner {
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
}
.radio-pms .formkit-inner {
  box-shadow: none !important;
}
.formkit-inner input, select.formkit-input{
  background-color: rgb(249 250 251);
}
.formkit-actions, .formkit-actions button{
  width:100% !important;
}
.formkit-actions .formkit-outer{
  margin-bottom:0px;
}
.formkit-outer .formkit-icon.formkit-prefix-icon{
  background: rgb(249 250 251) !important;
  border-right: 1px solid rgba(0,0,0,.1) !important;
  box-shadow: none !important;
}
button.formkit-input{
  font-weight: bold;
}
.formkit-outer, .m-phone-number-input {
  width: 100%;
  margin-bottom:40px !important;
}
.formkit-form .formkit-outer:last-child{
  margin-bottom:0px !important;
}
.m-phone-number-input{
  max-width:400px;
  margin-bottom:15px;
}
.m-input-wrapper {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
  border-radius: var(--fk-border-radius);
  border: 0 !important;
  background-color: rgb(249 250 251) !important;
}
[data-type="radio"] fieldset.formkit-fieldset{
  box-shadow: 0 0 0 1px rgba(0,0,0,.1);
  border: 0 !important;
}
.m-phone-number-input__select .m-input-label{
  display:none !important;
}
.m-input-wrapper:focus-within {
  box-shadow: var(--fk-border-box-shadow-focus);
}
.m-select.m-phone-number-input__select{
  width:7rem;
}
.formkit-form .m-phone-number-input .m-phone-number-input__select .m-select-input.m-phone-number-input__select.m-input-input{
  padding-left: 35px !important;
  padding-top: 0px !important;
}
.maz-flag.maz-flag-gb{
  width: 20px;
  height: 14px;
}
.m-phone-number-input__country-flag{
  bottom: 16px !important;
  left: 9px !important;
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
.username{
  width:calc(50% - 10px) !important;
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