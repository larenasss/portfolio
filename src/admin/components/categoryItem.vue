<template lang="pug">
    .aboutme__item-content
      categoryAddinput(
        :category="category"
        @removeCategory="removeCategory"
      )
      ul.aboutme__skills
        skillItemInput(
          :category="category"
          v-for="skill in category.skills"
          :key="skill.id"
          :skill="skill"
        )
      form.aboutme__item-bottom(
        @submit.prevent="addNewSkill"
        )
         label.aboutme__block.aboutme__block-skill(for="")
            input.aboutme__input.aboutme__input-skill(type="text", name="name", placeholder="Новый навык" v-model="skill.title")
         label.aboutme__block.aboutme__block-interest(for="")
            input.aboutme__input.aboutme__input-interest(type="text", name="name", placeholder="100 %" v-model="skill.percent")
         button(type="submit").aboutme__item-icon.icon-add
</template>

<script>
import { mapActions } from "vuex";
import { objectExpression } from 'babel-types';
import categoryAddinput from './categoryAddInput'

export default {
  props: {
    category: Object
  },
  components: {
    skillItemInput: () => import("./skillsIteminput"),
    categoryAddinput
  },
  data() {
    return {
      title: "",
      skill: {
        title: "",
        percent: "",
        category: this.category.id
      }
    }
  },
  methods: {
    ...mapActions("categories", ["deleteCategories"]),
    ...mapActions("skills", ["addSkill"]),
    async removeCategory(category) {
      try {
        const response = await this.deleteCategories(this.category.id);
      } catch (error) {
      }
    },
    async addNewSkill() {
      this.formBlocked = true;
      try {
        await this.addSkill(this.skill);
        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
        
      } finally {
        this.formBlocked = false;
      }
    },
    async addNewCategory(){
      this.$emit('addNewCategory', {
        title: this.title
      })
    },
   
    
  }
}
</script>