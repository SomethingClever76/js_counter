
//self-invoking function to help with scope
(function (){

    //got the decrement element out of the DOM and stored it 
    //in a variable
    let decrementButton = document.querySelector("#decrement");
    
    //get ahold of the counter
    let counter = document.querySelector("#counter");

//get ahold of the increment button
    let incrementButton = document.querySelector("#increment");

    decrementButton.addEventListener("click", function(){

        //get the current value of the counter
        let currentCounterValue = counter.innerHTML

        let newCounterValue = currentCounterValue -1;

        if( newCounterValue >= 0) {
            counter.innerHTML = newCounterValue;
        }

        if(newCounterValue < 10){
            counter.style.color = "black";
          }
        
       
    })

    incrementButton.addEventListener("click", function(){

        //get the current value of the counter
        let currentCounterValue = counter.innerHTML

        let newCounterValue = parseInt(currentCounterValue) + 1;

        counter.innerHTML = newCounterValue
       
        if(newCounterValue >= 10){
          counter.style.color = "red";
        }
        
     })


})();