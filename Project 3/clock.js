// const clock=document.querySelector('#clock')
const clock=document.getElementById('clock')

setInterval(function(){
    let date=new Date
    clock.innerHTML=date.toLocaleTimeString()
},1000


// setInterval()--> ye methods time ko continously run krta rhega jab time web open rhega

// toLocaleTimeString()--> this will provide only cureent time

// toLocaleDateString()--> this will provide only cureent date

// toLocaleString()--> this will provide both cureent date and current time
