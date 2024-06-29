console.log(`Script is Running`);

// For toggle button
let digital = document.querySelectorAll("[data-digital]");
let analog = document.querySelectorAll("[data-analog]");
document.getElementById('toggle').addEventListener('change', function() {
        digital.forEach(element => {
            element.classList.toggle("none");
        });
        analog.forEach(element =>{
            element.classList.toggle("none");
        })
});


setInterval(() => {
    currentdate= new Date()
    htime = currentdate.getHours();
    let hours;
    if (htime>12){
        hours -= htime - 12;
    }else{
        hours = htime;
    }
    minutetime = currentdate.getMinutes();
    secondstime = currentdate.getSeconds();

    hourrotation = 30*hours + minutetime/2;
    minuterotation = 6*minutetime + secondstime/10;
    secondsrotaion = 6*secondstime;

    hour.style.transform = `rotate(${hourrotation}deg)`
    minute.style.transform = `rotate(${minuterotation}deg)`
    seconds.style.transform = `rotate(${secondsrotaion}deg)`
    
    document.getElementById('hour-box').innerHTML = htime;
    document.getElementById('minute-box').innerHTML = minutetime;
    document.getElementById('seconds-box').innerHTML = secondstime;
}, 1000);