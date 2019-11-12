<template lang="pug">
  li.works__item
    ul.preview
      li.preview__item {{work.techs}}
      li.preview__item 
      li.preview__item 
    .desk
      .desk__content
        .desk__work {{work.title}}
        .desk__info
          p {{work.description}}
        a.desk__link {{work.link}}
      .desk__btn
        .desk__edit Править
        button(
          @click="deletedExistedWork"
        ).desk__del Удалить
          .desk-icon__close.icon__close
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    work: Object
  },
  methods:{
    ...mapActions("works", ["deleteWork"]),
     async deletedExistedWork(work) {
     try {
       const response = await this.deleteWork(this.work.id);
     } catch (error) {
       
     }
   },
  }
}
</script>