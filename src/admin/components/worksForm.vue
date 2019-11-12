<template lang="pug">
  form(
    @submit.prevent="addNewWork"
  ).works__content
    .works__info-title Редактирование работы
    .works__info
      label.works__left
        input(
          type="file"
          @change="appendFileAndRenderFoto"
        ).works__left-content 
        button.works__button Загрузить
        .works__left__form-pic
          .works__form-avatar-empty(
            :class="{filled: renderedPhoto.length}"
            :style="{'backgroundImage' : `url(${renderedPhoto})`}"
        )
      .works__right
        .works__block
          .works__block-title Название
          label.works__label(for="")
            input.works__input(
              v-model="work.title"
              type="text", name="name", placeholder="Новый навык")
        .works__block
          .works__block-title Ссылка
          label.works__label(for="")
            input.works__input(
              v-model="work.link"
              type="text", name="name", placeholder="Новый навык")
        .works__block.works__block--textarea
          .works__block-title.works__block-title--textarea Описание
          label.works__label(for="")
            textarea.works__input.works__input--textarea(
              v-model="work.description"
              type="text", name="name", placeholder="Новый навык")
        .works__block
          .works__block-title Добавление тэга
          label.works__label(for="")
            input.works__input(
              v-model="work.techs"
              type="text", name="name", placeholder="Новый навык")
        .works__right-tags
          ul.tags
            li.tags__item
              .tags-icon__close.icon__close
        .works__right-btn
          a.works__right-link Отмена
          button(
            type="submit"
          ).works__button Сохранить
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    renderedPhoto: "",
    work: {
      title: "",
      techs: "",
      photo: "",
      link: "",
      description: ""
    }
  }),
  methods: {
     ...mapActions("works", ["addWork"]),
    appendFileAndRenderFoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        }
      } catch (error) {
        
      }
    },
    async addNewWork() {
      try {
        this.addWork(this.work);
      } catch (error) {
        
      }
    }
  }
}
</script>

<style lang="postcss">
</style>