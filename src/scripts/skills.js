import Vue from "vue";
import axios from "../admin/requests";

const skill = {
   template: "#skill",
   props: ["skillName", "skillPercent"],
   methods: {
      drawColorCircle() {
         const circle = this.$refs["color-circle"];
         const dashArray = parseInt(
         getComputedStyle(circle).getPropertyValue('stroke-dasharray')
         );
         const persent = (dashArray / 100) * (100 - this.skillPercent);

         circle.style.strokeDashoffset = persent;
      }
   },
   mounted() {
      this.drawColorCircle();
   }
}

const skillsRow = {
   template: "#skills-row",
   components: { skill },
   props: ["skill"]
};

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  data: () => ({
     skills: []
  }),
  components: { skillsRow },
  created() {
    axios.get("https://webdev-api.loftschool.com/categories/220").then(response => {this.skills = response.data});    
  }
});