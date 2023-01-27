let myImamg = document.querySelector("img");
let myBnt = document.querySelector("button");
let myHeading = document.querySelector("h1");
myImamg.addEventListener("click", function () {
  let mySrc = myImamg.getAttribute("src");
  if (mySrc === "images/test1/Joan of Arc(alter)2.png") {
    myImamg.setAttribute("src", "images/JoanofArc2.png");
  } else if (mySrc === "images/JoanofArc2.png") {
    myImamg.setAttribute("src", "images/test1/Joan of Arc(alter)2.png");
  }
});
myBnt.addEventListener("click", function () {
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `Joan of Arc(alter) so beautiful ${storedName}`;
  }
});
const setUserName = function () {
  let name = prompt("Please input your name");
  if (!name) {
    setUserName();
  } else {
    localStorage.setItem("name", name);
    myHeading.textContent = `Joan of Arc(alter) so beautiful ${name}`;
  }
};
