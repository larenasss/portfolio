export default {
   namespaced: true,
   state: {
      categories: []
   },
   mutations: {
      SET_CATEGORIES(state, categories) {
         state.categories = categories;
      },
      ADD_CATEGORY(state, category) {
         state.categories.unshift(category);
      },
      REMOVE_CATEGORIES(state, removedCategoryId) {
         state.categories = state.categories.filter(
           category => category.id !== removedCategoryId
         );
      }
   },
   actions: {
      async addCategory({ commit }, title) {
        try {
           const { data } = await this.$axios.post("/categories", {title});
           commit("ADD_CATEGORY", data)
        } catch (error) {
           throw new Error(
              error.response.data.error || error.response.data.message
           );  
        }
      },
      async fetchCategories({ commit }) {
        try {
           const { data } = await this.$axios.get("/categories/220");
           commit("SET_CATEGORIES", data)
        } catch (error) {
        }
      },
      async deleteCategories({ commit }, categoryId) {
        try {
          const response = await this.$axios.delete(`/categories/${categoryId}`);
          commit("REMOVE_CATEGORIES", categoryId);
          console.log(response);
          
          return response;
        } catch (error) {
        }
      },
   }
};