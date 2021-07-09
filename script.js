const video=document.getElementById('video');
const play=document.getElementById('play');
const stop=document.getElementById('stop');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');

function videostatus(){
    if(video.paused) video.play();
    else video.pause();
}

function togglebutton(){
    if(video.paused){
        play.innerHTML='<i class="fa fa-play fa-2x"></i>';
    }else {
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>';
    }

}

function resetvideostatus(){
    video.currentTime=0;
    video.pause();
}

function updateprogress(){
    progress.value=(video.currentTime/video.duration)*100;

    let min=Math.floor(video.currentTime/60);
    if(min<10){
        min='0'+String(min);
    }
    let sec=Math.floor(video.currentTime%60);
    if(sec<10){
        sec='0'+String(sec);
    }
    timestamp.innerHTML=`${min}:${sec}`;
}

function setprogress(){
    video.currentTime=(+progress.value*video.duration)/100;
}

video.addEventListener('click',videostatus);
video.addEventListener('play',togglebutton);
video.addEventListener('pause',togglebutton);
play.addEventListener('click',videostatus);
stop.addEventListener('click',resetvideostatus);
video.addEventListener('timeupdate',updateprogress);
progress.addEventListener('change',setprogress);

