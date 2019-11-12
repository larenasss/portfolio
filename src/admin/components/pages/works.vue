<template lang="pug">
   section.works
      .container
        worksForm
        ul.works__items
          li.works__add
            .works__add-btn
            .works__add-desk Добавить работу
          workItem(
            v-for="work in works" :key="work.id"
            :work="work"
          )
</template>

<script>
import worksForm from '../worksForm';
import workItem from '../workItem';
import { mapActions, mapState } from "vuex";
export default {
  components: {
    worksForm,
    workItem
  },
  data: () => ({
    renderedPhoto: "",
    work: {
      title: "",
      techs: "",
      photo: "",
      link: "",
      description: ""
    }
  }),
  created() {
    this.fethWork();
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    })
  },
  methods: {
    ...mapActions("works", ["fethWork"]),
  }
}
</script>

<style lang="postcss">

@import "../../../styles/mixins.pcss";

  .works{
    background-color: #f7f9fe;
  }

  .works__content {
    background-color: #ffffff;
    width: 100%;
    padding: 3%;
    margin-bottom: 40px;

    @include phones {
      padding: 4% 6%;
    }
  }

  .works__info {
    display: flex;
    
    @include tablets {
      flex-direction: column;
      align-items: center;
    }
  }

  .works__info-title {
    padding-bottom: 3%;
    margin-bottom: 40px;
    border-bottom: 1px solid black;
    font-size: 18px;
    font-weight: 700;
  }

  .works__left {
    width: 50%;
    height: 276px;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    text-align: center;
    margin-right: 25px;


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
    }
  }

   .reviews__form-pic {
    position: relative;
    width: 100%;
    height: 276px;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    padding: 7% 13% 5%;
    text-align: center;
    margin-right: 25px;

    &.filled {
    background: center center no-repeat / cover;
    }

  }

  .works__form-avatar-empty {
    position: relative;
    width: 100%;
    height: 276px;
    
    &.filled {
      background: center center no-repeat / cover;
    }
}


  .works__left-content {
    position: absolute;
    top: 0;
    left: -9999px;
  }

  .works__button, .reviews__button, .window__button {
    width: 181px;
    height: 50px;
    border-radius: 25px;
    background-color: #ffffff;
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    text-transform: uppercase;
    color: #ffffff;
    font-weight: 700;
  }

  .works__right {
    display: flex;
    flex-direction: column;
    width: 50%;

    @include tablets {
      width: 70%;
    }

    @include phones {
      width: 100%;
    }
  }

  .works__right-btn, .reviews__desk-btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .works__right-btn {
    @include tablets {
      justify-content: center;
    }
  }

  .works__right-link, .reviews__desk-link {
    margin-right: 40px;
    color: #383bcf;
  }

  .works__block {
    border-bottom: 1px solid black;
    margin-bottom: 25px;

    &--textarea {
      border-bottom: none;
      width: 100%;
      margin-bottom: 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .works__block-title {
    opacity: .5;

    &--textarea {
      margin-bottom: 10px;
    } 
  }

  .works__input {
    padding: 14px 0;
    font-size: 18px;

    &--textarea {
      width: 100%;
      height: 150px;
      resize: none;
      padding: 10px; 
    }
  }

  .works__right-tags {
    margin-bottom: 40px;
  }

  .tags {
    display: flex;
  }

  .tags__item {
    display: flex;
    align-items: center;
    margin-right: 20px;
    padding: 1% 3%;
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
    @include phones {
      display: flex;
      flex-direction: column;
    }
  }

  .works__item {
    margin-bottom: 40px;
  }

  .works__add, .reviews__add {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 340px;
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

  .reviews__add {
    width: 340px;
    height: 380px;

    @include phones {
      height: 111px;
      width: 100%;
    }
  }

  .works__add-btn, .reviews__add-btn {
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

  .works__add-desk, .reviews__add-desk {
    color: #ffffff;
  }

  .works__items {
    display: flex;
  }

  .works__item {
    width: 340px;
    height: 556px;
    background-color: #ffffff;

    @include phones {
      width: 100%;
    }
  }

  .preview {
    background: url("../../../images/content/slider/slider_1.jpg")center center / cover no-repeat;
    width: 100%;
    height: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 2%;
  }

  .preview__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1% 4%;
    border-radius: 15px;
    background-color: #ffffff;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
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

  .desk__edit,.desk__del, .reviews__edit, .reviews__del  {
    width: 105px;
  }

  .desk__edit, .reviews__edit {
    position: relative;

    &:after {
      content: "";
      top: 4px;
      right: 10px;
      position: absolute;
      background: svg-load('pencil.svg', fill=#383bcf, width=100%, height=100%);
      width: 17px;
      height: 17px;
    }
  }

  .desk__del, .reviews__del {
     position: relative;
  }

  .desk-icon__close, .reviews-icon__close {
    position: absolute;
    top: 4px;
    right: 10px;
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
  
  .reviews-icon__close:before,
  .reviews-icon__close:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 18px;
    height: 3px;
    background-color: #bf2929;
  }
</style>