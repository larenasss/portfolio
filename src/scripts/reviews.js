import Vue from "vue";
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

new Vue({
   el: "#reviews-component",
   template: "#reviews",
   components: {
      swiper,
      swiperSlide
   },
   data() {
      return {
         reviews: [],
         swiperOptions: {
            navigation: {
               nextEl: '.reviews__aboutme-btn--next',
               prevEl: '.reviews__aboutme-btn--prev',
            },
            slidesPerView:2,
            slidesPerGroup:2
         }
      };
   },
   methods: {
      arrWithRequiredImages(array) {
         return array.map(item => {
            const requredPic = require(`../images/content/${item["author-pic"]}`);
            item["author-pic"] = requredPic;

            return item;
         });
      },
   },
   created() {
      const reviews = require("../data/reviews.json");
      this.reviews = this.arrWithRequiredImages(reviews);
   },
});