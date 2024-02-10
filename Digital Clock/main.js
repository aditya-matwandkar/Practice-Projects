let clock = document.querySelector(".time");

setInterval(() => {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if (hour > 12){
        hour -= 12;
        document.querySelector(".am-pm").innerHTML = "PM";
    }
    else {
        document.querySelector(".am-pm").innerHTML = "AM";
    }

    if (hour < 10){
        hour = "0" + hour;
    }
    if (min < 10){
        min = "0" + min;
    }
    if (sec < 10){
        sec = "0" + sec;
    }

    clock.innerHTML = hour + ":" + min + ":" + sec;
}, 1000)


