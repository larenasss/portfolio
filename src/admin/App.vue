<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

  .container {
    flex-direction: row;
    align-items: center;
  }

  .aboutme__container {
    align-items: flex-start;
    flex-direction: column;
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

  .header__out {
    flex: 1;
    text-align: right;
  }

  .aboutme__menu {
    color: #414c63;
    height: 77px;
    display: flex;
  }

  
  .menu {
    align-items: center;
    display: flex;
  }

  .menu__list {
    display: flex;
    padding: 0 25px;
  }

  .menu__item {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  .menu__link {
    text-decoration: none;
  }

  .aboutme__content {
    color: #414c63;
    background-color: #f7f9fe;
    height: 1257px;
  }

  .aboutme__info {
    padding: 30px 0;
    display: flex;
    margin-bottom: 30px;
  }

  .aboutme__info-title {
    margin-right: 50px;
  }

  .aboutme__btn {
    position: relative;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    margin-right: 30px;

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

  .aboutme__info-btn {
    display: flex;
    align-items: center;
  }

  .aboutme__list {
    display: flex;
    flex-wrap: wrap;
  }

  .aboutme__item {
    padding: 4%;
    width: 534px;
    height: 387px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    margin-right: 50px;

    &:nth-child(1) {
      margin-bottom: 50px;
    }

    &:nth-child(2) {
      margin-right: 0;
    }
  }

  .aboutme__item-top {
    height: 20%;
    width: 100%;
    border-bottom: 1px solid #bbbfc7;
  }

  .aboutme__item-input {
    padding: 20px 0;
    margin-left: 5px;
    width: 60%;
    border-bottom: 1px solid #000000;
  }


</style>
<template lang="pug">
  section.aboutme
    .header
      .container
        .header__user
          img(src="../images/content/user.jpg").header__user-pic
          .header__user-name Бутрий Алексей
        .header__desc Панель администрирования
        .header__out
          a.header__out-link Выход
    .aboutme__menu
      .container
        nav.menu
          - var menu = ['Главная', 'Работы', 'Отзывы']
            ul.menu__list
              each item in menu
                li.menu__item
                  a(href="#").menu__link #{item}
    .aboutme__content
      .container.aboutme__container
        .aboutme__info
          .aboutme__info-title Блок << Обо мне >>
          .aboutme__info-btn
            button.aboutme__btn
            a.aboutme__btn-link Добавить группу
        .aboutme__elements
          ul.aboutme__list
            li.aboutme__item
              .aboutme__item-top
                label.aboutme__item-block(for="")
                  input.aboutme__item-input(type="text", name="name", placeholder="Название новой группы")
              
</template>