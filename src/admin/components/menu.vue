<template lang="pug">
   .menu
      .container
        nav.nav
          ul.nav__list
            li.nav__item(v-for="tab in tabs")
              router-link(
                :data-text="tab.title"
                :to="tab.href"
                ).nav__link
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Отзывы", href: "/reviews" }
      ]
    };
  }
};
</script>