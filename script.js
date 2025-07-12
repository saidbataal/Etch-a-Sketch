const box = document.querySelector(".container");

const numberOfDivs = 16;

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


