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
    align-items: center;
    display: flex;
    color: #414c63;
    height: 77px;

    @include phones {
      justify-content: center;
    }
  }

  .nav__list {
    display: flex;
    padding: 0 30px;
  }

  .nav__item {
    margin-right: 50px;
    font-size: 18px;
    white-space: nowrap;

    &:last-child {
      margin-right: 0;
    }

    @include phones {
      
    }
  }

  .nav__link {
    text-decoration: none;
  }

  // Обо мне

  .aboutme {
    background-color: #f7f9fe;
    padding-bottom: 40px;
  }

  .aboutme__info {
    padding: 50px 0;
    display: flex;

    @include phones {
      flex-direction: column;
    }
  }

  .aboutme__info-title {
    margin-right: 65px;
    font-size: 21px;
    font-weight: 700;

    @include phones {
      margin-bottom: 20px;
    }
  }

  .aboutme__btn {
    display: flex;
    align-items: center;
  }

  .aboutme__btn-link {
    color: #383bcf;
    font-weight: 700;
  }

  .aboutme__icon-add {
    margin-right: 12px;
  }

  .aboutme__list {
    display: flex;
    justify-content: space-between;

    @include phones {
      flex-direction: column;
    }
  }

  .aboutme__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 20px 20px 20px;
    max-width: 525px;
    width: 48%;
    height: 387px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    @include phones {
      flex-direction: column;
      margin-right: 0;
      margin-bottom: 20px;
      width: 100%;
    }
  }

  .aboutme__item-edit {
    background: svg-load('pencil.svg', fill=#414c63, width=100%, height=100%);
    background-repeat: no-repeat;
    width: 16px;
    height: 15px;
    opacity: 0.5;
  }

  .aboutme__desk{
    position: relative;
    height: 18%;
    width: 100%;
    border-bottom: 1px solid #bbbfc7;
  }

  .aboutme__item-btn {
    position: absolute;
    right: 1%;
    display: flex;
    top: 30%;
    transform: translate(0,-40%);
  }

  .aboutme__block-interest {
    margin-right: 20px;
    width: 75px;
  }

  .aboutme__block-skill {
    margin-right: 10px;
    font-size: 16px;
    width: 50%;
    max-width: 210px;
  }

  .aboutme__input {
    padding: 12px 8px 12px 12px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #000000;

    &::placeholder {
      opacity: 0.5;
    }

    &--noborder{
      @include tablets {
        border-bottom: transparent;
      }
    }
  }

  .aboutme__item-bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }

  .aboutme__input-interest {
    width: 100%;
  }

  .aboutme__input-skill {
    width: 100%;
  }

  .aboutme__item-icon {
    width: 40px;
    height: 40px;
    
    &:before {
      width: 18px;
      height: 3px;
    }

    &:after {
      width: 3px;
      height: 18px;
    }
  }

  .aboutme__skills-item {
    position: relative;
    display: flex;
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }

    &::after {
      content: "";
      opacity: .5;
      position: absolute;
      top: 3px;
      right: 40px;
      background: svg-load('pencil.svg', fill=#414c63, width=100%, height=100%);
      background-repeat: no-repeat;
      width: 16px;
      height: 15px;
    }

    &::before {
      content: "";
      opacity: .5;
      position: absolute;
      top: 3px;
      right: 10px;
      background: svg-load('trash.svg', fill=#414c63, width=100%, height=100%);
      background-repeat: no-repeat;
      width: 13px;
      height: 15px;
    }
  }

  .aboutme__skills-value {
    position: absolute;
    right: 100px;
  }

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
    position: relative;
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
<template lang="pug">
  .maincontent
    header.header
      .container.header__container
        .header__user
          img(src="../images/content/user.jpg").header__user-pic
          .header__user-name Бутрий Алексей
        .header__desc Панель администрирования
        .header__out
          a.header__out-link Выйти
    .menu
      .container
        nav.nav
          - var menu = ['Обо мне', 'Работы', 'Отзывы']
            ul.nav__list
              each item in menu
                li.nav__item
                  a(href="#").nav__link #{item}
    section.aboutme
      .container
        .aboutme__content
          .aboutme__info
            .aboutme__info-title Блок "Обо мне"
            .aboutme__btn
              button.icon-add.aboutme__icon-add
              a.aboutme__btn-link Добавить группу
          .aboutme__elements
            ul.aboutme__list
              li.aboutme__item
                .aboutme__desk
                  label.aboutme__block(for="")
                    input.aboutme__input.aboutme__input--noborder(type="text", name="name", placeholder="Название")
                  .aboutme__item-btn
                    .aboutme__item-okey.icon__okey
                    .aboutme__item-close.icon__close
                .aboutme__item-bottom
                  label.aboutme__block.aboutme__block-skill(for="")
                    input.aboutme__input.aboutme__input-skill(type="text", name="name", placeholder="Новый навык")
                  label.aboutme__block.aboutme__block-interest(for="")
                    input.aboutme__input.aboutme__input-interest(type="text", name="name", placeholder="100 %")
                  button.aboutme__item-icon.icon-add
              li.aboutme__item
                .aboutme__desk
                  label.aboutme__block(for="")
                    input.aboutme__input.aboutme__input--noborder(type="text", name="name", placeholder="Название")
                  .aboutme__item-btn
                    .aboutme__item-edit
                ul.aboutme__skills
                  -
                    var items = [
                      ['Git', '100  %'],
                      ['Terminal', '90  %'],
                      ['Gulp', '80  %'],
                      ['Webpack', '70  %'],
                    ]
                  each item in items
                    li.aboutme__skills-item
                      .aboutme__skills-key #{item[0]}
                      .aboutme__skills-value #{item[1]}
                .aboutme__item-bottom
                  label.aboutme__block.aboutme__block-skill(for="")
                    input.aboutme__input.aboutme__input-skill(type="text", name="name", placeholder="Новый навык")
                  label.aboutme__block.aboutme__block-interest(for="")
                    input.aboutme__input.aboutme__input-interest(type="text", name="name", placeholder="100 %")
                  button.aboutme__item-icon.icon-add
    section.works
      .container
        .works__content
          .works__info-title Редактирование работы
          .works__info
            .works__left
              .works__left-content Перетащите или загрузите для загрузки изображения
              button.works__button Загрузить
            .works__right
              .works__block
                .works__block-title Название
                label.works__label(for="")
                  input.works__input(type="text", name="name", placeholder="Новый навык")
              .works__block
                .works__block-title Ссылка
                label.works__label(for="")
                  input.works__input(type="text", name="name", placeholder="Новый навык")
              .works__block.works__block--textarea
                .works__block-title.works__block-title--textarea Описание
                label.works__label(for="")
                  textarea.works__input.works__input--textarea(type="text", name="name", placeholder="Новый навык")
              .works__block
                .works__block-title Добавление тэга
                label.works__label(for="")
                  input.works__input(type="text", name="name", placeholder="Новый навык")
              .works__right-tags
                - var tags = ['HTML5', 'CSS3', 'JS']
                  ul.tags
                    each item in tags
                      li.tags__item #{item}
                        .tags-icon__close.icon__close
              .works__right-btn
                a.works__right-link Отмена
                button.works__button Сохранить
        .works__items
          .works__add
            .works__add-btn
            .works__add-desk Добавить работу
          .works__item
            ul.preview
              li.preview__item HTML5
              li.preview__item CSS3
              li.preview__item Javascript
            .desk
              .desk__content
                .desk__work Новая работа
                .desk__info Описание работы
                a.desk__link http://google.com
              .desk__btn
                .desk__edit Править
                .desk__del Удалить
                  .desk-icon__close.icon__close
    section.reviews 
      .container
        .reviews__content
          .reviews__title Новый отзыв
          .reviews__info
            .user
              .user__img
              a.user__link Добавить фото
            .reviews__desk
              .reviews__desk-info
                .reviews__desk-content
                  .reviews__desk-title Имя автора
                  label.reviews__block(for="")
                    input.reviews__input(type="text", name="name", placeholder="Новый навык")
                .reviews__desk-content
                  .reviews__desk-title Должность автора
                  label.reviews__block(for="")
                    input.reviews__input(type="text", name="name", placeholder="Новый навык")
              .reviews__desk-content.reviews__desk-content--textarea
                .reviews__desk-title.reviews__desk-title--textarea Отзыв
                label.reviews__block(for="")
                  textarea.reviews__input.reviews__input--textarea(name="message", placeholder="Сообщение к письму")
              .reviews__desk-btn
                a.reviews__desk-link Отмена
                button.reviews__button Сохранить
        .reviews__items
          .reviews__add
            .reviews__add-btn
            .reviews__add-desk Добавить отзыв
          .reviews__item
            .reviews__user
              img(src="../images/content/user.jpg").reviews__user-pic
              .reviews__user-desk
                .reviews__user-name Владимир Сабанцев
                .reviews__user-pos Основатель Лофтскул
            .reviews__text
              p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .reviews__btn
              .reviews__edit Править
              .reviews__del Удалить
                .reviews-icon__close.icon__close
    section.authorization
      .authorization__bg
      .window
        .window__content
          .window__title Авторизация
          label.window__block(for="")
            .window__block-content
              .window__block-title Логин
              input.window__input(type="text", name="name", placeholder="Terminator")
          label.window__block(for="")
            .window__block-content
              .window__block-title Пароль
              input.window__input(type="text", name="name", placeholder="••••••••••")
          .window__btn
            button.window__button Сохранить
          .window__close.icon__close
            

                    
                
                
              
          






</template>
