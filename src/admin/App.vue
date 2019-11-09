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
    width: 21px;
    height: 21px;
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

  .works{
    background-color: #f7f9fe;
  }

  .works__content {
    background-color: #ffffff;
    width: 100%;
    padding: 3%;
    margin-bottom: 40px;

    @include phones {
      padding: 4% 6%;
    }
  }

  .works__info {
    display: flex;
    
    @include tablets {
      flex-direction: column;
      align-items: center;
    }
  }

  .works__info-title {
    padding-bottom: 3%;
    margin-bottom: 40px;
    border-bottom: 1px solid black;
    font-size: 18px;
    font-weight: 700;
  }

  .works__left {
    width: 50%;
    height: 276px;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    padding: 7% 13% 5%;
    text-align: center;
    margin-right: 25px;

    @include tablets {
      margin-right: 0;
      margin-bottom: 40px;
      width: 70%;
    }

    @include phones {
      width: 100%;
    }
  }

  .works__left-content {
    margin-bottom: 15px;
    line-height: 33.89px;
  }

  .works__button, .reviews__button, .window__button {
    width: 181px;
    height: 50px;
    border-radius: 25px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 700;
  }

  .works__right {
    display: flex;
    flex-direction: column;
    width: 50%;

    @include tablets {
      width: 70%;
    }

    @include phones {
      width: 100%;
    }
  }

  .works__right-btn, .reviews__desk-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .works__right-btn {
    @include tablets {
      justify-content: center;
    }
  }

  .works__right-link, .reviews__desk-link {
    margin-right: 40px;
    color: #383bcf;
  }

  .works__block {
    border-bottom: 1px solid black;
    margin-bottom: 25px;

    &--textarea {
      border-bottom: none;
      width: 100%;
      margin-bottom: 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .works__block-title {
    opacity: .5;

    &--textarea {
      margin-bottom: 10px;
    } 
  }

  .works__input {
    padding: 14px 0;
    font-size: 18px;

    &--textarea {
      width: 100%;
      height: 150px;
      resize: none;
      padding: 10px; 
    }
  }

  .works__right-tags {
    margin-bottom: 40px;
  }

  .tags {
    display: flex;
  }

  .tags__item {
    display: flex;
    align-items: center;
    margin-right: 20px;
    padding: 1% 3%;
    background-color: #f4f4f4;
    border-radius: 15px;
    opacity: 0.7;
  }

  .tags-icon__close {
    height: 11px;
    margin-left: 5px;
  }

  .tags-icon__close:before,
  .tags-icon__close:after {
    content: "";
    position: absolute;
    top: 40%;
    width: 12px;
    height: 2px;
    background-color: #414c63;
  }

  .works__items,.reviews__items {
    @include phones {
      display: flex;
      flex-direction: column;
    }
  }

  .works__item {
    margin-bottom: 40px;
  }

  .works__add, .reviews__add {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 340px;
    height: 556px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    margin-right: 40px;

    @include phones {
      margin-right: 0;
      margin-bottom: 20px;
      height: 111px;
      width: 100%;
      flex-direction: row;
      justify-content: flex-start;
      padding: 0 5%;
    }
  }

  .reviews__add {
    width: 340px;
    height: 380px;

    @include phones {
      height: 111px;
      width: 100%;
    }
  }

  .works__add-btn, .reviews__add-btn {
    width: 150px;
    height: 150px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    position: relative;
    margin-bottom: 20px;

     &:before {
      content: "";
      position: absolute;
      background-color: #ffffff;
      width: 30px;
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
      height: 30px;
      top: 50%;
      left: 50%;
      transform:translate(-50%, -50%);
    }

    @include phones {
      width: 50px;
      height: 50px;
      margin-bottom: 0;
      margin-right: 20px;

      &:before {
      width: 20px;
      height: 2px;
      top: 50%;
      left: 50%;
      transform:translate(-50%, -50%);
      }

      &:after {
      width: 2px;
      height: 20px;
      top: 50%;
      left: 50%;
      transform:translate(-50%, -50%);
      }
    }
  }

  .works__add-desk, .reviews__add-desk {
    color: #ffffff;
  }

  .works__items, .reviews__items {
    display: flex;
  }

  .works__item {
    width: 340px;
    height: 556px;
    background-color: #ffffff;

    @include phones {
      width: 100%;
    }
  }

  .preview {
    background: url("../images/content/slider/slider_1.jpg")center center / cover no-repeat;
    width: 100%;
    height: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 2%;
  }

  .preview__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1% 4%;
    border-radius: 15px;
    background-color: #ffffff;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  .desk {
    padding: 40px 20px;
    display: flex;
    height: 70%;
    flex-direction: column;
    justify-content: space-between;

    @include phones {
      padding: 40px;
    }
  }

  .desk__work, .desk__info {
    margin-bottom: 30px;
  }

  .desk__work {
    font-size: 18px;
    font-weight: 700;
  }

  .desk__link {
    color: #383bcf;
  }

  .desk__btn, .reviews__btn {
    display: flex;
    justify-content: space-between;
  }

  .desk__edit,.desk__del, .reviews__edit, .reviews__del  {
    width: 105px;
  }

  .desk__edit, .reviews__edit {
    position: relative;

    &:after {
      content: "";
      top: 4px;
      right: 10px;
      position: absolute;
      background: svg-load('pencil.svg', fill=#383bcf, width=100%, height=100%);
      width: 17px;
      height: 17px;
    }
  }

  .desk__del, .reviews__del {
     position: relative;
  }

  .desk-icon__close, .reviews-icon__close {
    position: absolute;
    top: 4px;
    right: 10px;
    width: 15px;
    height: 15px;
  }

  .desk-icon__close:before,
  .desk-icon__close:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 18px;
    height: 3px;
    background-color: #bf2929;
  }
  
  .reviews-icon__close:before,
  .reviews-icon__close:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 18px;
    height: 3px;
    background-color: #bf2929;
  }

 

  .reviews {
    padding-bottom: 40px;
    background-color: #f7f9fe;
  }

  .reviews__content {
    background-color: #ffffff;
    padding: 3%;
    margin-bottom: 40px;

    @include phones {
      padding: 5%;
    }
  }

  .reviews__title {
    padding-bottom: 3%;
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 40px;
    border-bottom: 1px solid black;
  }

  .reviews__info {
    display: flex;

    @include phones {
      flex-direction: column;
      align-items: center;
    }
  }

  .reviews__desk {
    width: 60%;
    display: flex;
    flex-direction: column;

    @include phones {
      width: 100%;
    }
  }

  .user {
    text-align: center;
    margin-right: 40px;

    @include phones {
      margin-right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
  }

  .user__img {
    width: 200px;
    height: 200px;
    background-color: #dee4ed;
    border-radius: 50%;
    position: relative;
    margin-bottom: 40px;
    

    &:before {
      position: absolute;
      content: "";
      background: svg-load('user.svg', fill=#ffffff, width=100%, height=100%);
      background-repeat: no-repeat;
      background-position:center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 85px;
      height: 113px;
    }
  }

  .user__link {
    color: #383bcf;
  }

  .reviews__desk-title--textarea {
    margin-bottom: 20px;
  }

  .reviews__desk-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    @include tablets {
      flex-direction: column;
    }
  }

  .reviews__desk-content {
    border-bottom: 1px solid black;
    width: 48%;
    margin-bottom: 20px;

    @include tablets {
      width: 80%;
    }

    @include phones {
      width: 100%;
    }

    &--textarea {
      width: 100%;
      border-bottom: none;
    }
  }

  .reviews__desk-title {
    opacity: .5;
  }

  .reviews__input {
    padding: 20px 0;

    &--textarea {
      width: 100%;
      height: 100px;
      resize: none;
      padding: 10px; 
    }
  }

  .reviews__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 340px;
    height: 380px;
    background-color: #ffffff;
    padding: 30px;

    @include phones {
      width: 100%;
    }
  }

  .reviews__user {
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    margin-bottom: 40px;
  }

  .reviews__user-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .reviews__user-name {
    font-size: 18px;
    font-weight: 700;
  }

  .reviews__user-pos {
    opacity: 0.5; 
  }

  .reviews__text {
    opacity: 0.7;
    flex: 1;
  }

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



