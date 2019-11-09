<template lang="pug">
   section.authorization
      .authorization__bg
      .window
        form(
          @submit.prevent="login"
        ).window__content
          .window__title Авторизация
          label.window__block(for="")
            .window__block-content
              .window__block-title Логин
              input.window__input(
                v-model="user.name" 
                type="text", name="name" 
                placeholder="Terminator")
          label.window__block(for="")
            .window__block-content
              .window__block-title Пароль
              input.window__input(
                type="text" 
                v-model="user.password" 
                name="name" 
                placeholder="••••••••••")
          .window__btn
            button(
              type="submit"
              ).window__button Сохранить
          .window__close.icon__close  
</template>

<script>
import $axios from '../../requests';

export default {
  data: () => ({
    user: {
      name: "",
      password: ""
    }
  }),
  methods: {
    async login() {
      try {
        const {
          data: {token}
        } = await $axios.post('/login', this.user);

        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;

        this.$router.replace("/");
      } catch (error) {
        alert('Такой пользователь не найден')
      }
    }
  }
};
</script>