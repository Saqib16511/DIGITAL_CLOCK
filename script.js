const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const ampm = document.getElementById("ampm")
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
        let mod = hours % 12;
        // hrs.innerHTML = mod;
        ampm.innerHTML =  hours >= 12 ?  'PM' : 'AM';
        mod < 10 ? hrs.innerHTML = "0"+mod : mod;
    },1000)
}
clock();