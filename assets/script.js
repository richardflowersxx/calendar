
var today = moment();
$('#currentDay').text(today.format('dddd LL'));

var button = document.querySelector('#btn');
var  textIn = document.querySelector('#text');
var time = document.querySelector('#time');





button.addEventListener("click", function(event) {
event.preventDefault();

var reminder = localStorage.getItem("reminder");

reminder = document.querySelector("#text").value;

localStorage.setItem("reminder",reminder)
})



