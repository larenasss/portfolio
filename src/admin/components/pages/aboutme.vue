<template lang="pug">
   section.aboutme
      .container
        .aboutme__content
          .aboutme__info
            .aboutme__info-title Блок "Обо мне"
            .aboutme__btn
              button.icon-add.aboutme__icon-add
              a.aboutme__btn-link Добавить группу
        ul.aboutme__list
          skillsAdd
          li.aboutme__item(v-for="category in categories" :key="category.id")
            skillsItem(
              :category="category"
            )
</template>

<script>
import { mapActions, mapState } from "vuex";
import skillsAdd from '../slillsAdd';
import skillsItem from '../skillsItem';
import { objectExpression } from 'babel-types';


export default {
  props: {
    category: Object
  },
  components: {
    skillsItem,
    skillsAdd
  },
  data: () => ({
    title: ""
  }),
  created() {
    this.fetchCategories();
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories", "deleteCategories"]),
    async removeCategory(category) {
      try {
        const response = await this.deleteCategories(this.category.id);
      } catch (error) {
      }
    },
    async addNewCategory() {
      try {
        await this.addCategory(this.title);
      } catch (error) {
        alert(error.message);
      }
      
    }
  }
}
</script>

<style lang="postcss">
   @import "../../../styles/mixins.pcss";

 .aboutme {
    background-color: #f7f9fe;
    padding-bottom: 40px;
  }

  .aboutme__info {
    padding: 50px 0;
    display: flex;

    @include phones {
      flex-direction: column;
    }
  }

  .aboutme__info-title {
    margin-right: 65px;
    font-size: 21px;
    font-weight: 700;

    @include phones {
      margin-bottom: 20px;
    }
  }

  .aboutme__btn {
    display: flex;
    align-items: center;
  }

  .aboutme__btn-link {
    color: #383bcf;
    font-weight: 700;
  }

  .aboutme__icon-add {
    margin-right: 12px;
  }

  .aboutme__list {
    display: flex;
    justify-content: space-between;

    @include phones {
      flex-direction: column;
    }
  }

  .aboutme__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 20px 20px 20px;
    max-width: 525px;
    width: 48%;
    height: 387px;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }

    @include phones {
      flex-direction: column;
      margin-right: 0;
      margin-bottom: 20px;
      width: 100%;
    }
  }

  .aboutme__item-cont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .aboutme__item-edit {
    background: svg-load('pencil.svg', fill=#414c63, width=100%, height=100%);
    background-repeat: no-repeat;
    width: 16px;
    height: 15px;
    opacity: 0.5;
  }

  .aboutme__desk{
    position: relative;
    height: 18%;
    width: 100%;
    border-bottom: 1px solid #bbbfc7;
  }

  .aboutme__item-btn {
    position: absolute;
    right: 1%;
    display: flex;
    top: 30%;
    transform: translate(0,-40%);
  }

  .aboutme__block-interest {
    margin-right: 20px;
    width: 75px;
  }

  .aboutme__block-skill {
    margin-right: 10px;
    font-size: 16px;
    width: 50%;
    max-width: 210px;
  }

  .aboutme__input {
    padding: 12px 8px 12px 12px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #000000;

    &::placeholder {
      opacity: 0.5;
    }

    &--noborder{
      @include tablets {
        border-bottom: transparent;
      }
    }
  }

  .aboutme__item-bottom {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }

  .aboutme__input-interest {
    width: 100%;
  }

  .aboutme__input-skill {
    width: 100%;
  }

  .aboutme__item-icon {
    width: 40px;
    height: 40px;
    
    &:before {
      width: 18px;
      height: 3px;
    }

    &:after {
      width: 3px;
      height: 18px;
    }
  }

  .aboutme__skills-item {
    position: relative;
    display: flex;
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }

    &::after {
      content: "";
      opacity: .5;
      position: absolute;
      top: 3px;
      right: 40px;
      background: svg-load('pencil.svg', fill=#414c63, width=100%, height=100%);
      background-repeat: no-repeat;
      width: 16px;
      height: 15px;
    }

    &::before {
      content: "";
      opacity: .5;
      position: absolute;
      top: 3px;
      right: 10px;
      background: svg-load('trash.svg', fill=#414c63, width=100%, height=100%);
      background-repeat: no-repeat;
      width: 13px;
      height: 15px;
    }
  }

  .aboutme__skills-value {
    position: absolute;
    right: 100px;
  }

</style>