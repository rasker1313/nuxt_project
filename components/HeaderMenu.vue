<!-- Недороблений компонент який повинен був виймати останній елемент меню та створювати додаткове меню у випадаючому списку
  Але на моменті повернення елементів після їх зникнення робота зайшла у тупік -->
<template>
  <div class="overflow-x-hidden ">
    <div  class="relative sm:flex justify-between items-center hidden mr-4">
      <nav ref="mainMenu" class="overflow-x-hidden sm:flex justify-start pr-2" >
        <div v-for="item in menu" class="px-2 pt-2 pb-4 sm:p-0 text-lg">
          <a class="menu-link header-link hover-link" :href="item.link">{{ item.title }}</a>
        </div>
      </nav>
      <Icon v-if="dopMenu.length > 0" class="dop-menu-arrow text-3xl absolute right-0 -mr-3" name="ic:baseline-keyboard-arrow-down"
            @mouseover="showDopMenu = true" @mouseleave="showDopMenu = false"/>
    </div>
    <div ref="dopMenu" v-if="dopMenu.length > 0" :class="`${ showDopMenu ? 'visible' : 'invisible' }`" class="absolute bg-white rounded -mt-1 right-0">
      <div v-for="(item, key) in dopMenu" :key="key" class="dop-menu text-lg"
           @mouseover="showDopMenu = true" @mouseleave="showDopMenu = false">
        <a class="header-link hover-link py-2" :href="item.link">{{ item.title }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDopMenu: false,
      menu: [
        {
          title: 'Функції',
          link: '#1',
          width: 0
        },
        {
          title: 'Рішення',
          link: '#2',
          width: 0
        },
        {
          title: 'Ціни',
          link: '#3',
          width: 0
        },
        {
          title: 'Блог',
          link: '#4',
          width: 0
        }
      ],
      dopMenu: [],
    }
  },
  methods:{
    menuWidth(){
      return this.$refs.mainMenu.offsetWidth;
    },
    menuElements(menu) {
      if (menu === 'main') return this.$refs.mainMenu.children;
      else if (menu === 'dop') return this.$refs.dopMenu.children;
    },
    menuElementsWidth(menu) {
      if (menu === 'main') {
        let totalWidth = -1;
        for (const element of this.menuElements('main')) {
          totalWidth += element.offsetWidth;
        }
        return totalWidth;
      }
      if (menu === 'dop') {
        let totalWidth = 0;
        if (this.dopMenu.length > 0) {
          for (const element of this.menuElements('dop')) {
            totalWidth += element.offsetWidth;
          }
        }
        return totalWidth;
      }
      return 0;
    },
    moveLastItemToDopMenu() {
      const lastItem = this.menu.pop();
      this.dopMenu.unshift(lastItem);
    },
    moveFirstItemToMainMenu() {
      const firstItem = this.dopMenu.shift();
      this.menu.push(firstItem);
    },
    async checkMenuWidth(){
      console.log(this.menu)
      if (this.menuElementsWidth('main') > this.menuWidth()) {
        console.log('moveToDopMenu')
        this.moveLastItemToDopMenu();
        //await this.checkMenuWidth(); - this is not working
      } /*else if (this.menuWidth() > (this.menuElementsWidth('main') + this.menuElementsWidth('dop'))) {
          console.log('moveToMainMenu')
          this.moveFirstItemToMainMenu();
          //this.menu.push(this.dopMenu.shift());
      }*/

    }
  },
  async mounted() {
    for (const item of this.menu) {
      const element = this.$refs.mainMenu.querySelector(`.menu-link[href="${item.link}"]`);
      if (element) {
        item.width = element.offsetWidth;
      }
    }
    window.addEventListener('resize', this.checkMenuWidth);
    await this.checkMenuWidth();
  }
}
</script>

<style scoped>
.dop-menu{
  min-width: 140px;
}
.dop-menu:hover{
  display: block;
}
</style>