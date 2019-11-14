<template lang="pug">
  .aboutme__desk(v-if="editMode === false")
    label.aboutme__block(for="")
      h4.aboutme__input-title {{category.category}}
    .aboutme__item-btn
      button.aboutme__item-edit(@click="editMode = true")
      button.aboutme__item-remove(@click="removeCategory")
  .aboutme__desk(v-else)
    label.aboutme__block(for="")
      input.aboutme__input.aboutme__input--noborder(type="text" v-model="editedCategory.category" name="name")
    .aboutme__item-btn
      button.aboutme__item-okey.icon__okey(
        @click="editExitedCategory"
      )
      button.aboutme__item-close.icon__close(@click="editMode = false")
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
   props: {
    category: Object, 
  },
  data()  {
    return {
      editMode: false,
      editedCategory: { ...this.category },
    }
  },
  mounted() {
    this.fetchCategories();
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  methods: {
    ...mapActions("categories", ["editCategory", "fetchCategories"]),
    closeNewCategory() {
      this.$emit('closeNewCategory')
    },
    removeCategory() {
      this.$emit('removeCategory')
    },
    async editExitedCategory() {
      try {
        await this.editCategory(this.editedCategory);
        this.editMode = false;
      } catch (error) {
      }
    }
  }
}
</script> 