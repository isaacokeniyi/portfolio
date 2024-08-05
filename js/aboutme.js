let num = document.querySelectorAll('.num');


function increment(){
    num.forEach(num => {
        let maxValue = num.textContent;
        let value = 0;
        let duration = 4000;
        let increment =  Math.ceil((maxValue - value) / (duration / 50));
        let incrementInterval = setInterval( function(){
            value += increment;
            num.textContent = value;
            if (value >= maxValue){
                clearInterval(incrementInterval);
                num.textContent = maxValue;
            }
        }, 50);
        
    });
}

increment();
