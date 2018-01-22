<style lang="stylus">
  @require '../stylus/mixins/header';

  .fk-header
    header-mixin()

</style>

<template>
  <header class="fk-header">
    <div class="fk-header__container">
      <!-- logo -->
      <h1 class="fk-header__logo">
        <a :href="logoUrl"><img src="../assets/logo.svg" /></a>
      </h1>
      <!-- burger menu icon -->
      <span class="fk-header__toggle" @click="toggleNav">
        <Icon icon="hamburger-menu" />
      </span>
      <!-- navigation -->
      <nav class="fk-header__nav" :class="{ 'fk-header__nav--on': toggleOn }">
        <ul>
          <!-- main links -->
          <li v-for="item in navMainItems">
            <a :href="item.url">{{ item.label }}</a>
          </li>
          <!-- links visible only on mobile -->
          <li v-for="item in navExtraItems">
            <a :href="item.url">{{ item.label }}</a>
          </li>
        </ul> 
      </nav>
      <!-- login form -->
      <div class="fk-header__form">
         <div class="fk-header__form__field">
            <Input v-model="email" name="email" type="email" size="small" :placeholder="formItems.emailPlaceholder"></Input>
            <a :href="formItems.registerUrl">{{ formItems.registerLabel }}</a>
          </div>
           <div class="fk-header__form__field">
              <Input v-model="password" name="password" type="password" size="small" :placeholder="formItems.passwordPlaceholder"></Input>
              <a :href="formItems.retriveUrl">{{ formItems.retriveLabel }}</a>
          </div>
      </div>
      <!-- login button -->
      <Button link color="primary" size="small" class="fk-header__btn-login" @click="login">
        {{ navExtraItems[0].label }}
      </Button>
      <!-- shop button -->
      <Button link color="secondary" size="small" class="fk-header__btn-shop" :href="navExtraItems[1].url">
        {{ navExtraItems[1].label }}
      </Button>
      <!-- cart button -->
      <Button link color="secondary" size="small" class="fk-header__btn-cart" :href="navExtraItems[2].url">
        <Icon icon="basket" />
        <span v-if="cartCounter > 0" class="fk-header__btn-cart__counter">{{ cartCounter }}</span>
      </Button>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      logoUrl: {
        type: String,
        default: '/'
      },
      navMainItems: {
        type: Array,
        default: () => []
      },
      navExtraItems: {
        type: Array,
        default: () => []
      },
      cartCounter: {
        type: Number,
        default: 0
      },
      formItems: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        toggleOn: false,
        email: '',
        password: ''
      }
    },
    methods: {
      toggleNav() {
        this.toggleOn = !this.toggleOn
      },
      login() {
        this.$emit('login', this.email, this.password)
      }
    },
  }
</script>