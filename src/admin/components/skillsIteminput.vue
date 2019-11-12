<template lang="pug">
  li.aboutme__skills-item(v-if="editMode === false")
    .aboutme__skills-key {{ skill.title }}
    .aboutme__skills-value  {{ skill.percent }} %
    .aboutme__skills-btn
      button.aboutme__item-edit(@click="editMode = true")
      button.aboutme__item-remove(@click="removeExistedSkill")
  li.aboutme__skills-item(v-else)
    input.aboutme__input.aboutme__input-skill(v-model="editedSkill.title")
    input.aboutme__input.aboutme__input-interest(v-model="editedSkill.percent")
    .aboutme__skills-btn
      button.icon__okey(@click="editExistedSkill")
      button.icon__close(@click="editMode = false")
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    skill: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data () {
    return {
      editMode: false,
      editedSkill: {...this.skill},
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editMode = false;
      } catch (error) {
        
      }
    },
    async removeExistedSkill() {
      try {
        await this.removeSkill({
          id: this.skill.id,
          category: this.skill.category
        });
      } catch (error) {
        
      }
    }  
  }
}
</script>

<style lang="pcss" scoped>
  .aboutme__input-interest {
    width: 30%;
    margin-right: 20px;
  }

  .aboutme__input-skill {
    width: 100%;
    margin-right: 20px;
  }

  .aboutme__skills-btn {
    display: flex;
    align-items: center;
  }

</style>