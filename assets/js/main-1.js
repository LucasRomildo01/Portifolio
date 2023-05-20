import { projetos } from "./certificado.js";




const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const toggle = document.querySelector("#sw-checkbox");
const projectsSection = document.querySelector("#projects .wrapper");

const notebook_1 = document.querySelector("#notebook-1");
const notebook_2 = document.querySelector("#notebook-2");
const notebook_2_white = document.querySelector("#notebook-2-white");
const vidro = document.querySelector("#vidro");

window.addEventListener("load", function begin() {
  projetos(projectsSection);
  const desafioBtn = document.querySelector("#desafio");

  desafioBtn.addEventListener("click", () => {
    desafios(projectsSection);
    document
      .querySelector("#backToProjectsBtn")
      .addEventListener("click", begin);
  });
});

window.addEventListener("scroll", onScroll);
onScroll();

window.onload = setTimeout(() => {
  notebook_1.style.opacity = 0;

  notebook_1.style.animation = "none";
  notebook_2.style.animation = "none";
  notebook_2_white.style.animation = "none";
  vidro.style.animation = "none";
}, 4000);

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(projects);
  activateMenuAtCurrentSection(knowledge);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

openMenu();
function openMenu() {
  const openBtns = document.querySelectorAll(".open");
  openBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.add("menu-expanded");
    });
  });
}

closeMenu();
function closeMenu() {
  const closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.remove("menu-expanded");
    });
  });
}

ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
}).reveal(
  `#home, 
  #home img, 
  #about, 
  #about header, 
  #about p,
  #about img,
  #projects,
  #projects header,
  #projects .card,
  #knowledge,
  #knowledg header,
  #knowledg .card,
  #contact,
  #contact header`
);

toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});



















































$(document).ready(function () {
  $(window).scroll(function () {
      if (this.scrollY > 20) {
          $(".navbar").addClass("sticky");
      } else {
          $(".navbar").removeClass("sticky");
      }
  });
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

 // typing animation script
  var typed = new Typed(".typing",{
      strings: ["programador front-end","desenvolvedor web","futuro dev back-end","engenheiro de software"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      fadeOut: true,
      
  });
  var typed = new Typed(".typing-2",{
      strings: ["Your Skill","Your Hobby","Your Passion","Your Proficiency"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
  });
});