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
