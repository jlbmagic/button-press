//Here we're importing items we'll need. You can add other imports here.

//The first function. Remove this.
const btn = document.querySelector("button");
btn.onclick = function () {
  FileMaker.PerformScript("Button Press");
  // alert("You ran some JavaScript");
};
