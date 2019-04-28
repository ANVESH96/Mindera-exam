window.addEventListener("load",function(e){
    var listofcards = document.getElementById('content')
    var rightbutton =document.getElementById('controlRight')
    var leftbutton =document.getElementById('controlLeft')
    var cards = document.getElementsByClassName('card')

    var rightcount=0
    rightbutton.addEventListener("click",function(e){
        e.preventDefault()
        rightcount++
        listofcards.style.transform = "translateX(-"+336*count+"px)";
        style=getComputedStyle(listofcards)
        console.log(style.getPropertyValue('width'))
    })
    leftbutton.addEventListener("click",function(e){
        e.preventDefault()
        count--
        listofcards.style.transform = "translateX(-"+336*count+"px)";
    })
})



 

