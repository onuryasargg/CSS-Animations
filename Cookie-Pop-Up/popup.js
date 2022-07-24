let cookieModal = document.querySelector(".cookies-box")
let acceptCookieBtn = document.querySelector(".accept")
let cancelCookieBtn = document.querySelector(".cancel")
let closeCookieBtn = document.querySelector(".close-btn")

acceptCookieBtn.addEventListener("click", function(){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted","yes")
    })

cancelCookieBtn.addEventListener("click", function(){
cookieModal.classList.remove("active")
})
closeCookieBtn.addEventListener("click", function(){
    cookieModal.classList.remove("active")
    })

setTimeout(function(){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModal.classList.add("active")
    }
},2000)