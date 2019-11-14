(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{587:function(e,t,i){},591:function(e,t,i){"use strict";var r=i(587);i.n(r).a},594:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"reviews"},[i("div",{staticClass:"container"},[i("h1",{staticClass:"reviews__title"},[e._v(' Блок "Отзывы"')]),e.isShown?i("div",{staticClass:"reviews__content"},[i("form",{staticClass:"reviews__form",on:{submit:function(t){return t.preventDefault(),e.addNewReview(t)}}},[i("div",{staticClass:"form__title reviews__form-title"},[e._v("Новый отзыв")]),i("div",{staticClass:"form__content"},[i("div",{staticClass:"user"},[i("label",{staticClass:"user__img"},[i("input",{staticClass:"user__input",attrs:{type:"file"},on:{change:e.appendFileAndRenderFoto}}),i("div",{staticClass:"reviews__form-pic"},[i("div",{staticClass:"reviews__form-avatar-empty",class:{filled:e.renderedPhoto.length},style:{backgroundImage:"url("+e.renderedPhoto+")"}})]),i("div",{staticClass:"user__link"},[e._v("Добавить фото")]),e.isError?i("div",{staticClass:"input__error"},[e._v(e._s(this.validation.firstError("editedReview.photo")))]):e._e()])]),i("div",{staticClass:"form"},[i("div",{staticClass:"form__row"},[i("label",{staticClass:"form__block",attrs:{for:""}},[i("div",{staticClass:"form__block-title"},[e._v("Имя автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.editedReview.author,expression:"editedReview.author"}],staticClass:"form__input",attrs:{type:"text",name:"name",placeholder:"Новый навык"},domProps:{value:e.editedReview.author},on:{input:function(t){t.target.composing||e.$set(e.editedReview,"author",t.target.value)}}}),e.isError?i("div",{staticClass:"input__error"},[e._v(" "+e._s(this.validation.firstError("editedReview.author")))]):e._e()]),i("label",{staticClass:"form__block",attrs:{for:""}},[i("div",{staticClass:"form__block-title"},[e._v("Должность автора")]),i("input",{directives:[{name:"model",rawName:"v-model",value:e.editedReview.occ,expression:"editedReview.occ"}],staticClass:"form__input",attrs:{type:"text",name:"name",placeholder:"Новый навык"},domProps:{value:e.editedReview.occ},on:{input:function(t){t.target.composing||e.$set(e.editedReview,"occ",t.target.value)}}}),e.isError?i("div",{staticClass:"input__error"},[e._v(" "+e._s(this.validation.firstError("editedReview.occ")))]):e._e()])]),i("div",{staticClass:"form__row form__row--textarea"},[i("label",{staticClass:"form__block form__block--textarea",attrs:{for:""}},[i("div",{staticClass:"form__block-title form__block-title--textarea"},[e._v("Отзыв")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.editedReview.text,expression:"editedReview.text"}],staticClass:"form__input form__input--textarea",attrs:{name:"message",placeholder:"Сообщение к письму"},domProps:{value:e.editedReview.text},on:{input:function(t){t.target.composing||e.$set(e.editedReview,"text",t.target.value)}}}),e.isError?i("div",{staticClass:"input__error"},[e._v(" "+e._s(this.validation.firstError("editedReview.text")))]):e._e()])]),i("div",{staticClass:"form__row form__row-btn"},[i("button",{staticClass:"form__row-link",on:{click:function(t){e.isShown=!1}}},[e._v("Отмена")]),i("button",{staticClass:"form__row-button"},[e._v("Сохранить")])])])])])]):e._e(),i("ul",{staticClass:"reviews__items"},[i("li",{staticClass:"reviews__item reviews__add"},[i("button",{staticClass:"reviews__add-btn",on:{click:e.createForm}}),i("div",{staticClass:"reviews__add-desk"},[e._v("Добавить отзыв")])]),e._l(e.reviews,function(t){return i("reviewItem",{key:t.id,attrs:{review:t},on:{editedExistedReview:e.editedExistedReview}})})],2)])])};r._withStripped=!0;var s=i(168),o=i(420);function a(e,t,i,r,s,o,a){try{var n=e[o](a),d=n.value}catch(e){return void i(e)}n.done?t(d):Promise.resolve(d).then(r,s)}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},r=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),r.forEach(function(t){d(e,t,i[t])})}return e}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var c={components:{reviewItem:function(){return i.e(8).then(i.bind(null,598))}},mixins:[i(420).mixin],validators:{"editedReview.author":function(e){return o.Validator.value(e).required("Добавьте имя")},"editedReview.occ":function(e){return o.Validator.value(e).required("Добавьте профессию")},"editedReview.photo":function(e){return o.Validator.value(e).required("Добавьте фото")},"editedReview.text":function(e){return o.Validator.value(e).required("Добавьте описание")}},data:function(){return{review:{author:"",occ:"",photo:"",text:""},renderedPhoto:"",editedReview:n({},this.review),isEdit:!1,isShown:!1,isError:!1}},created:function(){this.fethReview()},computed:n({},Object(s.c)("reviews",{reviews:function(e){return e.reviews}})),methods:n({},Object(s.b)("reviews",["fethReview","addReview","editReview"]),{createForm:function(){this.isEdit=!1,this.renderedPhoto="",this.isShown=!0,this.editedReview=n({},this.review)},appendFileAndRenderFoto:function(e){var t=this,i=e.target.files[0];this.editedReview.photo=i;var r=new FileReader;try{r.readAsDataURL(i),r.onload=function(){t.renderedPhoto=r.result}}catch(e){}},editedExistedReview:function(e){this.isEdit=!0,this.isShown=!0,this.editedReview=e,this.renderedPhoto="https://webdev-api.loftschool.com/"+e.photo},addNewReview:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$validate().then(function(e){if(e)try{t.isEdit?(t.editReview(t.editedReview),t.isShown=!1):(t.addReview(t.editedReview),t.isShown=!1,t.renderedPhoto="")}catch(e){}else t.isError=!0});case 1:case"end":return e.stop()}},e,this)}),function(){var t=this,i=arguments;return new Promise(function(r,s){var o=e.apply(t,i);function n(e){a(o,r,s,n,d,"next",e)}function d(e){a(o,r,s,n,d,"throw",e)}n(void 0)})});return function(){return t.apply(this,arguments)}}()})},l=(i(591),i(108)),v=Object(l.a)(c,r,[],!1,null,null,null);v.options.__file="src/admin/components/pages/reviews.vue";t.default=v.exports}}]);