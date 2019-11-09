<template lang="pug">
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
              img(src="../../../images/content/user.jpg").reviews__user-pic
              .reviews__user-desk
                .reviews__user-name Владимир Сабанцев
                .reviews__user-pos Основатель Лофтскул
            .reviews__text
              p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
            .reviews__btn
              .reviews__edit Править
              .reviews__del Удалить
                .reviews-icon__close.icon__close
</template>