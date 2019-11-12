<template lang="pug">
  .maincontent
    header_auto
    menu_auto
    router-view
</template>

<script>
import header_auto from './components/header-auto.vue';
import menu_auto from './components/menu.vue';

export default {
  name: 'app',
  components: {
    header_auto,
    menu_auto,
  },
  data () {
    return {
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
    padding: 0 30px;

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
  }

  .router-link-exact-active {
    color: #006aed;
    border-bottom: 2px solid #006aed;
  }


  // Обо мне

 
  // Работы


 


  .authorization {
    width: 100%;
    height: 100vh;
    background: url('../images/content/background.png')center center / cover no-repeat;
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
    padding: 60px 80px;
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
  }

  .window__block-content {
    padding-left: 40px;
  }

  .window__block-title {
    opacity: .3;
    padding-bottom: 10px;
  }

  .window__input {
    padding: 10px 0;

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

</style>



