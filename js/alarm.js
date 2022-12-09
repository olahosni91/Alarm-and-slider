let setBtn = document.getElementById('set');
let alarmHr = document.getElementById('alarmHr');
let alarmMin = document.getElementById('alarmMin');
let alarmSec = document.getElementById('alarmSec');
let clrBtn = document.getElementById('clear');



let hrs = hr => {
    let period = "AM";

    hr > 12 ? (hr -= 12, period = "PM") : (hr = hr, period = 'AM');
    hr < 10 ? hr = "0" + hr : hr = hr; 
    if(hr == 0){
        hr = 12;
        period = "AM"
    }
    let hourPeriod = [hr, period];
    return hourPeriod;
}
let mins = m => m < 10 ? "0" + m : m ;

let secs = sec => sec < 10 ? "0" + sec : sec ;

let time = () => {
    let clock = new Date();
    let day = clock.getDay();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let sec = clock.getSeconds();

    let daysArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    day = daysArr[day];
   
    let fullTime=`${hrs(hours)[0]} : ${mins(minutes)} : ${secs(sec)} ${hrs(hours)[1]}`;
    hms.innerHTML=(fullTime);
    dayheading.innerHTML=(day);
}
setInterval(time, 1000);

let alarm = () => {

let alarmTime = (alarmHr.value * 3600) + (alarmMin.value * 60) + alarmSec.value;
 
 myInterval = setTimeout(() => alert('your time is out'), alarmTime*1000); 
}

let clr = () => {
    alarmHr.value = 0;
    alarmMin.value = 0;
    alarmSec.value = 0;
} 


setBtn.addEventListener('click', alarm);
clrBtn.addEventListener('click', clr);
