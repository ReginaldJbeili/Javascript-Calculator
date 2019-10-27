addEventListener("keydown", function(event) {
  if (event.keyCode == 187){solve()}
  });

addEventListener("keydown", function(event) {
  if (event.keyCode == 13){
    event.preventDefault();
    solve();
    }
    });

addEventListener("keydown", function(event) {
  if (event.keyCode == 48){
    event.preventDefault();
    insertZero();
    }
    });

function insert(num){
return document.form.textview.value+=num;
}

function insertOperator(op){
if (document.form.textview.value.charAt(document.form.textview.value.length-1)=='+'||document.form.textview.value.charAt(document.form.textview.value.length-1)=='/'||document.form.textview.value.charAt(document.form.textview.value.length-1)=='*'){
  document.form.textview.value = document.form.textview.value.substring(0,document.form.textview.value.length-1)
  return document.form.textview.value+=op;
}
else if (document.form.textview.value.charAt(document.form.textview.value.length-1)=='-'){
}
else {
  return document.form.textview.value+=op;
}
}

function insertMinus(op){
if (document.form.textview.value.charAt(document.form.textview.value.length-1)=='-'){}
else {
  return document.form.textview.value+=op;
}
}
function insertZero() {
if (document.form.textview.value==0||document.form.textview.value.charAt(document.form.textview.value.length-1)=='+'||document.form.textview.value.charAt(document.form.textview.value.length-1)=='-'||document.form.textview.value.charAt(document.form.textview.value.length-1)=='/'||document.form.textview.value.charAt(document.form.textview.value.length-1)=='*') {

}
else {
  return document.form.textview.value+=0;
}
}

function insertDecimal(dot){
if (document.form.textview.value.charAt(document.form.textview.value.length-1)=='.'){}
else {
  return document.form.textview.value+=dot;
}
}

function solve() {
if (eval(document.form.textview.value)==0||eval(document.form.textview.value)==undefined) {
  return document.form.textview.value = "";
}

else {
  return document.form.textview.value = eval(document.form.textview.value);
}
}

function clean(){
document.form.textview.value = "";
}

function back() {
return document.form.textview.value = document.form.textview.value.substring(0,document.form.textview.value.length-1);
}
