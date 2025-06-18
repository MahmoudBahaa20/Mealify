let toggle = document.querySelector(".moonlg");
let lightMode=document.querySelector(".fa-sun");
let dark=document.querySelector(".moonbg")
let sun=document.querySelector(".sunLg")
let links=document.querySelectorAll("nav ul li")



toggle.addEventListener("click",function(){
    
    document.querySelector("html").classList.add("dark-mode");
    toggle.classList.add("d-none");
    lightMode.classList.remove("d-none");
   
});
lightMode.addEventListener("click",function(){
    document.querySelector("html").classList.remove("dark-mode");
    toggle.classList.remove("d-none");
    lightMode.classList.add("d-none");
});
dark.addEventListener("click",function(){
    document.querySelector("html").classList.add("dark-mode");
    dark.classList.add("d-none");
    sun.classList.remove("d-none");
});
sun.addEventListener("click",function(){
    document.querySelector("html").classList.remove("dark-mode");
    dark.classList.remove("d-none");
    sun.classList.add("d-none");
});
for(let i=0;i<links.length;i++){
    links[i].addEventListener("click",function(e){
        let activeLinks=document.querySelector("nav ul .active");
        activeLinks.classList.remove("active");
        e.target.classList.add("active");
    })
}