function insert(num){
document.form.textview.value+=num;
}

function solve() {
document.form.textview.value = eval(document.form.textview.value);
}

function clean(){
document.form.textview.value = "";
}

function back() {
var x = document.form.textview.value
document.form.textview.value = x.substring(0,x.length-1);
}
