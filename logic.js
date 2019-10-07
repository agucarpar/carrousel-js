


window.onload = () => {

     setInterval(carousel, 10);
    var element = document.querySelector('#imgGroup') 
    var element2 = document.querySelector('#imgGroup2') 
    var element3 = document.querySelector('#imgGroup3') 
    var posX = 0;
    var posX2 = 0;
    var posX3 = 0;
    
    function carousel(){
    if (posX >= 388){
        posX = -230
    }
    
        
    else{
        posX += 0.5
        element.setAttribute("style", `transform: translateX(${posX}px)` )
    }

    if (posX2 >= 188){
        posX2 = -430
    }
    
        
    else{
        posX2 += 0.5
        element2.setAttribute("style", `transform: translateX(${posX2}px)` )
    }


    if (posX3 >= -22){
        posX3 = -630
    }
    
        
    else{
        posX3 += 0.5
        element3.setAttribute("style", `transform: translateX(${posX3}px)` )
    }
    

}


carousel()

       
  


}
