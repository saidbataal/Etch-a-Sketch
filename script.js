const box = document.querySelector(".container");


function numberOfDivs(number = 16) {
    

    const howMuch = number * number;

    for (let i = 0; i < howMuch; i++) {

        let size = 550 / number;


        const newDiv = document.createElement("div");


        newDiv.style.height = size + "px";
        newDiv.style.width = size + "px";
        newDiv.style.boxSizing = "border-box";
        newDiv.style.border = "1px solid black";
        newDiv.style.backgroundColor = "";
        newDiv.classList.add("myNewDiv");
        box.appendChild(newDiv);
    };


    
}
numberOfDivs();
 

function randomColor(){
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
return `rgb(${r},${g},${b})` ;




}







box.addEventListener("mouseover", (e) => {if(e.target.classList.contains("myNewDiv")){if(e.target.style.backgroundColor === "")
{e.target.style.backgroundColor = randomColor();}
}

})






const button = document.querySelector(".button");

button.addEventListener("click", () => {
    let numbers = prompt("enter a number between 1 and 100");
    if(numbers === null  ) return;
    let  value = Number(numbers);
     if ( isNaN(numbers) || value < 1 || value > 100  || value === "") { alert("enter a valid number") }
    else { box.innerHTML = ""; numberOfDivs(value); }
});















