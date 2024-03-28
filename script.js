const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

let clock = ()=>{
    setInterval(()=>{
        let date = new Date
        seccond = date.getSeconds();
        sec.innerHTML = seccond
        seccond < 10 ? sec.innerHTML = "0"+seccond : seccond; 
    },1000);
    setInterval(()=>{
        let date = new Date
        minuts = date.getMinutes();
        min.innerHTML = minuts
        minuts < 10 ? min.innerHTML = "0"+minuts : minuts; 
    },1000);
    setInterval(()=>{
        let date = new Date
        hours = date.getHours();
        hrs.innerHTML = hours;
        hours < 10 ? hrs.innerHTML = "0"+hours : hours; 
    },1000)
}
clock();