<template lang="pug">
   .aboutme__item-cont
      .aboutme__desk
         label.aboutme__block(for="")
            h4.aboutme__input.aboutme__input--noborder {{category.category}}
         .aboutme__item-btn
            .aboutme__item-edit
      ul.aboutme__skills
         li.aboutme__skills-item(v-for="n in 4")
            .aboutme__skills-key
            .aboutme__skills-value
      .aboutme__item-bottom
         label.aboutme__block.aboutme__block-skill(for="")
            input.aboutme__input.aboutme__input-skill(type="text", name="name", placeholder="Новый навык")
         label.aboutme__block.aboutme__block-interest(for="")
            input.aboutme__input.aboutme__input-interest(type="text", name="name", placeholder="100 %")
         button.aboutme__item-icon.icon-add
</template>

<script>
export default {
   props: {
      category: {
         type: Object,
         default: () => ({}),
         required: true
      }
   }
}
</script>