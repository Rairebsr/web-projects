const containerE1 = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerE1 = document.createElement("div");
    colorContainerE1.classList.add("color-container");
    containerE1.appendChild(colorContainerE1);

    
}

const colorContainersE1 = document.querySelectorAll(".color-container");
generateColor();


function generateColor(){
    colorContainersE1.forEach((colorContainerE1)=>{
        const newColorCode = randomcolor();
        colorContainerE1.style.backgroundColor = "#"+ newColorCode;
        colorContainerE1.innerText = "#"+ newColorCode;
    });
}



function randomcolor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum,randomNum + 1);
    
    }
    return colorCode;
}