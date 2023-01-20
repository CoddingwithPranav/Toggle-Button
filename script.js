const input = document.querySelector(".input");
const body = document.querySelector("body");

input.Checked = JSON.parse(localStorage.getItem("mode") );
    
console.log(input.Checked)



function bodyUpdate(){
    if(input.checked){

       body.style.background ="black";
    }
    else{
        body.style.background ="white";
    }
}

input.addEventListener("input" ,()=>{
    bodyUpdate();
    updatelocalstorage()
})
 

function updatelocalstorage(){
    localStorage.setItem("mode", JSON.stringify(input.checked))
}





