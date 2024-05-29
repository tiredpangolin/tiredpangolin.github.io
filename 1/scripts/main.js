let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/dice-1.svg") {
        myImage.setAttribute("src", "images/dice-2.svg");
    } else {
        myImage.setAttribute("src", "images/dice-1.svg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");



function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem(`name`, myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Bruh my name is, ${storedName}`;
    }

function sum(x, y) {
        return x + y
    }
    
    console.log (sum(3, 5));

myButton.onclick = () => {
    setUserName();
};