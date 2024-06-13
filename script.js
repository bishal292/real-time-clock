console.log(`Script is Running`);
setInterval(() => {
    currentdate= new Date()
    hours = currentdate.getHours();
    if (hours>12){
        hours -= 12;
    }
    minutetime = currentdate.getMinutes();
    secondstime = currentdate.getSeconds();

    hourrotation = 30*hours + minutetime/2;
    minuterotation = 6*minutetime + secondstime/10;
    secondsrotaion = 6*secondstime;

    hour.style.transform = `rotate(${hourrotation}deg)`
    minute.style.transform = `rotate(${minuterotation}deg)`
    seconds.style.transform = `rotate(${secondsrotaion}deg)`
}, 1000);