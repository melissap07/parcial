 const loader = document.querySelector('.rainbow-marker-loader');
 const main = document.querySelector('.container');

 function init() {
     setTimeout(() =>{
         loader.style.opacity = 0;
         loader.style.display = 'none';

         main.style.display = 'block';
       setTimeout(() => main.style.opacity = 1,50 ) ;
     }, 4000);
 }

 init();