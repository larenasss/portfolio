import Vue from "vue";
import axios from "../admin/requests";
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
               disabledClass: 'notactive'
            },
            slidesPerView: 2,
            slidesPerGroup: 2,
            breakpoints: {
               480: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
               },
            }
         }
      };
   },
   created() {
      axios.get("https://webdev-api.loftschool.com/reviews/220").then(response => {this.reviews = response.data;});

  
    
    
    //const reviews = require("../data/reviews.json");
      //this.reviews = this.arrWithRequiredImages(reviews);
   },
});