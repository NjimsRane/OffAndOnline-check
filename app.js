const title = document.querySelector("p[id=title] span");
// if(window.navigator.onLine){
//     setOnLine();
// }else{
//     setOffLine();
// }
// window.addEventListener("online",function(){
//     setOnLine();
// })
// window.addEventListener("offline",function(){
//     setOffLine();
// })

// function setOnLine(){
//     title.textContent = "OnLine";
//     title.style.color ="green";
// }
// function setOffLine(){
//     title.textContent = "OffLine";
//     title.style.color ="red";
// }

if(window.navigator.onLine){
    getOnLine()
}else{
    getOffLine()
}
window.addEventListener("online",function(){
    getOnLine();
})

window.addEventListener("offline",function(){
    getOffLine();
})


function  getOffLine(){
    title.textContent = 'OffLine';
    title.style.color = 'red';
}
function  getOnLine(){
    title.textContent = 'OnLine';
    title.style.color = 'green';
}