let songlist=document.getElementById('song-list')
let playBtn=document.getElementById('play-btn')
let progress=document.getElementById('progress')
let backward=document.getElementById('raj')
let forward=document.getElementById('kumar')
let songs=[
    {
        name:'song1',
        id:1,
    },
    {
      name:'song2',
       id:2,
    },
    {
        name:'song3',
        id:3,
    },
    {
        name:'song4',
        id:4,
    }
]
//show songs in list
for(let song of songs){
  let li=document.createElement('li');
  li.innerText=song.name;
  songlist.append(li);
  li.setAttribute('id',song.id)/
  li.classList.add('song-item')
}


//audio ka costructor use kra hai for play pase etc
let audio = new Audio('./assests/song1.mp3');

//play btn ka icon badlo and gaana chalao
playBtn.addEventListener('click',()=>{
    audio.paused ? audio.play():audio.pause();
    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play')
        playBtn.children[0].classList.add('fa-pause')
    }
    else{
        playBtn.children[0].classList.remove('fa-pause')
        playBtn.children[0].classList.add('fa-play')
    }
})

//currenttime ke hesab se chale
audio.addEventListener('timeupdate',function(){
    let currentprogress=audio.currentTime*100/audio.duration;
    progress.value=currentprogress;
})
//drag krne par
progress.addEventListener('change',function(){
    let upadte=audio.duration*progress.value/100;
    audio.currentTime=upadte;
})

//btn  click kiya to song change ho skye
songlist.addEventListener('click',function(event){
    let songId = event.target.getAttribute('id');
    audio.src=`./assests/song${songId}.mp3`;
    audio.currentTime=0;
    audio.play();
    playBtn.children[0].classList.add('fa-pause');
    playBtn.children[0].classList.remove('fa-play');

})
let  currentSongIndex=0;
forward.addEventListener('click',function(event){
    currentSongIndex = (currentSongIndex+1) % songs.length;
    audio.src = `./assests/song${currentSongIndex+1}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.add('fa-pause');
    playBtn.children[0].classList.remove('fa-play');
});


