const box = document.querySelector(".container");


function numberOfDivs(number){
const numberOfDivs = number;

const howMuch = numberOfDivs * numberOfDivs;

for(let i = 0; i < howMuch; i++){

let size = 550 / numberOfDivs;


const newDiv  = document.createElement("div");


newDiv.style.height = size + "px";
newDiv.style.width = size + "px";
newDiv.style.boxSizing ="border-box";
newDiv.style.border = "1px solid black";
newDiv.classList.add("myNewDiv");


box.appendChild(newDiv);
};


const coloring = document.querySelectorAll(".myNewDiv");



coloring.forEach(button => {
    button.addEventListener("mouseenter" , () => {
        button.style.backgroundColor = "red";
   });
});
}
numberOfDivs(16);

const button = document.querySelector(".button");

button.addEventListener("click" , () => {let numbers = prompt("enter a number between 1 and 100");
                                         Number(numbers);if(isNaN(numbers) ||numbers < 1 || numbers > 100 || numbers === null || numbers === ""){alert("enter a valid number")}
                             else {box.innerHTML = "";numberOfDivs(numbers);}
                        });
