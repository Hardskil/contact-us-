'use strict'
let div = document.getElementsByClassName('myDiv');
for (let i = 0; i < div.length; i++) {
  div[i].addEventListener('click', function() {
    let link = this.getAttribute('data-link');
    window.open(link, '_blank');
  });
}


const sr = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 2000,
  reset: false
});

sr.reveal(`.main_column, .cl,main_column_2`, {
  interval: 200
})  