<template lang="pug">
    li.aboutme__item
      .aboutme__desk
        label.aboutme__block(for="")
          input.aboutme__input.aboutme__input--noborder(type="text" v-model="title" name="name" placeholder="Название категории")
        .aboutme__item-btn
          button.aboutme__item-okey.icon__okey(
            @click="addNewCategory(); closeNewCategory()"
          )
          button.aboutme__item-close.icon__close
      .aboutme__item-bottom.blocked
        label.aboutme__block.aboutme__block-skill(for="")
          input.aboutme__input.aboutme__input-skill(type="text" name="name" placeholder="Новый навык")
        label.aboutme__block.aboutme__block-interest(for="")
          input.aboutme__input.aboutme__input-interest(type="text", name="name", placeholder="100 %")
        button.aboutme__item-icon.icon-add
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import { objectExpression } from 'babel-types';

  import categoryAddInput from './categoryAddInput'


export default {
  props: {
    category: Object
  },
  components: {
    categoryAddInput
  },
  data: () => ({
    title: "",
  }),
  mounted() {
    this.fetchCategories();
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories"]),

    async addNewCategory() {
      try {
        await this.addCategory(this.title);
      } catch (error) {
        alert(error.message);
      }
    },
    closeNewCategory() {
      this.$emit('closeNewCategory')
    }
  }
}
</script>
<style scoped>
   
</style>