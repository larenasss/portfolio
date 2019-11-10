<template lang="pug">
   .aboutme__item-cont
      .aboutme__desk
         label.aboutme__block(for="")
            h4.aboutme__input.aboutme__input--noborder {{category.category}}
         .aboutme__item-btn
            button.aboutme__item-edit
            button.aboutme__item-remove(@click.prevent="removeCategory")
      ul.aboutme__skills
        skillItemInput(
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

export default {
  components: {
    skillItemInput: () => import("./skillsIteminput")
  },
  props: {
    category: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data() {
    return {
      skill: {
        title: "",
        percent: 0,
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
    }
  }
}
</script>