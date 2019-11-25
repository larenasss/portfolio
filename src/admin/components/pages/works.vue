<template lang="pug">
   section.works
      .container
        h1.works__title  Блок "Работы"
        .works__content(v-if='isShown')
          form(
            @submit.prevent="addNewWork"
          ).works__form
            .form__title.works__form-title Редактирование работы
            .form__content.form__content-works
              label.works__left
                input(
                  type="file"
                  @change="appendFileAndRenderFoto"
                ).works__left-content 
                span.works__left-text Нажмите кнопку для загрузки изображения
                .works__button Загрузить
                .works__left-form-pic
                  .works__form-avatar-empty(
                    :class="{filled: renderedPhoto.length}"
                    :style="{'backgroundImage' : `url(${renderedPhoto})`}"
                )
                .input__error(v-if="isError")  {{this.validation.firstError('editedWork.photo')}}
              .form
                .form__row
                  label.form__block(for="")
                    .form__block-title Название
                    input.form__input(
                      v-model="editedWork.title"
                      type="text", name="name", placeholder="Название работы")
                    .input__error(v-if="isError")  {{this.validation.firstError('editedWork.title')}}
                .form__row 
                  label.form__block(for="")
                    .form__block-title Ссылка
                    input.form__input(
                      v-model="editedWork.link"
                      type="text", name="name", placeholder="Ссылка")
                    .input__error(v-if="isError")  {{this.validation.firstError('editedWork.link')}}
                .form__row.form__row--textarea
                  label.form__block.form__block--textarea(for="")
                    .form__block-title.form__block-title--textarea Описание
                    textarea.form__input.form__input--textarea(
                      v-model="editedWork.description"
                      type="text", name="name", placeholder="Описание")
                    .input__error(v-if="isError")  {{this.validation.firstError('editedWork.description')}}
                .form__row
                  label.form__block(for="")
                    .form__block-title Добавление тэга
                    input.form__input(
                      v-model="editedWork.techs"
                      type="text", name="name", placeholder="HTML5, CSS3, JavaScript")
                    .input__error(v-if="isError")  {{this.validation.firstError('editedWork.techs')}}
                .works__right-tags
                  ul.tags
                    li.tags__item(v-for='tag, index in tagsArray')
                      span.tags__title {{ tag }}
                      button(
                        @click='deleteTag(index)'
                      ).tags-icon__close.icon__close
                .form__row.form__row-btn
                  button(
                    type='reset'
                    @click=" isShown = false"
                  ).form__row-link Отмена
                  button(
                    type="submit"
                  ).form__row-button Сохранить
        ul.works__items
          li.works__item.works__add
            button(
              @click='createForm'
            ).works__add-btn
            .works__add-desk Добавить работу
          workItem(
            v-for="work in works" :key="work.id"
            :work="work"
            @editedExistedWork="editedExistedWork"
          )
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Validator } from "simple-vue-validator"
export default {
  components: {
    workItem: () => import('../workItem'),
  },
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'editedWork.title'(value) {
      return Validator.value(value).required("Добавьте назавание")
    },
    'editedWork.techs'(value) {
      return Validator.value(value).required("Добавьте навыки")
    },
    'editedWork.photo'(value) {
      return Validator.value(value).required("Добавьте фото")
    },
    'editedWork.link'(value) {
      return Validator.value(value).required("Добавьте ссылку")
    },
    'editedWork.description'(value) {
      return Validator.value(value).required("Добавьте описание")
    }
  },
  data() {
    return {
      work: {
        title: '',
        techs: '',
        photo: '',
        link: '',
        description: ''
      },
      renderedPhoto: '',
      editedWork: { ...this.work },
      isEdit: false,
      isShown: false,
      isError: false
    }
  },
  created() {
    this.fethWork();
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    }),
    tagsArray() {
      return this.editedWork.techs.split(',').filter(el => el.trim())
    }
  },
  methods: {
    ...mapActions("works", ["fethWork", "addWork", "editWork"]),
     createForm() {
      this.isEdit = false;
      this.isShown = true;
      this.editedWork = {...this.work};
      this.renderedPhoto = "";
    },
    appendFileAndRenderFoto(e) {
      const file = e.target.files[0];
      this.editedWork.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        }
      } catch (error) {
        
      }
    },
    editedExistedWork(editedWorkItem) {
      this.isEdit = true;
      this.isShown = true;
      this.editedWork = editedWorkItem;
      this.renderedPhoto = "https://webdev-api.loftschool.com/" + editedWorkItem.photo;
    },
    async addNewWork() {
      this.$validate().then(success =>{
        if(!success) {
          this.isError = true;
          return;
        }
        try {
          if (this.isEdit) {
            this.editWork(this.editedWork);
            console.log(this.editedWork);
            
            this.isShown = false;
        } else {
          this.addWork(this.editedWork),
          this.isShown = false;
          this.renderedPhoto = ""
        }
      } catch (error) {
      }

      })
    },
    deleteTag(index) {
      let editedTechsArr = this.editedWork.techs.split(',')
      const deletedTag = editedTechsArr.splice(index, 1)
      this.editedWork.techs = editedTechsArr.join(',')
    },
  }
}
</script>
<style lang="postcss">

@import "../../../styles/mixins.pcss";

  .works{
    background-color: #f7f9fe;
  }

  .works__title {
    font-size: 21px;
    font-weight: 700;
    padding: 50px 0;
  }

  .works__form {
    background-color: #ffffff;
    width: 100%;
    padding: 3%;
    margin-bottom: 40px;
    box-shadow: 0px 0px 23px 5px rgba(0,0,0,0.15);

    @include phones {
      padding: 4% 6%;
    }
  }

  .works__left {
    width: 50%;
    height: 276px;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    text-align: center;
    margin-right: 40px;
    position: relative;
    padding: 7% 12%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    &.filled {
    background: center center no-repeat / cover;
    }

    @include tablets {
      margin-right: 0; 
      margin-bottom: 40px;
      width: 70%;
    }

    @include phones {
      width: 100%;
      height: 200px;
    }
  }

  .works__left-form-pic {
    z-index: 1;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    text-align: center;

    &.filled {
    background: center center no-repeat / cover;
    }
  }

  .works__form-avatar-empty {
    width: 100%;
    height: 276px;
    
    &.filled {
      background: center center no-repeat / cover;
    }

    @include phones {
      height: 200px;
    }
}


  .works__left-content {
    position: absolute;
    top: 0;
    left: -9999px;
  }

  .works__button, .window__button {
    width: 181px;
    height: 50px;
    border-radius: 25px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 700;
    z-index: 2;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .works__right-tags {
    margin-bottom: 40px;
  }

  .tags {
    display: flex;

    @include phones {
      flex-wrap: wrap;
    }
  }

  .tags__item {
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 6px 12px;
    background-color: #f4f4f4;
    border-radius: 15px;
    opacity: 0.7;
  }

  .tags-icon__close {
    height: 11px;
    margin-left: 5px;
  }

  .tags-icon__close:before,
  .tags-icon__close:after {
    content: "";
    position: absolute;
    top: 40%;
    width: 12px;
    height: 2px;
    background-color: #414c63;
  }

  .works__items {
    display: flex;
    flex-flow: wrap;
   

    @include phones {
      flex-direction: column;
       align-items: center;
    }
  }

  .works__item {
    margin-bottom: 40px;
    max-width: 380px;
    width: 30%;
    min-width: 320px;
    height: 556px;
    background-color: #ffffff;
    box-shadow: 0px 0px 23px 5px rgba(0,0,0,0.15);
    margin-right: 30px;
    margin-bottom: 30px;

    @include tablets {
      &:nth-child(even) {
        margin-right: 0;
      }
    }

    @include phones {
        margin-right: 0;
    }

    @include phones {
      width: 100%;
    }
  }

  .works__add {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 320px;
    width: 30%;
    height: 556px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

    @include phones {
      margin-right: 0;
      margin-bottom: 20px;
      height: 111px;
      width: 100%;
      flex-direction: row;
      justify-content: flex-start;
      padding: 0 5%;
    }
  }

  .works__add-btn {
    width: 150px;
    height: 150px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    position: relative;
    margin-bottom: 20px;

     &:before {
      content: "";
      position: absolute;
      background-color: #ffffff;
      width: 30px;
      height: 2px;
      top: 50%;
      left: 50%;
      transform:translate(-50%, -50%);
    }

    &:after {
      content: "";
      position: absolute;
      background-color: #ffffff;
      width: 2px;
      height: 30px;
      top: 50%;
      left: 50%;
      transform:translate(-50%, -50%);
    }

    @include phones {
      width: 50px;
      height: 50px;
      margin-bottom: 0;
      margin-right: 20px;

      &:before {
      width: 20px;
      height: 2px;
      top: 50%;
      left: 50%;
      transform:translate(-50%, -50%);
      }

      &:after {
      width: 2px;
      height: 20px;
      top: 50%;
      left: 50%;
      transform:translate(-50%, -50%);
      }
    }
  }

  .works__add-desk {
    color: #ffffff;
  }

  .preview {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 2%;
    position: relative;
  }

  .preview__pic {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }

  .preview__item {
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  .preview__title {
    padding: 5px 10px;
    border-radius: 15px;
    background-color: #ffffff;
  }

  .desk {
    padding: 40px 20px;
    display: flex;
    height: 70%;
    flex-direction: column;
    justify-content: space-between;

    @include phones {
      padding: 40px;
    }
  }

  .desk__work, .desk__info {
    margin-bottom: 30px;
  }

  .desk__work {
    font-size: 18px;
    font-weight: 700;
  }

  .desk__link {
    color: #383bcf;
  }

  .desk__btn, .reviews__btn {
    display: flex;
    justify-content: space-between;
  }

  .desk__edit, .desk__del  {
    width: 90px;
    text-align: start;
    position: relative;
  }

  .desk__edit {

    &:after {
      content: "";
      top: 3px;
      right: -5px;
      position: absolute;
      background: svg-load('pencil.svg', fill=#383bcf, width=100%, height=100%);
      width: 17px;
      height: 17px;
    }
  }

  .desk-icon__close {
    position: absolute;
    top: 3px;
    right: 0;
    width: 15px;
    height: 15px;
  }

  .desk-icon__close:before,
  .desk-icon__close:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 18px;
    height: 3px;
    background-color: #bf2929;
  }
</style>