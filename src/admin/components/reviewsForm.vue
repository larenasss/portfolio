<template lang="pug">
  form.reviews__info(
    @submit.prevent="addNewReview"
  )
    .user
      label.user__img
        input(
          type="file"
          @change="appendFileAndRenderFoto"
        ).user__input
        .reviews__form-pic
          .reviews__form-avatar-empty(
            :class="{filled: renderedPhoto.length}"
            :style="{'backgroundImage' : `url(${renderedPhoto})`}"
          )
      a.user__link Добавить фото
    .reviews__desk
      .reviews__desk-info
        .reviews__desk-content
          .reviews__desk-title Имя автора
          label.reviews__block(for="")
            input.reviews__input(
              v-model="review.author"
              type="text", name="name", placeholder="Новый навык")
        .reviews__desk-content
          .reviews__desk-title Должность автора
          label.reviews__block(for="")
            input.reviews__input(
              v-model="review.occ"
              type="text", name="name", placeholder="Новый навык")
      .reviews__desk-content.reviews__desk-content--textarea
        .reviews__desk-title.reviews__desk-title--textarea Отзыв
        label.reviews__block(for="")
          textarea.reviews__input.reviews__input--textarea(
            v-model="review.text"
            name="message", placeholder="Сообщение к письму")
      .reviews__desk-btn
        a.reviews__desk-link Отмена
        button(
          type="submit"
          @click="closeFormReview"
        ).reviews__button Сохранить
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    renderedPhoto: "",
    review: {
      author: "",
      occ: "",
      photo: "",
      text: ""
    }
  }),
  methods:{
    appendFileAndRenderFoto(e) {
      const file = e.target.files[0];
      this.review.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        }
      } catch (error) {
        
      }
    },
    ...mapActions("reviews", ["fethReview", "addReview"]),
    async addNewReview() {
      try {
        this.addReview(this.review);
        this.review.author = "";
        this.review.occ = "";
        this.review.text = "";
      } catch (error) {
        
      }
    },
    closeFormReview() {
      this.$emit('closeFormReview')
    }
  }
  
}
</script>