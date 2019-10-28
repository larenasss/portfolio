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
    max-width: 1096px;
  }

  // Иконки

  .icon-add {
    position: relative;
    border-radius: 50%;
    width: 20px;
    height: 20px;
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
    width: 15px;
    height: 12px;
    margin-right: 12px;
    cursor: pointer;

      &::before {
      content: "";
      left: 2px;
      top: 3px;
      position: absolute;
      width: 8px;
      height: 4px;
      border-radius: 1px;
      border-left: 3px solid #00d70a;
      border-bottom: 3px solid #00d70a;
      transform: rotate(-45deg);
   }
  }

  .icon__close {
    position: relative;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  .icon__close:before,
  .icon__close:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 14px;
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
    height: 80px;
    background-color: #3e3e59;
    padding: 5px 0;
  }

  .header__user {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  .header__user-pic {
    width: 44px;
    height: 45px;
    border-radius: 50%;
    margin-right: 20px;
  }

  .header__user-name {
    font-size: 18px;
  }

  .header__desc {
    font-size: 14px;
    opacity: 0.5;
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
  }

  .nav__list {
    display: flex;
    padding: 0 25px;
  }

  .nav__item {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
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
    padding: 30px 0;
    display: flex;
    margin-bottom: 30px;
  }

  .aboutme__info-title {
    margin-right: 50px;
    font-size: 21px;
    font-weight: 700;
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
    margin-right: 10px;
  }

  .aboutme__list {
    display: flex;
    justify-content: space-between;
  }

  .aboutme__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 50px;
    padding: 1% 3% 2%;
    width: 534px;
    height: 387px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;

    &:last-child {
      margin-right: 0;
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
    height: 20%;
    width: 100%;
    border-bottom: 1px solid #bbbfc7;
  }

  .aboutme__item-btn {
    position: absolute;
    display: flex;
    top: 40%;
    transform: translate(0,-40%);
    right: 0;
  }

  .aboutme__block-interest {
    margin-right: 40px;
  }

  .aboutme__input {
    padding: 15px 0;
    margin-left: 5px;
    width: 250px;
    font-size: 18px;
    border-bottom: 1px solid #000000;

    &::placeholder {
      font-size: 18px;
      opacity: 0.51;
    }
  }

  .aboutme__item-bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }

  .aboutme__input-skill {
    padding: 15px 5px 15px 15px;
    width: 200px;
    margin-right: 20px;
  }

  .aboutme__input-interest {
    width: 60px;
    padding: 15px 0;
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
    justify-content: space-between;
    width: 70%;
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }

    &::after {
      content: "";
      opacity: .5;
      position: absolute;
      top: 3px;
      right: -105px;
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
      right: -140px;
      background: svg-load('trash.svg', fill=#414c63, width=100%, height=100%);
      background-repeat: no-repeat;
      width: 13px;
      height: 15px;
    }
  }

  // Работы

  .works{
    color: #414c63;
    background-color: #f7f9fe;
  }

  .works__content {
    background-color: #ffffff;
    width: 100%;
    height: 70%;
    padding: 3%;
    margin-bottom: 40px;
    max-width: 1120px;
  }

  .works__info {
    display: flex;
  }

  .works__info-title {
    padding-bottom: 3%;
    margin-bottom: 40px;
    border-bottom: 1px solid black;
    font-size: 18px;
    font-weight: 700;
  }

  .works__left {
    width: 48%;
    height: 276px;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    padding: 8% 12% 5%;
    text-align: center;
    margin-right: 20px;
  }

  .works__left-content {
    margin-bottom: 20px;
  }

  .works__button {
    width: 181px;
    height: 50px;
    border-radius: 25px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  }

  .works__right {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .works__right-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .works__right-link {
    margin-right: 40px;
  }

  .works__block {
    border-bottom: 1px solid black;
    margin-bottom: 25px;

    &--textarea {
      border-bottom: none;
      width: 100%;
      margin-bottom: 10px;
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
    padding: 10px 0;
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
    padding: 1% 2%;
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

  .works__item {
    margin-bottom: 40px;
  }

  .works__add {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 340px;
    height: 556px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    margin-right: 40px;
  }

  .works__add-btn {
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
  }

  .works__items {
    display: flex;
  }

  .works__item {
     width: 340px;
    height: 556px;
    background-color: #ffffff;
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
    width: 73px;
    height: 31px;
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
  }

  .desk__work, .desk__desk {
    margin-bottom: 30px;
  }

  .desk__btn {
    display: flex;
    justify-content: space-between;
  }

  .preview__edit,.preview__del {
    width: 40%;
  }

  .preview__edit {
    position: relative;

    &:after {
      content: "";
      top: 4px;
      right: 10px;
      position: absolute;
      background: svg-load('pencil.svg', fill=#414c63, width=100%, height=100%);
      width: 17px;
      height: 17px;
    }
  }

  .preview__del {
     position: relative;
  }

  .preview__del-close {
    position: absolute;
    top: 4px;
    right: 10px;
    width: 15px;
    height: 15px;
  }

  .preview__del-close:before,
  .preview__del-close:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 18px;
    height: 3px;
    background-color: #bf2929;
  }

  .reviews {
    height: 519px;
    width: 100%;
    max-width: 1120px;
    background-color: #ffffff;
    padding: 3%;
    margin-bottom: 40px;
  }

  .reviews__title {
    height: 10%;
    width: 100%;
    margin-bottom: 40px;
    border-bottom: 1px solid black;
  }

  .reviews__content {
    display: flex;
    width: 100%;
  }

  .reviews__right {
    width: 60%;
  }

  .user {
    text-align: center;
    margin-right: 40px;
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

  .reviews__desk-title--textarea {
    margin-bottom: 20px;
  }

  .reviews__desk-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .reviews__desk-content {
    border-bottom: 1px solid black;
    width: 48%;
    margin-bottom: 20px;

    &--textarea {
      width: 100%;
      border-bottom: none;
    }
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
    width: 340px;
    height: 556px;
    background-color: #ffffff;
    padding: 3%;
  }

  .reviews__user {
    display: flex;
    height: 13%;
    border-bottom: 1px solid black;
    margin-bottom: 40px;
  }

  .reviews__user-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
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
                    input.aboutme__input(type="text", name="name", placeholder="Название новой группы")
                  .aboutme__item-btn
                    .aboutme__item-okey.icon__okey
                    .aboutme__item-close.icon__close
                .aboutme__item-bottom
                  label.aboutme__block(for="")
                    input.aboutme__input.aboutme__input-skill(type="text", name="name", placeholder="Новый навык")
                  label.aboutme__block.aboutme__block-interest(for="")
                    input.aboutme__input.aboutme__input-interest(type="text", name="name", placeholder="100 %")
                  .aboutme__item-icon.icon-add
              li.aboutme__item
                .aboutme__desk
                  label.aboutme__block(for="")
                    input.aboutme__input(type="text", name="name", placeholder="Название новой группы")
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
                  label.aboutme__block(for="")
                    input.aboutme__input.aboutme__input-skill(type="text", name="name", placeholder="Новый навык")
                  label.aboutme__block.aboutme__block-interest(for="")
                    input.aboutme__input.aboutme__input-interest(type="text", name="name", placeholder="100 %")
                  .aboutme__item-icon.icon-add
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
                button.works__button Загрузить
        .works__items
          .works__add
            .works__add-btn
            .works__add-desk Добавить работу
          .works__item
            ul.preview
              li.preview__item HTML5
              li.preview__item HTML5
              li.preview__item HTML5
            .desk
              .desk__content
                .desk__work Новая работа
                .desk__desk Описание работы
                a.desk__link http://google.com
              .desk__btn
                .preview__edit Править
                .preview__del Удалить
                  .preview__del-close.icon__close
    section.reviews
      .container.aboutme__container
        .reviews__title Добавить Отзывы
        .reviews__content
          .user
            .user__img
            a.user__link Добавить фото
          .reviews__right
            .reviews__desk
              .reviews__desk-info
                .reviews__desk-content
                  .reviews__desk-title Название
                  label.reviews__block(for="")
                    input.reviews__input(type="text", name="name", placeholder="Новый навык")
                .reviews__desk-content
                  .reviews__desk-title Название
                  label.reviews__block(for="")
                    input.reviews__input(type="text", name="name", placeholder="Новый навык")
              .reviews__desk-content.reviews__desk-content--textarea
                .reviews__desk-title.reviews__desk-title--textarea Название
                label.reviews__block(for="")
                  textarea.reviews__input.reviews__input--textarea(name="message", placeholder="Сообщение к письму")
              .works__right-btn
                a.works__right-link Отмена
                button.works__button Сохранить
      .works__items
        .works__add
          .works__add-btn
          .works__add-desk Добавить отзыв
        .reviews__item
          .reviews__user
            img(src="../images/content/user.jpg").reviews__user-pic
            .reviews__user-desk
              .reviews__user-name Владимир Сабанцев
              .reviews__user-pos Основатель Лофтскул
          .reviews__text
            p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
          .desk__btn
              .preview__edit Править
              .preview__del Удалить
                .preview__del-close.icon__close

                  
                
                
              
          






</template>
