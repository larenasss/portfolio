import Vue from "vue";
import axios from "../admin/requests";

const thumbs = {
   template: "#slider-thumbs",
   props: ["works", "currentWork"],
   computed: {
      reversedWorks() {
         return [...this.works].reverse();
      }
   }
}

const btns = {
   template: "#slider-btns"
}

const display = {
   template: "#slider-display",
   components: { thumbs, btns },
   props: ["works", "currentWork"]
}

const tags = {
   template: "#slider-tags",
   props: ["tags"]
}

const info = {
   template: "#slider-info",
   components: { tags },
   props: ["currentWork"],
   computed: {
      tagsArray() {
        //return this.currentWork.techs.split(',').filter(el => el.trim())
        
      }
   }
}

new Vue ({
   el: "#slider-component",
   template: "#slider-container",
   components: { display, info },
   data: () => ({
      works: [],
      currentIndex: 0
   }),
   computed: {
      currentWork() {
         return this.works[this.currentIndex];
      },
   },
   watch: {
      currentIndex(value) {
         if (value < 0) this.currentIndex = this.works.length -1;
         if (value > this.works.length - 1) this.currentIndex = 0;
      }
   },
   methods: {
      handleSlide(direction) {
         switch(direction) {
            case "next" :
               this.currentIndex++;
               break;
            case "prev" :
               this.currentIndex--;
               break;
         }
      },
      handlePreviewClick(previewId) {
        this.currentIndex = previewId - 1;
      }
   },
   created() {
      axios.get("https://webdev-api.loftschool.com/works/220").then(response => {this.works = response.data});
   }
});