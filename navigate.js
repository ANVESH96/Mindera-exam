function navigte(e){

    var rightbutton =document.getElementById('controlRight')    //get the controls and wrapper
    var leftbutton =document.getElementById('controlLeft')
    let wrapper = document.getElementById("wrapper")

    rightbutton.addEventListener("click",function(e){
        wrapper.scrollLeft += 336                             //scroll right on click
    })
    leftbutton.addEventListener("click",function(e){ 
        wrapper.scrollLeft -= 336                             //scroll left on click
       
    })
}



 

