// BARAKAT
// HEADER
const menuIcon = document.querySelector(".menu-icon");
const menuItems = document.querySelector(".menu-items");
const collapse = document.querySelector(".collapsible");
const closeBtn = document.querySelector(".close-icon");
// 
menuIcon.addEventListener("click", ()=>{
    collapse.classList.toggle("hide");
})
closeBtn.addEventListener("click", ()=>{
    collapse.classList.toggle("hide");
})

// SECTION SEVEN
const pagination = document.querySelectorAll(".control");
const slideCard = document.querySelectorAll(".ccard")
  const sliderContainer = document.querySelector(".card-collections");
console.log(slideCard);
console.log(pagination);
pagination.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    setTimeout(function(){
      window.scrollBy(0,-1)
    },1000)
    console.log("display");
  })
})


// BARAKAT 

//FAVOUR START

function footer2() {
    let x = document.getElementById("footer-2-text");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("arrowF2").style.transform = "rotate(0deg)"
    } else {
      x.style.display = "block";
      document.getElementById("arrowF2").style.transform = "rotate(90deg)"
    }
  }
function footer3() {
    let x = document.getElementById("footer-3-text");
    
    if (x.style.display === "block"){
      x.style.display = "none";
      document.getElementById("arrowF3").style.transform = "rotate(0deg)"
    } else {
      x.style.display = "block";
      document.getElementById("arrowF3").style.transform = "rotate(90deg)"
    }
  }
function footer4() {
    let x = document.getElementById("footer-4-text");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("arrowF4").style.transform = "rotate(0deg)"
    } else {
      x.style.display = "block";
      document.getElementById("arrowF4").style.transform = "rotate(90deg)"
    }
  }
function footer5() {
    let x = document.getElementById("footer-5-text");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("arrowF5").style.transform = "rotate(0deg)"
    } else {
      x.style.display = "block";
      document.getElementById("arrowF5").style.transform = "rotate(90deg)"
    }
  }
function footer6() {
    let x = document.getElementById("footer-6-text");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById("arrowF6").style.transform = "rotate(0deg)"
    } else {
      x.style.display = "block";
      document.getElementById("arrowF6").style.transform = "rotate(90deg)"
    }
  }
//FAVOUR END

// nav scroll funtionality
window.onscroll = function() {scrollFunction()};
const header = document.querySelector("header")
const searchIcon = document.querySelector(".search-icon1 .fa-solid")
const searchIcon2 = document.querySelector(".search-icon2 .fa-solid")
const menuIcon1 = document.querySelector(".menu-icon .fa-solid")
const logo1 = document.querySelector('.logo1')
const logo = document.querySelector('.logo')
const menuItem = document.querySelectorAll('.menu-items .menu-link a')
const signIn = document.querySelector(".signIn")
const tSales = document.querySelector(".tSales")
const nWorkspace = document.querySelector(".nWorkspace")

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.top = "0";
    header.style.backgroundColor = "#fff";
    header.style.position = "fixed"
    header.style.width = "100%"
    header.style.transition = "top .7s"
    header.style.zIndex = "999"
    searchIcon.style.color = "black"
    menuIcon1.style.color = "black"
    logo.style.display = "none"
    logo1.style.display = "block"
    menuItem.forEach(item => {
      item.style.color = "black"
    })
    signIn.style.color = "black"
    searchIcon2.style.color = "black"
    tSales.style.color = "#4a154b"
    tSales.style.border = "2px solid #4a154b"
    nWorkspace.style.backgroundColor = "#4a154b"
    nWorkspace.style.color = "white"
  } else {
    header.style.top = "-50px";
    header.style.backgroundColor = "#4a154b";
    header.style.position = "sticky";
    header.style.transition = "top .7s"
    searchIcon.style.color = "white"
    menuIcon1.style.color = "white"
    logo1.style.display = "none"
    logo.style.display = "block"
    menuItem.forEach(item => {
      item.style.color = "white"
    })
    signIn.style.color = "white"
    searchIcon2.style.color = "white"
    tSales.style.color = "white"
    tSales.style.border = "2px solid white"
    nWorkspace.style.backgroundColor = "white"
    nWorkspace.style.color = "#4a154b"
  }
}