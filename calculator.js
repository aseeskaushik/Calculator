var zero = document.getElementById("0");
var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");
var clear = document.getElementById("AC");
var plus_minus = document.getElementById("+/-");
var point = document.getElementById(".");
var percent = document.getElementById("%");
var plus = document.getElementById("+");
var minus = document.getElementById("-");
var product = document.getElementById("*");
var divide = document.getElementById("/");
var equal = document.getElementById("=");
var enteredValue = document.getElementById("blank-space");

var string = "";
zero.addEventListener("click", function () {
  string = string + "0";
  enteredValue.innerText = string;
});

one.addEventListener("click", function () {
  string = string + "1";
  enteredValue.innerText = string;
});

two.addEventListener("click", function () {
  string = string + "2";
  enteredValue.innerText = string;
});

three.addEventListener("click", function () {
  string = string + "3";
  enteredValue.innerText = string;
});

four.addEventListener("click", function () {
  string = string + "4";
  enteredValue.innerText = string;
});

five.addEventListener("click", function () {
  string = string + "5";
  enteredValue.innerText = string;
});

six.addEventListener("click", function () {
  string = string + "6";
  enteredValue.innerText = string;
});

seven.addEventListener("click", function () {
  string = string + "7";
  enteredValue.innerText = string;
});

eight.addEventListener("click", function () {
  string = string + "8";
  enteredValue.innerText = string;
});

nine.addEventListener("click", function () {
  string = string + "9";
  enteredValue.innerText = string;
});
// plus/minus
plus_minus.addEventListener("click", function () {
  string = string + "+/-";
  enteredValue.innerText = string;
});

clear.addEventListener("click", function () {
  string = "";
  enteredValue.innerText = string;
});

percent.addEventListener("click", function () {
  string = string + "%";
  enteredValue.innerText = string;
});

point.addEventListener("click", function () {
  string = string + ".";
  enteredValue.innerText = string;
});

divide.addEventListener("click", function () {
  string = string + "/";
  enteredValue.innerText = string;
});
product.addEventListener("click", function () {
  string = string + "*";
  enteredValue.innerText = string;
});
minus.addEventListener("click", function () {
  string = string + "-";
  enteredValue.innerText = string;
});
plus.addEventListener("click", function () {
  string = string + "+";
  enteredValue.innerText = string;
});
equal.addEventListener("click", function () {
  enteredValue.innerText = eval(string);
  string = eval(string);
});
