export default {
  namespaced: true,
  state: {
    reviews: [],
  },
  mutations: {
    SET_REVIEW(state, reviews) {
      state.reviews = reviews;
    },
    ADD_REVIEW(state, review) {
      state.reviews.push(review);
    },
    REMOVE_REVIEW(state, removedReviewId) {
      state.reviews = state.reviews.filter(
        review => review.id !== removedReviewId
      );
    },
    EDIT_REVIEW(state, editedReview) {
      state.reviews = state.reviews.map(review =>
        review.id === editedReview.id ? editedReview : review
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
      const formDataReview = new FormData();

      formDataReview.append('author', editedReview.author);
      formDataReview.append('occ', editedReview.occ);
      formDataReview.append('photo', editedReview.photo);
      formDataReview.append('text', editedReview.text);
      try {
        const {data} = await this.$axios.post(`/reviews/${editedReview.id}`, formDataReview)
        commit("EDIT_REVIEW", data.review)
      } catch (error) {
        
      }
    }
  }
}