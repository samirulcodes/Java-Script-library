const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function(button){
    //console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id=='grey'){ // e.target--> from where the event is coming
            //body.style.backgroundColor=e.target.id or below line 11 are same
            body.style.backgroundColor='grey'
        }
        if(e.target.id=='white'){
            body.style.backgroundColor='white'
        }
        if(e.target.id=='blue'){
            body.style.backgroundColor='blue'
        }
        if(e.target.id=='yellow'){
            body.style.backgroundColor='yellow'
        }

    })
})


