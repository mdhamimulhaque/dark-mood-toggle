const body = document.querySelector("body");
const iconBox = document.querySelector(".img-box");
const icon = document.querySelector("#icon");


iconBox.addEventListener("click",()=>{
  body.classList.toggle("dark-mood");

// --------- icon-set ----
if(body.classList.contains("dark-mood")){
   icon.src = "./image/002-moon.png";
}else{
icon.src = "./image/001-sunny.png";
}

});