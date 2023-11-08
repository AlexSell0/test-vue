<script>

export default {
  name: 'GuestHeaderComponent',

  components: {},

  data() {
    return {
      isActiveMenu: false,
      isActiveBurger: false,
      showModalLogin: false,
      showModalRegistration: false
    }
  },

  mounted() {

    if (this.$route.path === '/') {
      this.isActiveMenu = 'home'
    } else if (this.$route.path === '/rooms') {
      this.isActiveMenu = 'rooms'
    } else if (this.$route.path === '/experts') {
      this.isActiveMenu = 'experts'
    }
  },

  methods: {
    toogleMobileMenu() {
      this.showModalLogin = this.showModalLogin ? false : true;
    },

    toogleModalLogin() {
      this.showModalLogin = this.showModalLogin ? false : true;
    },

    closeModalLogin() {
      this.showModalLogin = false
    },

    closeModalRegistration(){
      this.showModalRegistration = false
    },

    showRegistrationModal() {
      this.showModalLogin = false
      this.showModalRegistration = true
    }
  }
}
</script>

<template>
  <Head title="Welcome"/>
  <header class="header">
    <div class="container header-container">
      <a class="header-logo" href="/">
        <img width="118" height="32" src="/assets/img/logo.svg" alt="logo">
      </a>

      <nav class="header-nav">
        <button class="header-nav__burger" @click.prevent="toogleMobileMenu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 5C1 4.44771 1.44772 4 2 4H22C22.5523 4 23 4.44771 23 5C23 5.55229 22.5523 6 22 6H2C1.44772 6 1 5.55229 1 5Z"
                fill="#323642"/>
            <path
                d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z"
                fill="#323642"/>
            <path
                d="M2 18C1.44772 18 1 18.4477 1 19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18H2Z"
                fill="#323642"/>
          </svg>
        </button>
        <div class="header-nav__container" :class="{active:isActiveBurger === true}">
          <ul class="header-nav__list">
            <li class="header-nav__item">
              <router-link :to="{ name: 'home' }" :class="{active:isActiveMenu === 'home'}">Главная</router-link>
            </li>
            <li class="header-nav__item">
              <router-link :to="{ name: 'rooms'}" :class="{active:isActiveMenu === 'rooms'}">Страницы</router-link>
            </li>
            <li class="header-nav__item">
              <router-link :to="{ name: 'experts.index'}" :class="{active:isActiveMenu === 'experts'}">Записи
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <button class="btn header__btn-question" v-if="isActiveMenu === 'rooms'" @click.prevent="toogleModalLogin">Подробнее</button>

      <template v-if="showModalRegistration === true">
        <RegistrationModalComponent @closeModal="closeModalRegistration"></RegistrationModalComponent>
      </template>

      <template v-if="showModalLogin === true">
        <LoginModalComponent @closeModal="closeModalLogin"
                             @registrationModal="showRegistrationModal"></LoginModalComponent>
      </template>
    </div>
  </header>
</template>

<style scoped>


</style>
