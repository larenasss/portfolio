<template lang="pug">
  .maincontent
    header_auto(v-if="notShow")
    menu_auto(v-if="notShow")
    router-view(v-if="noLogin")
</template>

<script>
import header_auto from './components/header-auto.vue';
import menu_auto from './components/menu.vue';
import store from "./store"
export default {
  name: 'app',
  components: {
    header_auto,
    menu_auto,
  },
  data() {
    return {
      notShow: false,
      noLogin: false
    }
  },
  mounted() {
    let isUserLoginMain = store.getters["user/userIsLogged"];

    if(isUserLoginMain === false) {
      this.noLogin = true
    }
  },
  updated() {
    let isUserLoginMain = store.getters["user/userIsLogged"];
    
    if(isUserLoginMain === true) {
      this.notShow = true
    }
  }
}
</script>


<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

  // Общие стили

  section {
    width: 100%;
    color: #414c63;
    font-weight: 600;
  }

  .container {
    flex-direction: column;
    max-width: 1080px;

    @include tablets {
      max-width: 707px;
    }

    @include phones {
      width: 80%;
    }

    @include phonesX {
      width: 90%;
    }
  }

  // Иконки

  .icon-add {
    position: relative;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

    &:before {
      content: "";
      position: absolute;
      background-color: #ffffff;
      width: 10px;
      height: 2px;
      top: 50%;
      left: 50%;
      transform:translate(-50%, -50%);
    }

    &:after {
      content: "";
      position: absolute;
      background-color: #ffffff;
      width: 2px;
      height: 10px;
      top: 50%;
      left: 50%;
      transform:translate(-50%, -50%);
    }
  }

  .icon__okey {
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 18px;
    cursor: pointer;

      &::before {
      content: "";
      left: 2px;
      top: 3px;
      position: absolute;
      width: 12px;
      height: 6px;
      border-radius: 1px;
      border-left: 4px solid #00d70a;
      border-bottom: 4px solid #00d70a;
      transform: rotate(-45deg);
   }
  }

  .icon__close {
    position: relative;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .icon__close:before,
  .icon__close:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 16px;
    height: 3px;
    background-color: #bf2929;
  }

  .icon__close:before {
   transform: rotate(45deg);
  }

  .icon__close:after {
   transform: rotate(-45deg);
  }

  // Хедер

  .header__container {
    flex-direction: row;
    align-items: center;
  }
  
  .header {
    height: 85px;
    background-color: #3e3e59;
  }

  .header__user {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .header__user-pic {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .header__user-name {
    font-size: 18px;
  }

  .header__desc {
    font-size: 14px;
    opacity: 0.5;

    @include phones {
      display: none;
    }
  }

  .header__out {
    flex: 1;
    text-align: right;
    opacity: .5;
  }

  .header__out-link {
    text-decoration: underline;
  }

  // Меню

  .nav {
    display: flex;
    color: #414c63;
    height: 77px;
  }

  .nav__list {
    display: flex;

    @include phones {
      justify-content: center;
    }
  }

  .nav__item {
    font-size: 18px;
    white-space: nowrap;

    @include phones {
      justify-content: center;
    }
  }

  .nav__link {
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 5px 30px;
    border-bottom: 2px solid transparent;

    &:before {
      content:attr(data-text);
    }
  
    @include phones {
      padding: 5px 20px;
    }
  }

  .router-link-exact-active {
    color: #006aed;
    border-bottom: 2px solid #006aed;
  }


  // Форма

  .form {
    width: 60%;

    @include tablets {
      width: 70%;
    }
    @include phones {
      width: 100%;
    }
  }

  .form__title {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 3%;
    box-shadow: 0 4px 2px -2px gray;
  }

  .form__content {
    display: flex;
    margin-top: 4%;

    @include phones {
      width: 100%;
    }
  }

  .form__content-works {

    @include tablets {
      flex-direction: column;
    align-items: center;
    }
    
  }

  .form__row {
    display: flex;
  }

  .form__block-title {
    opacity: .5;

    &--textarea {
      margin-bottom: 20px;
    }
  }

  .form__block {
    border-bottom: 1px solid black;
    width: 100%;
    margin-bottom: 20px;
    margin-right: 20px;
    position: relative;

    &:last-child {
      margin-right: 0;
    }

    @include phones {
      width: 100%;
    }

    &--textarea {
      border-bottom: none;
    }
  }



  .form__input {
    padding: 20px 2px;
    font-weight: 700;
    width: 100%;

    &--textarea {
      width: 100%;
      height: 100px;
      resize: none;
      padding: 10px; 
    }
  }

  .form__row-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @include phones {
      justify-content: center;
    }
  }

  .form__row-link {
    margin-right: 40px;
    color: #383bcf;
  }

  .form__row-button, .window__button {
    width: 181px;
    height: 50px;
    border-radius: 25px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 700;
  }

  .input__error {
    position: absolute;
    text-align: center;
    font-size: 12px;
    width: 100%;
    bottom: -18px;
    left: 0;
    color: firebrick; 
  }

  .authorization {
    width: 100%;
    height: 100vh;
    background: url('../images/content/background-auto.jpg')center center / cover no-repeat;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .authorization__bg {
    background-color: #2d3c4e;
    opacity: .8;
    height: 100%;
  }

  .window {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 463px;
    height: 417px;
    background-color: #ffffff;
    padding: 50px 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include phones {
      width: 100%;
      height: 100%;
      justify-content: center;
    }

    @include phonesX {
      padding: 60px;
    }
  }

  .window__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;

    @include phones {
      height: 450px;
    }
  }

  .window__title {
    font-size: 36px;
    text-align: center;
  }

  .window__btn {
    text-align: center;
  }

  .window__block {
    border-bottom: 1px solid black;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      background: svg-load('user.svg', fill=#414c63, width=100%, height=100%);
      background-repeat: no-repeat;
      opacity: .3;
      width: 26px;
      height: 30px;
    }

    &--password {
      &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      background: svg-load('key.svg', fill=#414c63, width=100%, height=100%);
      background-repeat: no-repeat;
      opacity: .3;
      width: 26px;
      height: 30px;
    }
    }
  }

  .window__block-content {
    padding-left: 40px;
    padding-bottom: 2px;
  }

  .window__block-title {
    opacity: .3;
  }

  .window__input {
    padding: 10px 0;

     &.error {
      border-bottom: 1px solid red;
    }

    &::placeholder {
      color: #414c63;
      font-weight: 700;
    }
  }

  .window__close {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 20px;
    height: 20px;
  }

  .window__close:before,
  .window__close:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 3px;
    background-color: #414c63;
  }

  .modal__error {
    background-color: #2d3c4e;
    opacity: .8;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0
  }

  .modal__window {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: 391px;
    height: 75px;
    background-color: #b13333;
    color: #ffffff;
    font-size: 20px;
    font-weight: 800;
    text-align: center;
    padding: 10px 20px;
  }

  .modal__close {
    top: 10px;
    right: 20px;
    position: absolute;

  }

  .modal__close:before,
  .modal__close:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 3px;
    background-color: #ffffff;
  }

</style>



