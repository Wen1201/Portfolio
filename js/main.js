
// const boxContainer = document.querySelector(".boxContainer")
// const saluteTextContainer = document.querySelector(".saluteTextContainer")
// const saluteImgContainer = document.querySelector(".saluteImgContainer")
// const authorName = document.querySelector(".name")
// const jobTitleContainers = document.querySelectorAll(".jobTitleContainer")
// const jobTitles = document.querySelectorAll(".jobTitle")
// const projectsTitle = document.querySelector(".projectsTitle")
// const phones = document.querySelectorAll(".phone")
// const laptop = document.querySelector(".laptop")

// window.addEventListener("scroll", ()=>{
//     let offsetY = window.scrollY
//     saluteTextContainer.style.transform= `translateY(${offsetY * 0.1}px)`
//     saluteImgContainer.style.transform= `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`
//     authorName.style.transform= `translateX(${offsetY * 0.1}px)`
//     jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`
//     jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
//     jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`
//     jobTitles[1].style.transform = `translateX(calc(-200vh + ${offsetY}px))`
//     projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`
//     phones[0].style.transform = `translateX(calc(500vh - ${offsetY}px))`
//     laptop.style.transform = `translateX(calc(600vh - ${offsetY}px))`
//     phones[1].style.transform = `translateX(calc(750vh - ${offsetY}px))`
//   })

const ironman = document.getElementById('div');
ironman.style.marginLeft = '40%';
direction = -1;
const iWalk = function(){
  const currentLeft = parseInt(ironman.style.marginLeft);
   if (currentLeft !==1) {
     direction = -1;
     ironman.style.marginLeft = `${currentLeft + direction}%`
    } else {
     ironman.style.marginLeft = `${currentLeft}%`   
   }
 };
window.setInterval(iWalk, 100);

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#e2e2e2';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
Footer
