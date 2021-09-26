const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let items = document.querySelectorAll('.page');
items[0].style.cssText = ` color: #1f9cff; opacity: 0.9; `;
let index = 0;

next.addEventListener('click', () =>{
  index += 1;
  if (index < items.length) {
    items [ index - 1 ].style.cssText= ` :hover: opacity : 0.2;`;
    items [ index ].style.cssText = `color: #1f9cff; opacity: 0.9;`;
  } else {
    index = 0;
    items [index].style.cssText= `color : #1f9cff; opacity: 0.9;`;
    items [ items.length -1 ].style.cssText= ` :hover: opacity : 0.2;`;
  }
});

prev.addEventListener('click', () =>{
  index -= 1;
  if (index >= 0) {
    index -= (index == items.length - 1) ? 1:0 ;
    items [ index + 1 ].style.cssText= ` :hover: opacity : 0.2;`;
    items [ index ].style.cssText = `color: #1f9cff; opacity: 0.9;`;
  } else {
    index = items.length;
    items [index].style.cssText= `color: #1f9cff; opacity: 0.2;`;
    items [ items.length -1 ].style.cssText= ` :hover: opacity : 0.9;`;
  }
});

