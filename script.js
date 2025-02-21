"use strict"

const colorBtn1 = document.querySelector(".color1");
const colorBtn2 = document.querySelector(".color2");
const generateBtn = document.querySelector(".generate");
const Arrowbtn = document.querySelectorAll(".arrow-btn");
const container = document.querySelector(".container");
const cssValue = document.querySelector(".css-value");
const hamburger = document.querySelector(".ham-burger");
const navbar = document.querySelector("nav");
const checkBox = document.querySelector(".hex-rgb");
const copyBtn = document.querySelector(".fa-copy");
const contactBtn = document.querySelector(".contact-btn");
const contactform = document.querySelector(".contact-form-container");
const formClose = document.querySelector(".fa-xmark");

let color1 = "#061937";
let color2 = "#88eb12";
let rgbValue1 = "rgb(6, 25, 55)";
let rgbValue2 = "rgb(136, 235, 18)";
let direction = "to top right";

Arrowbtn.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    direction = elem.value;
    showActive(index);
  });
});

function showActive(index) {
  Arrowbtn.forEach((elem, idx) => {
    if (idx === index) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  });
}

function generateColor() {
  let hexValue = "0123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexValue[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}
colorBtn1.addEventListener("click", () => {
  color1 = generateColor();
  colorBtn1.style.backgroundColor = color1;
  colorBtn1.innerText = color1;
  rgbValue1 = hexTorgb(color1);
});

colorBtn2.addEventListener("click", () => {
  color2 = generateColor();
  colorBtn2.style.backgroundColor = color2;
  colorBtn2.innerText = color2;
  rgbValue2 = hexTorgb(color2);
});

checkBox.addEventListener("change", () => {
  hexAndRgb();
});
generateBtn.addEventListener("click", () => {
  hexAndRgb();
});

function hexAndRgb() {
  if (checkBox.checked) {
    if (direction === "radial") {
      container.style.backgroundImage = `radial-gradient(circle, ${rgbValue1}, ${rgbValue2})`;
      cssValue.innerText = `background-image: radial-gradient(circle, ${rgbValue1}, ${rgbValue2});`;
    } else {
      container.style.backgroundImage = `linear-gradient(${direction}, ${rgbValue1}, ${rgbValue2})`;
      cssValue.innerText = `background-image: linear-gradient(${direction}, ${rgbValue1}, ${rgbValue2});`;
    }
  } else {
    if (direction === "radial") {
      container.style.backgroundImage = `radial-gradient(circle, ${color1}, ${color2})`;
      cssValue.innerText = `background-image: radial-gradient(circle, ${color1}, ${color2});`;
    } else {
      container.style.backgroundImage = `linear-gradient(${direction}, ${color1}, ${color2})`;
      cssValue.innerText = `background-image: linear-gradient(${direction}, ${color1}, ${color2});`;
    }
  }
}

function hexTorgb(hex) {
  if (hex.indexOf("#") === 0) hex = hex.slice(1);
  let r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    
  return rgb;
}
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(cssValue.innerText);
});

contactBtn.addEventListener("click", () => {
  contactform.classList.add("show-form");
  document.body.style.overflow = "hidden"
});

formClose.addEventListener("click", () => {
  contactform.classList.remove("show-form");
  document.body.style.overflow = "auto"

});
