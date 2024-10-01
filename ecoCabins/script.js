// const swiper = new Swiper('.swiper', {
    
//     loop: true,
  
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });

  console.log("Hello!")

let lastScrollTop = 0; //змінна для збереження позиції останнього скролінгу
const header = document.querySelector('.header');

console.log(header);

window.addEventListener ('scroll', () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;//поточна позиція скролінгу
    if ((scrollTop > lastScrollTop) && (scrollTop > header.offsetHeight)) {
        header.classList.add('hidden');
    } else if (scrollTop < lastScrollTop) {
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});