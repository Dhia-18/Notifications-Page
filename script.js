const markRead = document.querySelector("button");
const numNotif = document.querySelector("#num-notif");
const notif = document.querySelectorAll(".notif");

markRead.addEventListener("click",()=>{
    notif.forEach(element=>{
        if(element.classList.contains("un-read")){
            element.classList.remove("un-read");
            element.querySelector(".notif-icon").classList.remove("notif-icon");
        }
    });
    numNotif.textContent="0";
});