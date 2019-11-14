<template lang="pug">
  li.works__item
    ul.preview
      img(:src="`https://webdev-api.loftschool.com/${work.photo}`").preview__pic
      li.preview__item(v-for='tag, index in tagsArray')
        span.preview__title {{ tag }}
    .desk
      .desk__content
        .desk__work {{work.title}}
        .desk__info
          p {{work.description}}
        a.desk__link {{work.link}}
      .desk__btn
        button(
          @click='editedExistedWork'
        ).desk__edit Править
        button(
          @click="deletedExistedWork"
        ).desk__del Удалить
          .desk-icon__close.icon__close
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editedWork: { ...this.work },    
    }
  },
  props: {
    work: {
      type: Object,
      default: () => ({}),
      required: true
    },
  },
  computed: {
    tagsArray() {
      return this.work.techs.split(',')
    }
  },
  methods:{
    ...mapActions("works", ["deleteWork"]),
    async deletedExistedWork(work) {
     try {
       const response = await this.deleteWork(this.work.id);
     } catch (error) {
       
     }
    },
    editedExistedWork() {
      this.$emit('editedExistedWork', this.editedWork)
    }
  }
}
</script>