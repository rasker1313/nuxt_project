<template>
  <div class="text-lg">
    <div class="bg-gradient-to-b from-indigo-50 to-white px-8 -mt-4">
      <div class="mx-auto">
        <HeaderBanner />
      </div>
    </div>
    <div class="mx-auto">
      <h2 class="text-center text-3xl font-bold mt-20">Партнери</h2>
      <ClientOnly>
        <LogoSlider />
      </ClientOnly>
    </div>
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
    <div class="reviews px-8">
      <div class="flex items-center justify-between">
        <h2 class="reviews-title text-3xl font-bold py-10 pr-32 mr-32">Що кажуть наші клієнти?</h2>
        <div class="mb-10">Познайомтеся з історіями наших клієнтів, які вже отримали значущі переваги, інтегруючи KeySoft у свій готельний бізнес.</div>
      </div>
      <ClientOnly>
        <ReviewsSlider />
      </ClientOnly>
    </div>
  </div>
</template>

<script>
import HeaderBanner from '@/components/HeaderBanner.vue'
import InfoBlock from "~/components/InfoBlock.vue";
export default {
  components: { HeaderBanner, InfoBlock }
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
  box-shadow: inset -1px 0 0 rgba(0,0,0,0.3);
  margin-bottom: 0 !important;
}

</style>