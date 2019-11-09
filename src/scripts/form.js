import { functionDeclaration, yieldExpression } from "babel-types";

let myForm = document.querySelector('.form__elem');
let formButton = document.querySelector('.form__btn');
let formBlock = document.querySelectorAll('.form__block');
let userData = document.querySelectorAll('.form__input');
let overley = document.querySelector('.overley');
let noScroll = document.getElementsByTagName('body');
let overleyClose = document.querySelector('.overley__btn');

formButton.addEventListener('click', function(e) {
   e.preventDefault();
  
   if(validateForm(myForm)) {
      let data = new FormData;
      data.append("name", myForm.elements.name.value);
      data.append("phone", "89039077747");
      data.append("comment", myForm.elements.comment.value);
      data.append("to", myForm.elements.email.value);

      const xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('POST','https://webdev-api.loftschool.com/sendmail');
      xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      xhr.send(data);
      xhr.addEventListener('load', function () {
         if (xhr.response.status) {
            overley.style.display = 'block';
            noScroll[0].style.overflow = 'hidden';
         } else {
            overley.style.display = 'none';
         }
      }); 
   }
});

function validateForm(form) {
   let valid = true;
   let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   let regName = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
  
   let emailValue = myForm.elements.email.value;
   let nameValue = myForm.elements.name.value;
   let email = document.getElementById('email');
   let formBlockEmail = document.getElementById('formBlockEmail');
   let name = document.getElementById('name');
   let formBlockName = document.getElementById('formBlockName');

   for (let i = 0; i < userData.length; i++)
   for (let i = 0; i < formBlock.length; i++)
   
   if(!userData[i].value) {
      formBlock[i].classList.add('active');

      userData[i].addEventListener('focus', function(){
         if(formBlock[i].classList.contains('active')) {
            formBlock[i].classList.remove('active')
         }
      })   
   }

   if(regEmail.test(emailValue) == false) {
      formBlockEmail.classList.add('active');

      email.addEventListener('focus', function(){
         if(formBlockEmail.classList.contains('active')) {
            formBlockEmail.classList.remove('active')
         }
      });
   }
   

   if(regName.test(nameValue) == false) {
      formBlockName.classList.add('active');

      name.addEventListener('focus', function(){
         if(formBlockName.classList.contains('active')) {
            formBlockName.classList.remove('active')
         }
      });

      return false;
   }

  return valid;
}

overleyClose.addEventListener('click', function (e) {
   overley.style.display = 'none';
   noScroll[0].style.overflow="auto";
});



   
