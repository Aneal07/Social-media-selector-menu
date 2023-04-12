const menuEl =document.querySelector(".menu");
const menuTextEl =document.querySelector(".menu p");
const socialListsEl =document.querySelector(".social-lists");
const listsEl=document.querySelectorAll(".social-lists li")


menuEl.addEventListener("click", ()=>{
    socialListsEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});


listsEl.forEach(listsEl =>{
    listsEl.addEventListener("click", ()=>{
        menuTextEl.innerHTML = listsEl.innerHTML;
        socialListsEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    });
});