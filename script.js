const Togglebutton = document.querySelector('.toggle-button');
const AsideContainer = document.querySelector('.aside-container');
const Closed = document.querySelector('.closed');

Togglebutton.addEventListener('click',()=>{
//    if(AsideContainer.classList.contains('show-aside-container') === false){
//          AsideContainer.classList.add('show-aside-container');
//    }
//    else{
//        AsideContainer.classList.remove('show-aside-container');
//    }
   AsideContainer.classList.toggle('show-aside-container');
})

Closed.addEventListener('click',()=>{
    AsideContainer.classList.remove('show-aside-container');
})