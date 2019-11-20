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
              placeholder="Login")
            .input__error(v-if="isErrorInput")  {{this.validation.firstError('user.name')}}
        label.window__block.window__block--password(for="")
          .window__block-content
            .window__block-title Пароль
            input.window__input(
              type="password"
              v-model="user.password" 
              name="name" 
              placeholder="Password")
            .input__error(v-if="isErrorInput")  {{this.validation.firstError('user.password')}}
        .window__btn
          button(
            type="submit"
            ).window__button Сохранить
        .window__close.icon__close
    .modal_er(v-if="isError")
      .modal__error
      .modal__window
        .modal__text 
          | Упс.. 
          br
          | Такой пользователь не найден
        button.modal__close.icon__close(
          @click="isError = false"
        )
</template>

<script>
import Vuex from "vuex";
import $axios from '../../requests';
import { Validator } from "simple-vue-validator"

export default {
  data: () => ({
    user: {
      name: "",
      password: ""
    },
    isError: false,
    isErrorInput: false
  }),
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'user.name'(value) {
      return Validator.value(value).required("Введите логин")
    },
    'user.password'(value) {
      return Validator.value(value).required("Введите пароль")
    }
  },
  methods: {
    login() {
       this.$validate().then(async success =>{
        if(!success) {
          this.isErrorInput = true;
          return;
        }
          try {
         const {
           data: {token}
         } = await $axios.post('/login', this.user);
 
         localStorage.setItem("token", token);
         $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
 
         this.$router.replace("/");
       } catch {
         this.isError = true
       }
 
       })
     
    }
  }
};
</script>