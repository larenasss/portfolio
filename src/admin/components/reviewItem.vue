<template lang="pug">
  li.reviews__item
    .reviews__user
      img(:src="`https://webdev-api.loftschool.com/${review.photo}`").reviews__user-pic
      .reviews__user-desk
        .reviews__user-name {{review.author}}
        .reviews__user-pos {{review.occ}}
    .reviews__text
      p {{review.text}}
    .reviews__btn
      button.reviews__edit(
        @click="editedExistedReview"
      ) Править
      button(
        @click="deletedExistedReview"
      ).reviews__del Удалить
        .reviews-icon__close.icon__close
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    review: Object,
    default: () => ({}),
    required: true
  },
  data () {
    return {
      editedReview: { ...this.review }, 
    }
  },
  methods:{
     ...mapActions("reviews", ["deleteReview"]),
      async deletedExistedReview(review) {
      try {
        const response = await this.deleteReview(this.review.id);
      } catch (error) {
        
      }
    },
   editedExistedReview() {
     this.$emit('editedExistedReview', this.editedReview)
    }
  }
}
</script>