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
    },
    EDIT_CATEGORY(state, editedCategory) {
      
    state.categories = state.categories.map(category =>
      category.id === editedCategory.id ? editedCategory : category
    );
      


    },
    ADD_SKILL(state, newSkill) {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      });
    },
    REMOVE_SKILL(state, deletedSkill) {
      const removeSkill = category => {
        category.skills = category.skills.filter(
          skill => skill.id !== deletedSkill.id
        );
      };

      const findRequiredCategory = category => {
        if (category.id === deletedSkill.category) {
          removeSkill(category);
        }

        return category;
      };

      state.categories = state.categories.map(findRequiredCategory);
    },
    EDIT_SKILL(state, editedSkill) {
      const editSkill = category => {
        category.skills = category.skills.map(skill =>
          skill.id === editedSkill.id ? editedSkill : skill
        );
      };

      const findRequiredCategory = category => {
        if (category.id === editedSkill.category) {
          editSkill(category);
        }

        return category;
      };

      state.categories = state.categories.map(findRequiredCategory);
    }
   },
   actions: {
      async addCategory({ commit }, title) {
        try {
           const { data } = await this.$axios.post("/categories", {title});
           commit("ADD_CATEGORY", data)
        } catch (error) {
          
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
          return response;
      
        } catch (error) {
        }
      },
      async editCategory({commit}, editedCategory) {
        try {
          const {data} = await this.$axios.post(`/categories/${editedCategory.id}`, {title: editedCategory.category});
          commit("EDIT_CATEGORY", data.category );
         
          
        } catch (error) {
          
        }
      }
   }
}