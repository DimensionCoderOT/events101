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
};

//////////////////////////////////////////////////////////////////

function handleChange() {
  const in1 = document.querySelector("#in1");
  const in2 = document.querySelector("#in2");
  const out1 = document.querySelector("#out1");
  out1.textContent = in1.value +in2.value;
};


function concatAttacher() {
  const in1 = document.querySelector("#in1");
  const in2 = document.querySelector("#in2");

  in1.addEventListener("change",handleChange);
  in2.addEventListener("change",handleChange);
  console.log(in2.textContent, in1.textContent);
};

//////////////////////////////////////////////////////////////////////

function snitchAttacher() {
  const mousewatcher = document.querySelector("#mousewatcher");
  const snitch = document.querySelector("#snitch");

  mousewatcher.addEventListener("mouseover",snitchUpdater);
  mousewatcher.addEventListener("mouseout", snitchUpdater);
}

///////////////////////////////////////////////////////////////////////

function reportUpdater(event) {
  const mousereporter = document.querySelector("#mousereporter");
  const report = document.querySelector("#report");
  window.report.textContent = ("x: " + event.screenX + " y: " + event.screenY);

}

function reportAttacher() {
  const mousereporter = document.querySelector("#mousereporter");
  const report = document.querySelector("#report");

  mousereporter.addEventListener("mousemove", reportUpdater);

}

//////////////////////////

function idValidationAttacher() {
  var newid = document.querySelector("#newid");
  newid.addEventListener("input",idValidationHandler)
}

function idValidationHandler() {
  var newid = document.querySelector("#newid");
  const idvalue = newid.value
  if (idvalue.indexOf(" ") >=0) {
    newid.classList = ("invalid");
}
  else {
    newid.classList = (newid.textContent);
    newid.classList.remove("invalid");


   }
}














////////////////////////////////////////////////////////////////////
