<template lang="pug">
   section.reviews 
      .container
        h1.reviews__title  Блок "Отзывы"
        .reviews__content(v-if='isShown')
          form.reviews__form(
            @submit.prevent="addNewReview"
          )
            .form__title.reviews__form-title Новый отзыв
            .form__content
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
                  .user__link Добавить фото
                  .input__error {{this.validation.firstError('editedReview.photo')}}
              .form
                .form__row
                  label.form__block(for="")
                    .form__block-title Имя автора
                    input.form__input(
                      v-model="editedReview.author"
                      type="text", name="name", placeholder="Новый навык")
                    .input__error {{this.validation.firstError('editedReview.author')}}
                  label.form__block(for="")
                    .form__block-title Должность автора
                    input.form__input(
                      v-model="editedReview.occ"
                      type="text", name="name", placeholder="Новый навык")
                    .input__error {{this.validation.firstError('editedReview.occ')}}
                .form__row.form__row--textarea
                  label.form__block.form__block--textarea(for="")
                    .form__block-title.form__block-title--textarea Отзыв
                    textarea.form__input.form__input--textarea(
                      v-model="editedReview.text"
                      name="message", placeholder="Сообщение к письму")
                    .input__error {{this.validation.firstError('editedReview.text')}}
                .form__row.form__row-btn
                  button(
                    @click=" isShown = false"
                  ).form__row-link Отмена
                  button(
                  ).form__row-button Сохранить
        ul.reviews__items
          li.reviews__item.reviews__add
            button(
              @click='createForm'
            ).reviews__add-btn
            .reviews__add-desk Добавить отзыв
          reviewItem(
            v-for="review in reviews" :key="review.id"
            @editedExistedReview="editedExistedReview"
            :review="review"
          )
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Validator } from "simple-vue-validator"
export default {
  components: {
    reviewItem: () => import('../reviewItem'),
  },
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'editedReview.author'(value) {
      return Validator.value(value).required("Добавьте имя")
    },
    'editedReview.occ'(value) {
      return Validator.value(value).required("Добавьте профессию")
    },
    'editedReview.photo'(value) {
      return Validator.value(value).required("Добавьте фото")
    },
    'editedReview.text'(value) {
      return Validator.value(value).required("Добавьте описание")
    }
  },
  data() {
    return {
      review: {
        author: "",
        occ: "",
        photo: "",
        text: ""
      },
      renderedPhoto: "",
      editedReview: { ...this.review },
      isEdit: false,
      isShown: false
    }
  },
  created() {
    this.fethReview();
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    })
  },
  methods: {
    ...mapActions("reviews", ["fethReview", "addReview","editReview"]),
    createForm() {
      this.isEdit = false;
      this.renderedPhoto = ""
      this.isShown = true;
      this.editedReview = {...this.review}
    },
    appendFileAndRenderFoto(e) {
      const file = e.target.files[0];
      this.editedReview.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        }
      } catch (error) {
        
      }
    },
    editedExistedReview(editedReviewItem) {
      this.isEdit = true;
      this.isShown = true;
      this.editedReview = editedReviewItem;
      this.renderedPhoto = "https://webdev-api.loftschool.com/" + editedReviewItem.photo;
    },
    async addNewReview() {
      try {
        if (this.isEdit) {
          this.editReview(this.editedReview);
          this.isShown = false;
        } else {
          this.addReview(this.editedReview),
          this.isShown = false;
          this.renderedPhoto = ""
        }
      } catch (error) {
      }

     
    },
  
  }
}
</script>

<style lang="postcss">

@import "../../../styles/mixins.pcss";

  .reviews {
    padding-bottom: 40px;
    background-color: #f7f9fe;
  }

  .reviews__content {
    background-color: #ffffff;
    padding: 3%;
    margin-bottom: 40px;
    box-shadow: 0px 0px 23px 5px rgba(0,0,0,0.15);

    @include phones {
      padding: 5%;
    }
  }

  .reviews__title {
    font-size: 21px;
    font-weight: 700;
    padding: 50px 0;
  }
  
  .user {
    display: flex;
    flex-direction: column;
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
    position: relative;
  }

  .reviews__form-pic {
    width: 200px;
    height: 200px;
    background-color: #dee4ed;
    border-radius: 50%;
    position: relative;
    margin-bottom: 40px;
    position: relative;

    &.filled {
    background: center center no-repeat / cover;

     &:before {
      display: none;
    }
    }

  }

  .reviews__form-avatar-empty {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #dee4ed;
    position: relative;

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
    
    &.filled {
      background: center center no-repeat / cover;
      &:before {
        display: none;
      }
    }
}

  .user__input {
    position: absolute;
    top: 0;
    left: -9999px;
  }

  .user__link {
    color: #383bcf;
    cursor: pointer;
  }

  

  .reviews__items {
    display: flex;
    flex-flow: wrap;

    @include phones {
      flex-direction: column;
    }
  }

  .reviews__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    min-width: 280px;
    height: 380px;
    background-color: #ffffff;
    padding: 30px;
    box-shadow: 0px 0px 23px 5px rgba(0,0,0,0.15);
    margin-right: 30px;
    margin-bottom: 30px;

    @include tablets {
      &:nth-child(even) {
        margin-right: 0;
      }
    }

    @include phones {
      width: 100%;
    }
  }

   .reviews__add {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    min-width: 280px;
    height: 380px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    box-shadow: 0px 0px 23px 5px rgba(0,0,0,0.15);
    margin-right: 30px;

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

  
  .reviews__add-btn {
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

  .reviews__add-desk {
    color: #ffffff;
  }


  .reviews__user {
    display: flex;
    padding-bottom: 30px;
    box-shadow: 0 4px 2px -2px gray;
    margin-bottom: 30px;
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
    font-weight: 700;
  }

  .reviews__btn {
    display: flex;
    justify-content: space-between;
  }

   .reviews__edit, .reviews__del  {
    width: 90px;
    text-align: start;
    position: relative;
  }

  .reviews__edit {
    
     &:after {
      content: "";
      top: 3px;
      right: -5px;
      position: absolute;
      background: svg-load('pencil.svg', fill=#383bcf, width=100%, height=100%);
      width: 17px;
      height: 17px;
    }
  }

  .reviews-icon__close {
    position: absolute;
    top: 3px;
    right: 0;
    width: 15px;
    height: 15px;
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

</style>