(function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50){
            header.classList.add('header_active')
        }
        else{
            header.classList.remove('header_active')
        }
    }
}());


(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav')
    const menuItem = document.querySelector('.header_list')
    const menuCloseItem = document.querySelector('.header_nav_close')
    menuItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
}());


(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());


{/* <h2 id="searchModalTitle"></h2>
<div class="loader"></div>
<button id="closeModal">✕</button> */}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search_form');
    const modal = document.getElementById('searchModal');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputGo = document.querySelector('input[name="user_like_to_go"]');
        const inputDo = document.querySelector('input[name="user_like_to_do"]');
  
        if (inputGo.value && inputDo.value) {     
            
            document.querySelector('.search_form_submit').classList.add('disable');

            const modalTitle = document.createElement('h1');
            modalTitle.className = "search_modal_title";
            modalTitle.textContent = "Поиск:"
            modal.appendChild(modalTitle);

            const Gotext = document.createElement('h2');
            Gotext.className = "godo_text";
            modal.appendChild(Gotext);

            const Dotext = document.createElement('h2');
            Dotext.className = "godo_text";
            modal.appendChild(Dotext);

            const loader = document.createElement('div');
            loader.className = "loader";
            modal.appendChild(loader);

            const closeModal = document.createElement('span');
            closeModal.className = "close_modal";
            closeModal.innerHTML = "&times;";
            modal.appendChild(closeModal);

            Gotext.innerHTML = `Куда: ${inputGo.value}`;
            Dotext.innerHTML = `Чем: ${inputDo.value}`;

            modal.style.display = 'block';


            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
                modalTitle.remove();
                Gotext.remove();
                Dotext.remove();
                loader.remove();
                closeModal.remove();
                document.querySelector('.search_form_submit').classList.remove('disable');
              });
        }

        
    });
  
    
  });




/* Форма и валидация */

const modal = document.getElementById('modal');
const btn = document.getElementById('show-modal');
const span = document.getElementsByClassName('close_form')[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const form = {
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    phone: document.getElementById('phone'),
    firstname: document.getElementById('firstname'),
    lastname: document.getElementById('lastname'),
    button: document.querySelector('.form_button'),

    errorEmail: document.querySelector('.input_error_email'),
    errorPassword: document.querySelector('.input_error_password'),
    errorPhone: document.querySelector('.input_error_phone'),
    errorFirstname: document.querySelector('.input_error_firstname'),
    errorLastname: document.querySelector('.input_error_lastname'),
}

function checkForm(){
    const email = form.email.getElementsByTagName('input')[0].value
    const password = form.password.getElementsByTagName('input')[0].value
    const phone = form.phone.getElementsByTagName('input')[0].value
    const firstname = form.firstname.getElementsByTagName('input')[0].value
    const lastname = form.lastname.getElementsByTagName('input')[0].value
    
    form.email.getElementsByTagName('input')[0].value

    if(email && password && phone && firstname && lastname){
        form.button.classList.remove('disable')
    }
    else{
        form.button.classList.add('disable')
    }
}

function handleInput (e, name){
    const {value} = e.target
    if(value){
        form[name].classList.add('filed')
    }
    else{
        form[name].classList.remove('filed')
    }
    checkForm()
}


function validateEmail(){
    const {value} = form.email.getElementsByTagName('input')[0]
    const reg = /^[a-z]{3,20}@[a-z]{3,10}\.[a-z]{2,4}$/
    if (reg.test(value)){
        form.email.classList.remove('error')
        form.errorEmail.classList.remove('view')
    }
    else{
        form.button.classList.add('disable')
        form.email.classList.add('error')
        form.errorEmail.classList.add('view')
    }
}


function validatePassword(){
    const {value} = form.password.getElementsByTagName('input')[0]
    const reg = /(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,20}/
    if (reg.test(value)){
        form.password.classList.remove('error')
        form.errorPassword.classList.remove('view')
    }
    else{
        form.button.classList.add('disable')
        form.password.classList.add('error')
        form.errorPassword.classList.add('view')
    }
}

function validateЗhone(){
    const {value} = form.phone.getElementsByTagName('input')[0]
    const reg = /^\+7[0-9]{10}$/
    if (reg.test(value)){
        form.phone.classList.remove('error')
        form.errorPhone.classList.remove('view')
    }
    else{
        form.button.classList.add('disable')
        form.phone.classList.add('error')
        form.errorPhone.classList.add('view')
    }
}

function validateLastname(){
    const {value} = form.lastname.getElementsByTagName('input')[0]
    const reg = /^[А-Я]{1}[а-я]{1,40}$/
    if (reg.test(value)){
        form.lastname.classList.remove('error')
        form.errorLastname.classList.remove('view')
    }
    else{
        form.button.classList.add('disable')
        form.lastname.classList.add('error')
        form.errorLastname.classList.add('view')
    }
}

function validateFirstname(){
    const {value} = form.firstname.getElementsByTagName('input')[0]
    const reg = /^[А-Я]{1}[а-я]{1,40}$/
    if (reg.test(value)){
        form.firstname.classList.remove('error')
        form.errorFirstname.classList.remove('view')
    }
    else{
        form.button.classList.add('disable')
        form.firstname.classList.add('error')
        form.errorFirstname.classList.add('view')
    }
}


// function deleteError (e, name){
//     form[name].classList.remove('error')
//     form[name].classList.remove('view')
// }

function deleteErrorEmail(){
    form.email.classList.remove('error')
    form.errorEmail.classList.remove('view')
}

function deleteErrorPassword(){
    form.password.classList.remove('error')
    form.errorPassword.classList.remove('view')
}

function deleteErrorLastname(){
    form.lastname.classList.remove('error')
    form.errorLastname.classList.remove('view')
}

function deleteErrorFirstname(){
    form.firstname.classList.remove('error')
    form.errorFirstname.classList.remove('view')
}

function deleteErrorPhone(){
    form.phone.classList.remove('error')
    form.errorPhone.classList.remove('view')
}

function SignIn(){
    alert('Вы вошли')
    modal.style.display = "none";
    
    form.email.getElementsByTagName('input')[0].value = '';
    form.password.getElementsByTagName('input')[0].value = '';
    form.phone.getElementsByTagName('input')[0].value = '';
    form.firstname.getElementsByTagName('input')[0].value = '';
    form.lastname.getElementsByTagName('input')[0].value = '';

    form.phone.classList.remove('filed')
    form.password.classList.remove('filed')
    form.email.classList.remove('filed')
    form.firstname.classList.remove('filed')
    form.lastname.classList.remove('filed')

}


form.email.oninput = (e) => handleInput(e,'email')
form.password.oninput = (e) => handleInput(e,'password')
form.firstname.oninput = (e) => handleInput(e,'firstname')
form.lastname.oninput = (e) => handleInput(e,'lastname')
form.phone.oninput = (e) => handleInput(e,'phone')

form.button.onclick = SignIn

form.email.getElementsByTagName('input')[0].onblur = validateEmail
form.email.getElementsByTagName('input')[0].onfocus = deleteErrorEmail

form.password.getElementsByTagName('input')[0].onblur = validatePassword
form.password.getElementsByTagName('input')[0].onfocus = deleteErrorPassword

form.phone.getElementsByTagName('input')[0].onblur = validateЗhone
form.phone.getElementsByTagName('input')[0].onfocus = deleteErrorPhone

form.lastname.getElementsByTagName('input')[0].onblur = validateLastname
form.lastname.getElementsByTagName('input')[0].onfocus = deleteErrorLastname

form.firstname.getElementsByTagName('input')[0].onblur = validateFirstname
form.firstname.getElementsByTagName('input')[0].onfocus = deleteErrorFirstname





/* Лайки */

// const post_like = document.querySelector('.top_card_pic');
// const like_add = document.querySelector('.top_card_likes_value');
// const like_ico = document.querySelector('.top_card_likes_ico');

// //like_add.innerText='No';


// post_like.addEventListener('dblclick', () => {
//     var currentValue = parseInt(like_add.innerText);
//     var newValue = currentValue + 1;
//     like_add.innerText = newValue;



//     like_ico.classList.add('top_card_likes_add_like');
//     setTimeout(()=>{
//         like_ico.classList.remove('top_card_likes_add_like');
//     }, 1000)
// })




const cards = document.querySelectorAll('.top_card'); 

cards.forEach(card => {

  const postLike = card.querySelector('.top_card_pic');
  const likeAdd = card.querySelector('.top_card_likes_value');
  const likeAnim = card.querySelector('.top_card_likes_ico');
  const likeIco = card.querySelector('.top_card_likes');

  let isLiked = false;

  postLike.addEventListener('dblclick', () => {

    // let currentValue = parseInt(likeAdd.innerText);
    // let newValue = currentValue + 1;
    // likeAdd.innerText = newValue;

    // likeIco.classList.add('top_card_likes_add_like');
    // setTimeout(() => {
    //   likeIco.classList.remove('top_card_likes_add_like');
    // }, 1000);

    if(isLiked) {     
        likeAdd.innerText = parseInt(likeAdd.innerText) - 1;
        likeIco.style.background = 'url(../img/svg/heart_ico.svg) no-repeat right';
        isLiked = false;
    
    }else {    
        likeAdd.innerText = parseInt(likeAdd.innerText) + 1;
    
        likeAnim.classList.add('top_card_likes_add_like');
        likeIco.style.background = 'url(../img/svg/heart_active_ico.svg) no-repeat right';

        setTimeout(() => {
            likeAnim.classList.remove('top_card_likes_add_like');

        }, 1000);
    
        isLiked = true;
    
      }
  });
});







