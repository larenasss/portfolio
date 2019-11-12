<template lang="pug">
  li.reviews__item(v-if="editMode === false")
    .reviews__user
      img(src="../../images/content/user.jpg").reviews__user-pic
      .reviews__user-desk
        .reviews__user-name {{review.author}}
        .reviews__user-pos {{review.occ}}
    .reviews__text
      p {{review.text}}
    .reviews__btn
      button.reviews__edit(@click="editMode = true") Править
      button(
        @click="deletedExistedReview"
      ).reviews__del Удалить
        .reviews-icon__close.icon__close
  li.reviews__item(v-else)
    .reviews__user
      img(src="../../images/content/user.jpg").reviews__user-pic
      .reviews__user-desk
        input(
          v-model="editedReview.author"
        ).reviews__user-name
        input(
          v-model="editedReview.occ"
        ).reviews__user-pos
    .reviews__text
      textarea(
        v-model="editedReview.text"
      )
    .reviews__btn
      button(
        @click="editExictedReview"
      ).reviews__edit Править
      button(
      ).reviews__del Удалить
        .reviews-icon__close.icon__close
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    review: Object,
  },
  data () {
    return {
      editMode: false,
      editedReview: { ...this.review },
    }
  },
  methods:{
     ...mapActions("reviews", ["deleteReview", "editReview"]),
      async deletedExistedReview(review) {
      try {
        const response = await this.deleteReview(this.review.id);
      } catch (error) {
        
      }
    },
    async editExictedReview() {
      try {
        await this.editReview(this.editedReview)
        this.editMode = false;
      } catch (error) {
        
      }
    }
  }
}
</script>