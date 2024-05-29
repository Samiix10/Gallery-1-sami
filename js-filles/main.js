const two = document.getElementById("two")
const Next = document.querySelector(".swiper-button-next")
const Perv = document.querySelector(".swiper-button-prev")
console.log(two, Next, Perv)
Next.style = "opacity:0;"
Perv.style = "opacity:0;"

two.addEventListener("mouseenter", function () {
  Next.style = "opacity:1; transition:.3s ease"
  Perv.style = "opacity:1;  transition:.3s ease"
})
two.addEventListener("mouseleave", function () { 
  Next.style = "opacity:0;transition:.3s ease"
  Perv.style = "opacity:0;transition:.3s ease"
})
// --------------------------------------------------
const nav = document.getElementById("navBar")
window.addEventListener("scroll", function () { 
  console.log(window.scrollY)
  if (window.scrollY > 160) {
    nav.classList.add("fixed-top")
  } else if (window.scrollY < 50) {
    nav.classList.remove("fixed-top")
  }
})
// ------------------------------------------------------

const toTop = document.getElementById("scrollTop")
window.addEventListener("scroll", function () { 
  if (window.scrollY > 500) {
    toTop.style = "display: flex;"
    toTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    })
  } else if (window.scrollY < 500) {
    toTop.style = "display: none;"
  }
})





// const lis = document.querySelectorAll(".dropdown-toggle")
// console.log(lis)
// lis.forEach((li) => {
//   li.addEventListener("mouseenter", (e) => {
//     console.log(e.currentTarget.dataset.bsToggle);
//     let x = e.currentTarget.parentNode.children[1]
//     console.log(x)
//     x.classList.add("show")
//   })
//   li.addEventListener("onblur", (e) => {
//     console.log(e.currentTarget.dataset.bsToggle);
//     let x = e.currentTarget.parentNode.children[1]
//     console.log(x)
//     x.classList.remove("show")
//   })
// })