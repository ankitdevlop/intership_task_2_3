const video=document.getElementById("video")
const videocontiner=document.getElementById("player-continer")
let isPressing=false;
let toucStartTime=0;


videocontiner.addEventListener('touchstart',(e)=>{
    isPressing=true;
    toucStartTime=Date.now();
})
videocontiner.addEventListener('touchend',(e)=>{
    isPressing=false;
 const touchDuration=  Date.now()- toucStartTime;
 
 if (touchDuration < 300) { // Adjust the time threshold as needed
    const x = e.changedTouches[0].clientX;
    const containerWidth = videocontiner.offsetWidth;

    if (x < containerWidth * 0.2) {
        // Double tap on the left side to move 5 seconds backward
        video.currentTime -= 10;
    } else if (x > containerWidth * 0.8) {
        // Double tap on the right side to move 10 seconds forward
        video.currentTime += 10;
    } else {
        // Double tap in the middle to play/pause
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
}
})




function playvideo1 () {
    let a =document.querySelector('source')
    a.src="./Media/demo1.mp4"
    console.log(a)
    video.load();

}
function playvideo2 () {
    let a =document.querySelector('source')
    a.src="./Media/demo2.mp4"
    video.load();

}
function playvideo3 () {
    let a =document.querySelector('source')
    a.src="./Media/demo3.mp4"
    video.load();

}
function playvideo4 () {
    let a =document.querySelector('source')
    a.src="./Media/demo.mp4"
    video.load();

}
