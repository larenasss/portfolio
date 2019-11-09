<template lang="pug">
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
</template>