
const day = document.querySelector(".day");
const time = document.querySelector(".time")



window.addEventListener('load',calculatetime)
    function calculatetime (){
        var date = new Date();
        var daynumber = date.getDay();      
        var daynames =["SUNDAY", "MONDAY" , "TUESDAY", "WENESDAY","THRURSDAY", "FRIDAY","SATURDAY"] 
        var currentTimeInMilliseconds = new Date().getTime();    
        document.querySelector(".day").innerHTML = daynames[daynumber];
        document.querySelector(".time").innerHTML = currentTimeInMilliseconds;
        setTimeout(calculatetime,200);
        
    }

