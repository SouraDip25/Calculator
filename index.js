let userInput = document.querySelector(".input");
let button = document.querySelectorAll("button");



button.forEach((element)=>{
     
    element.addEventListener("click" , (e)=>{

        if(e.target.textContent === "AC"){
            userInput.innerHTML = ""
        }else if(e.target.textContent === "DEL"){
            userInput.innerHTML = userInput.innerHTML.slice(0 , -1)
        }else if(e.target.textContent === "="){
            userInput.innerHTML = eval(userInput.innerHTML)
        }
        else{
            userInput.innerHTML += e.target.textContent
        }

    })
})