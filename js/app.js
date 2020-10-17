/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


const pageHeader   = document.getElementById('pageHeaderId'),
      navbarList   = document.getElementById('navbar__list'),
      myBtn     = document.getElementById('up__btn');
      

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav

for (let i = 1; i <= 5; i++) {
  // Create li elements
    const newLi = document.createElement('li');
    navbarList.appendChild(newLi);
  // Create anchors inside every (li)
    const newAnchor = document.createElement('a');
    newAnchor.innerText = 'Section ' + i;
    newAnchor.classList.add('menu__link');
    newAnchor.setAttribute("data-link","section"+ [i]);
    newLi.appendChild(newAnchor);
  };


/**
 * End Main Functions
 * Begin Events
 * 
*/


// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', ()=> {
    for (let i = 1; i <= 5; i++) {
      let sectionNum = document.getElementById('section' + i);
      let fromTop = window.pageYOffset; 
        if (
          sectionNum.offsetTop < fromTop &&
          sectionNum.offsetTop + sectionNum.offsetHeight > fromTop
        ) {
          sectionNum.classList.add('your-active-class');
        } else {
          sectionNum.classList.remove('your-active-class');
        }
    }
});
// Hide fixed navigation bar while not scrolling

//___ I think this part it not important now, so i commented it .


/* let prevScoll = window.pageYOffset;

document.addEventListener('scroll', ()=> {

  let currentScroll = window.pageYOffset;

  if(prevScoll > currentScroll){
    
    pageHeader.style.top ='0'

  } else {

    pageHeader.style.top = '-100px';

  }
  prevScoll = currentScroll;
});  */

// Add a scroll to top button event with scroll To

myBtn.addEventListener('click', ()=>{
  window.scrollTo(0, 0);
});

//Active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('nav ul li a');
  let fromTop = window.pageYOffset;
 
  navigationLinks.forEach(link => {
    let dataLink = document.getElementById(link.getAttribute('data-link'))
   
    if (
      dataLink.offsetTop < fromTop &&
      dataLink.offsetTop + dataLink.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  // make the go up button appers
    if (fromTop > 2000)
    {
      myBtn.style.display = 'block';
    }else{
      myBtn.style.display = 'none'
    }

  });
});

// Scroll to section on link click
const links = document.querySelectorAll('.menu__link');

links.forEach((item)=>{
    item.addEventListener('click', ()=>
    {
      let el = document.getElementById(item.getAttribute('data-link'));
      el.scrollIntoView({behavior:'smooth',block:'start'});
    });
    
});