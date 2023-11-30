function task()
{
var today=new Date()
var targetDate=new Date("11/20/2023 6:17:00 pm")
var diff=(targetDate-today)/1000
// console.log(diff)
var days=Math.floor(diff/3600/24)
var hours=Math.floor((diff/3600)%24)
var Minutes=Math.floor((diff/60)%60)
var seconds=Math.floor(diff%60)

var result=document.querySelectorAll(".card h2")
result[0].innerText=days;
result[1].innerText=hours;
result[2].innerText=Minutes;
result[3].innerText=seconds;

}
setInterval(task,100)