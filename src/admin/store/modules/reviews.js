export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    SET_REVIEW(state, review) {
      state.reviews = review;
    },
    ADD_REVIEW(state, review) {
      state.reviews.push(review);
    },
    REMOVE_REVIEW(state, removedReviewId) {
      state.reviews = state.reviews.filter(
        review => review.id !== removedReviewId
      );
    },
    EDIT_REVIEW(state, editReviewId) {
      state.reviews = state.reviews.map(review =>
         review.id === editReviewId.id ? editReviewId : review
      )
    }
  },
  actions : {
    async addReview({commit}, review) {
      const formData = new FormData();

      formData.append('author', review.author);
      formData.append('occ', review.occ);
      formData.append('photo', review.photo);
      formData.append('text', review.text);
      try {
        const {data} = await this.$axios.post("/reviews", formData);
        commit("ADD_REVIEW", data)
      } catch (error) {
        
      }
    },
    async fethReview({commit}) {
      const {data} = await this.$axios.get("/reviews/220");
      commit("SET_REVIEW", data);
    },
    async deleteReview ({commit}, reviewId) {
      try {
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit("REMOVE_REVIEW", reviewId)
      } catch (error) {
        
      }
    },
    async editReview({commit}, editedReview) { 
      try {
        const {data} = await this.$axios.post(`/reviews/${editedReview.id}`, editedReview)
        commit("EDIT_REVIEW", data.review)
      } catch (error) {
        
      }
    }
  }
}