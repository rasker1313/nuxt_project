<template>
  <div class="text-lg">
    <div class="bg-gradient-to-b from-indigo-50 to-white px-8 -mt-4">
      <div class="container mx-auto">
        <HeaderBanner />
      </div>
    </div>
<!--    <div class="mx-auto">-->
<!--      <h2 class="text-center text-3xl font-bold mt-20">Партнери</h2>-->
<!--      <ClientOnly>-->
<!--        <LogoSlider />-->
<!--      </ClientOnly>-->
<!--    </div>-->
    <div class="bg-gray-50">
      <div class="container mx-auto relative reviews px-8 py-20">
        <div class="flex items-center justify-between mb-20 lg:mb-12 flex-wrap lg:flex-nowrap">
          <div class="reviews-title py-10 lg:pr-10 lg:mr-12">
            <h2 class="text-3xl font-bold ">Keysoft Core Features</h2>
            <div>Everything you need for efficient and modern hotel management in one platform.</div>
          </div>
          <div class="">KeySoft provides a comprehensive set of tools that help hotels optimize their operational processes, enhance guest satisfaction, and increase revenue. Harness the advantages of digitization with KeySoft.</div>
        </div>
        <CoreFeatures />
      </div>
    </div>
    <section class="mx-auto mb-16">
      <h2 class="text-center text-3xl font-bold mt-20">Партнери</h2>
      <LogoSlider />
    </section>
    <InfoBlock :direction="'left'" :img="'https://dummyimage.com/720x600'">
      <template v-slot:title>Автоматичний доступ до помешкання</template>
      <template v-slot:description>
        Оптимізуйте процес заселення та виведіть досвід перебування ваших гостей на новий рівень. Наша інноваційна система автоматичного доступу гарантує гостям миттєве та комфортне поселення без потреби в особистому контакті. Мінімізуйте черги при реєстрації, отримуйте позитивні відгуки про ваш готель та надавайте гостям можливість безперебійного та безпечного доступу 24/7.
      </template>
      <template v-slot:button>Переглянути докладно</template>
    </InfoBlock>
    <InfoBlock :direction="'right'" :img="'https://dummyimage.com/720x600'">
      <template v-slot:title>Guest Assistant ®</template>
      <template v-slot:description>
        Забезпечте ваших гостей персональним помічником прямо в їхній кишені. Наш гостьовий асистент дозволить вашим гостям переглядати та керувати своїми бронюваннями в режимі онлайн, здійснювати самостійну реєстрацію, оплачувати рахунки, а також допоможе вирішити найбільш поширені проблеми та питання. Підвищте лояльність гостей та зробіть їхнє перебування комфортнішим і більш автономним завдяки цьому інтуїтивно зрозумілому додатку.
      </template>
      <template v-slot:button>Переглянути докладно</template>
    </InfoBlock>
    <InfoBlock :direction="'left'" :img="'https://dummyimage.com/720x600'" :payments="true">
      <template v-slot:title>Інтегрована платіжна система</template>
      <template v-slot:description>
        Сучасний підхід до готельного бізнесу починається з ефективних рішень. Наша платіжна система не тільки надає гостям можливість здійснювати оплату через різні канали, але й може автоматично надавати їм доступ до номера одразу після успішної транзакції. Менше очікування, більше комфорту — це те, на що ваші гості заслуговують.
      </template>
      <template v-slot:button>Дізнатися більше</template>
    </InfoBlock>
    <InfoBlock :direction="'right'" :img="'https://dummyimage.com/720x600'">
      <template v-slot:title>Система нотифікацій</template>
      <template v-slot:description>
        Підтримуйте постійний зв'язок з вашими гостями завдяки нашій інтегрованій системі нотифікацій. Автоматичні повідомлення, що надходять через електронну пошту, WhatsApp або SMS, інформують гостей про основні деталі їх бронювання та надають код доступу до номеру. Не дозволяйте вашим гостям загубитися в інформації — допоможіть їм відчути комфорт і впевненість, що ви завжди на зв'язку.
      </template>
      <template v-slot:button>Переглянути докладно</template>
    </InfoBlock>
    <div class="bg-gradient-to-t from-indigo-50 to-white">
      <div class="container mx-auto relative reviews px-8">
        <div class="flex items-center justify-between flex-wrap lg:flex-nowrap">
          <h2 class="reviews-title text-3xl font-bold py-10 pr-32 mr-32">Що кажуть наші клієнти?</h2>
          <div class="mb-10">Познайомтеся з історіями наших клієнтів, які вже отримали значущі переваги, інтегруючи KeySoft у свій готельний бізнес.</div>
        </div>
        <ReviewsSlider />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBanner from '~/components/HeroSection.vue'
import InfoBlock from "~/components/InfoBlock.vue";
import CoreFeatures from "~/components/CoreFeatures.vue";
export default {
  components: { HeaderBanner, InfoBlock, CoreFeatures }
}
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}

.reviews-title{
  box-shadow: inset 0 -1px 0 rgba(0,0,0,0.2);
  margin-bottom: 30px !important;
}

@media (min-width: 1024px) {
  .reviews-title{
    box-shadow: inset -1px 0 0 rgba(0,0,0,0.2);
    margin-bottom: 0 !important;
  }
}



</style>