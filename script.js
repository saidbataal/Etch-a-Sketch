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
        newDiv.classList.add("myNewDiv");


        box.appendChild(newDiv);
    };


    
}
numberOfDivs();







const button = document.querySelector(".button");

button.addEventListener("click", () => {
    let numbers = Number(prompt("enter a number between 1 and 100"))
   ; if (isNaN(numbers) || numbers < 1 || numbers > 100 || numbers === null || numbers === "") { alert("enter a valid number") }
    else { box.innerHTML = ""; numberOfDivs(numbers); }
});















