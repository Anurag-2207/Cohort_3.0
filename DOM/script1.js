const bulb = document.querySelector(".bulb");
const btn = document.querySelector("button");
//  changing the bulb colour using addeveent listner

// var flag=true;
// btn.addEventListener("click", function () {
//     if(flag){
//         bulb.style.backgroundColor ="blue";  
//     btn.textContent="OFF";
//         flag=false;
//     }
//     else{
//         bulb.style.backgroundColor ="Yellow";  
//     btn.textContent="ON";
//     flag=true;
//     }
// });


// --classlist se bhi hota hai par ithna matalab hota haii
btn.addEventListener("click",()=>{
    if(bulb.classList.toggle("light")){
        btn.textContent="OFF";
    }
    else{
        btn.textContent="ON";
    }
})