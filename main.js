"use strict";

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

const size = document.querySelector(".size");
const hover = document.querySelector(".hover");
const col2 = document.querySelector("#col-2");
const h5 = document.querySelector("h5");
const span = document.querySelector("span");
const canHover = window.matchMedia("(hover:hover)");
const cssLink = document.getElementById("csslink");
const cssSize = document.getElementById("csssize");

let portrait = window.matchMedia("(orientation: portrait)");
let landscape = window.matchMedia("(orientation: landscape)");

let huge = window.matchMedia("screen and (min-width: 1300px)");
let large = window.matchMedia(
  "screen and (min-width: 1000px) and (max-width:1299px)",
);
let med = window.matchMedia(
  "screen and (min-width: 700px) and (max-width:999px)",
);

let small = window.matchMedia(
  "screen and (min-width: 0px) and (max-width:699px)",
);

const arr = [
  { label: "huge", size: huge },
  { label: "large", size: large },
  { label: "med", size: med },
  { label: "small", size: small },
];

function checkWhichSizeMatches() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].size.matches) {
      console.log("match result", arr[i].size, "label", arr[i].label);
      size.textContent = arr[i].label;
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  arr[i].size.addEventListener("change", checkWhichSizeMatches);
}

checkWhichSizeMatches();

if (portrait.matches) {
  span.textContent = "portrait";
}
if (landscape.matches) {
  span.textContent = "landscape";
}

portrait.addEventListener("change", function (e) {
  if (e.matches) {
    span.textContent = "Portrait";
  } else {
    span.textContent = "Landscape";
  }
});

canHover.addEventListener("change", function (e) {
  if (canHover.matches) {
    hover.textContent = "Hover Supported";
  } else {
    hover.textContent = "Touch Screen";
  }
});

function isHoverable(canHover) {
  if (canHover.matches) {
    hover.textContent = "Hover Supported";
  } else {
    hover.textContent = "Touch Screen";
  }
}

isHoverable(canHover);

document.getElementById("submitBtn").addEventListener("click", () => {
  col2.textContent = "Color Scheme as per User Selection";
});

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  console.log("submitted");
  e.preventDefault();

  const currTextClr = form.elements["text_color"].value;
  const currBgClr = form.elements["bgClr"].value;

  if (currTextClr == "dark_red" && currBgClr == "white") {
    cssLink.setAttribute("href", "style1.css");
  }
  if (currTextClr == "dark_red" && currBgClr == "yellow") {
    cssLink.setAttribute("href", "style2.css");
  }
  if (currTextClr == "dark_blue" && currBgClr == "white") {
    cssLink.setAttribute("href", "style3.css");
  }
  if (currTextClr == "dark_blue" && currBgClr == "yellow") {
    cssLink.setAttribute("href", "style4.css");
  }
});
