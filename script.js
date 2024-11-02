const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();
date.innerHTML = (today.getDate() < 10 ? "0":"") + today.getDate();
day.innerHTML = today.toLocaleString('default',{day:'long'});
month.innerHTML = today.toLocaleString('default',{month:'long'})
year.innerHTML = today.getFullYear();


