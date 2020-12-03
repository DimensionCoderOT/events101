'use strict';
/**
 * Add your functions here...
 */
function targetTextToConsole(event){
console.log(event.target.textContent);
};

function tttcAttacher(){
  const button = document.querySelector("#button0");
  button.addEventListener("click", targetTextToConsole);

};
///////////////////////////////////////////////////////////////////

function lovelyParaAttacher() {
  thisisalovelyparagraph.addEventListener("click", lovelyToggle);
};

//////////////////////////////////////////////////////////////////

function lovelyButtonAttacher() {
  button1.addEventListener("click", lovelyToggle)
}

//////////////////////////////////////////////////////////////////

function handleChange(event) {
//  const in1 = document.querySelector("#in1")
//  const in2 = document.querySelector("#in2")
  var out1 = document.querySelector("#out1")
  if (in1 && in2) {
    out1.textContent = (in1.textContent,in2.textContent);
}

};


function concatAttacher() {
const input
  in1.addEventListener("change",handleChange);
  in2.addEventListener("change",handleChange);
};
