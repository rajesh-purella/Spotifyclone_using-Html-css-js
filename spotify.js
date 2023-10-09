console.log("welcome to spotify");

//initalize the variables
let songindex=0;
let audioElement = new Audio('Choosi Chudangane - SenSongsMp3.Co.mp3');

let mybar = document.getElementById('mybar')

let masterplay=document.getElementById('masterplay')
let songs =[{songname:"choosi chudsngane" ,filepath:"C:\Users\Rajesh\OneDrive\Desktop\Spotifyclone\Choosi Chudangane - SenSongsMp3.Co.mp3",coverpath:"covers/1.jpg"},
{songname:"daredum dadum dam dam" ,filepath:"C:\Users\Rajesh\OneDrive\Desktop\Spotifyclone\Choosi Chudangane - SenSongsMp3.Co.mp3",coverpath:"covers/1.jpg"},
{songname:"e manasee mansee" ,filepath:"C:\Users\Rajesh\OneDrive\Desktop\Spotifyclone\Choosi Chudangane - SenSongsMp3.Co.mp3",coverpath:"covers/1.jpg"}
]

//handle play pause
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play()
masterplay.classList.remove('fa-circle-play')
masterplay.classList.add('fa-circle-pause')
gif.style.opacity=1;
    }

else{
 audioElement.pause();
 masterplay.classList.remove('fa-circle-pause');
masterplay.classList.add('fa-circle-play');
gif.style.opacity=0;

}

})


//listen to events 
audioElement.addEventListener('timeupdate',()=>{
//update slidebar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
mybar.value = progress;

})
mybar.addEventListener('change' ,()=>{
    audioElement.currentTime=mybar.value*audioElement.duration/100;
})

let circleplay = document.getElementById("circleplay")
circleplay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
    gif.style.opacity=1;
        }
    
    else{
     audioElement.pause();
     masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity=0;
    
    }

})
