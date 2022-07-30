const product= document.querySelector('#product');
const company= document.querySelector('#company');
const connect= document.querySelector('#connect');
const ul1 = document.querySelector('#ul1');
const ul2 = document.querySelector('#ul2');
const ul3 = document.querySelector('#ul3');


product.addEventListener('click', ()=>{

    ul1.classList.toggle('show')
   
});


company.addEventListener('click', ()=>{

    ul2.classList.toggle('show')
  
   
})

connect.addEventListener('click', ()=>{

    ul3.classList.toggle('show')
   
})