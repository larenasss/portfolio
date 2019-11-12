<template lang="pug">
   section.reviews 
      .container
        .reviews__title  Блок "Отзывы"
        .reviews__content(v-if="reviewsForm")
          reviewsForm
        ul.reviews__items
          li.reviews__add
            button.reviews__add-btn(
              v-if="reviewsForm === false"
              @click="reviewsForm = true")
            .reviews__add-desk Добавить отзыв
          reviewItem(
            v-for="review in reviews" :key="review.id"
            :review="review"
          )
</template>

<script>
import reviewsForm from '../reviewsForm'
import reviewItem from '../reviewItem'
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    reviewsForm: false,
    renderedPhoto: "",
    review: {
      author: "",
      occ: "",
      photo: "",
      text: ""
    }
  }),
  components: {
    reviewsForm,
    reviewItem
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
    ...mapActions("reviews", ["fethReview"]),
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

    @include phones {
      padding: 5%;
    }
  }

  .reviews__title {
    font-size: 21px;
    font-weight: 700;
    padding: 50px 0;
    display: flex;

    @include phones {
      flex-direction: column;
    }
  }

  .reviews__info {
    display: flex;

    @include phones {
      flex-direction: column;
      align-items: center;
    }
  }

  .reviews__desctiption {
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

  .reviews__items {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
  }

  .reviews__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 340px;
    height: 380px;
    background-color: #ffffff;
    padding: 30px;

    &:last-child {
      margin-right: 0;
    }

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

</style>