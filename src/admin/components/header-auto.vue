<template lang="pug">
  header.header
      .container.header__container
        .header__user
          img(src="../../images/content/user.jpg").header__user-pic
          .header__user-name Бутрий Алексей
        .header__desc Панель администрирования
        .header__out
          a(
            @click="ExitAdminPanel"
          ).header__out-link Выйти
</template>

<script>
import $axios from '../requests';
export default {
  methods: {
    async ExitAdminPanel() {
      try {
        await $axios.post('/logout');
        localStorage.removeItem("token");
        this.$router.replace('/login');
      } catch (error) {
      }
    }
  }
}
</script>