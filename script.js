let hrs = document.getElementById("h_hand")
let min = document.getElementById("m_hand")
let sec = document.getElementById("s_hand")
let hs = document.getElementById("h")
let ms = document.getElementById("m")
let ss = document.getElementById("s")
let p = document.getElementById("period")
let setHr = document.getElementById("setHr")
let setMin = document.getElementById("setMin")
let setSec = document.getElementById("setSec")
let selectdata = document.querySelectorAll("select")
let set = document.getElementById("Set")
let music = document.getElementById("Music")

let a
function playsound(){
    let audio = new Audio("./music/jay shree ram _jayshreeram _hinduism _sanatandharma _shortsfeed _shorts(M4A_128K).wav")
    audio.play()
}

// music.onchange = function(){
//     a = this.value
// }
// console.log(playsound(music.value))
// console.log(playsound(music.option))

let alarmTime,isTime;

for(let index =12;index>=1;index--){
    index<=9?index=`0${index}`:index=index
    let option = `<option value="${index}">${index}<\option>`
    selectdata[0].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let index =59;index>=1;index--){
    index<=9?index=`0${index}`:index=index
    let option = `<option value="${index}">${index}<\option>`
    selectdata[1].firstElementChild.insertAdjacentHTML("afterend",option)
}
for(let index =0;index<2;index++){
    index==1?ampm = "AM":ampm = "PM"
    let option = `<option value="${ampm}">${ampm}<\option>`
    selectdata[2].firstElementChild.insertAdjacentHTML("afterend",option)
}



setInterval(() => {
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let period = "AM"
    
    let h_r = 30 * h + m/2
    let m_r = 6*m
    let s_r = 6*s 
    if(h>=12){
            period = "PM"
    }
    h = h > 12 ? h % 12:h;

    hrs.style.transform = `rotate(${h_r}deg)`
    min.style.transform = `rotate(${m_r}deg)`
    sec.style.transform = `rotate(${s_r}deg)`
    let a = (h<10?"0":"")+h
    let b = (m<10?"0":"")+m
    let c = (s<10?"0":"")+s
    hs.innerHTML = a
    ms.innerHTML = b
    ss.innerHTML = c
    p.innerHTML = period
    // console.log(`${hrs}:${ms}:${ss} ${period}`)
    // console.log(`${a}:${b}:${c} ${period}`)
    if(alarmTime === (`${a}:${b}:${c} ${period}`)){
        playsound("./music/jay shree ram _jayshreeram _hinduism _sanatandharma _shortsfeed _shorts(M4A_128K).m4a")
        console.log('played')
    }
    else{
        console.log(false)
    }

}, 1000);

set.addEventListener("click",()=>{
    let time = `${selectdata[0].value}:${selectdata[1].value}:00 ${selectdata[2].value}`
    console.log(time);
    alarmTime = time
})

set.onclick=()=>{
    set.innerHTML = "saved"
    setTimeout(() => {
        set.innerHTML = "Set" 
    }, 1000);
}