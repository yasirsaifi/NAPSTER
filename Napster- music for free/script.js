console.log("Welcome to napster");

let songIndex = 0;
let audioElement = new Audio('/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "NCS Mashup", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", id:'0'},
    {songName: "JB Hain - feel [Arcade Release]", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", id:'1'},
    {songName: "Toxic Joy & SRY - Walk Away", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", id:'2'},
    {songName: "PHI NIX - Can't Break Me Down", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", id:'3'},
    {songName: "Zeli - Sharks", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", id:'4'},
    {songName: "ROY KNOX & CRVN - The Other Side", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", id:'5'},
    {songName: "Sharks - Shiver", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", id:'6'},
    {songName: "Strybo - Curse", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", id:'7'},
    {songName: "T & Sugah x NCT - Find A Way (feat. Cammie Robinson)", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", id:'8'},
    {songName: "Max Brhon - Redemption", filePath: "songs/10.mp3", coverPath: "covers/10.jpg", id:'9'},
    {songName: "Cesqeaux & Tisoki - Give It To Me", filePath: "songs/11.mp3", coverPath: "covers/11.jpg", id:'10'},
    {songName: "AC13 - Visions", filePath: "songs/12.mp3", coverPath: "covers/14.jpg", id:'11'},
    {songName: "Jéja - Bad Habit (feat. Zaug)", filePath: "songs/13.mp3", coverPath: "covers/15.jpg", id:'12'},
    {songName: "OMAS & Awon - The Rage", filePath: "songs/14.mp3", coverPath: "covers/16.jpg", id:'13'},
    {songName: "WYKO & SIIK - 2AM (feat. shi'tz)", filePath: "songs/15.mp3", coverPath: "covers/17.jpg", id:'14'},
    {songName: "Poylow, Lucky Low, MAD SNAX - Freak Show", filePath: "songs/16.mp3", coverPath: "covers/11.jpg", id:'15'},
    {songName: "WATEVA - What I Say (Thorne Remix)", filePath: "songs/17.mp3", coverPath: "covers/12.jpg", id:'16'},
    {songName: "Vizzen & Protolizard - Heaven Knows", filePath: "songs/18.mp3", coverPath: "covers/13.jpg", id:'17'},
    {songName: "Polygon - Bring It Back", filePath: "songs/19.mp3", coverPath: "covers/14.jpg", id:'18'},
    {songName: "ATSMXN, XTOM - Enemies", filePath: "songs/20.mp3", coverPath: "covers/15.jpg", id:'19'},
    {songName: "Diviners & Level 8 - Guide You Home", filePath: "songs/21.mp3", coverPath: "covers/16.jpg", id:'20'},
    {songName: "N3WPORT x Britt Lari - Paradise", filePath: "songs/22.mp3", coverPath: "covers/17.jpg", id:'21'},
    {songName: "ReauBeau - Make Waves (feat. Brynja Mary)", filePath: "songs/23.mp3", coverPath: "covers/9.jpg", id:'22'},
    {songName: "Wiguez, Rico 56 - Gone", filePath: "songs/24.mp3", coverPath: "covers/19.jpg", id:'23'},
    {songName: "OBLVYN - A Mere Blip In Your Timeline", filePath: "songs/25.mp3", coverPath: "covers/19.jpg", id:'24'},
    {songName: "More Plastic & URBANO - Psycho", filePath: "songs/26.mp3", coverPath: "covers/11.jpg", id:'25'},
    {songName: "Wiguez & borne - Pressure (ft. imallryt)", filePath: "songs/27.mp3", coverPath: "covers/17.jpg", id:'26'},
    {songName: "ANGELPLAYA - LET THEM HAVE IT", filePath: "songs/28.mp3", coverPath: "covers/16.jpg", id:'27'},
    {songName: "Raven & Kreyn, KDH - Dum Dum", filePath: "songs/29.mp3", coverPath: "covers/15.jpg", id:'28'},
    {songName: "NOYSE & ÆSTRØ - La Manera De Vivir", filePath: "songs/30.mp3", coverPath: "covers/9.jpg", id:'29'},
    {songName: "Yonexx & lunar - Need You", filePath: "songs/31.mp3", coverPath: "covers/19.jpg", id:'30'},
    {songName: "Jim Yosef - Volcano", filePath: "songs/32.mp3", coverPath: "covers/5.jpg", id:'31'},
    {songName: "Jo. Cohen - Sympathy", filePath: "songs/33.mp3", coverPath: "covers/5.jpg", id:'32'},
    {songName: "Zack Merci - Kadak (feat. Nieko & Blxk Trey)", filePath: "songs/34.mp3", coverPath: "covers/4.jpg", id:'33'},
    {songName: "Andromedik & Murdock - Light", filePath: "songs/35.mp3", coverPath: "covers/3.jpg", id:'34'},
    {songName: "Poylow, Harry Taylor, MAD SNAX - Drop In The Ocean", filePath: "songs/36.mp3", coverPath: "covers/7.jpg", id:'35'},
    {songName: "Wiguez & Josh Levoid - Get Out Here", filePath: "songs/37.mp3", coverPath: "covers/9.jpg", id:'36'},
    {songName: "CITYWLKR & Voicians - Consume Me", filePath: "songs/38.mp3", coverPath: "covers/11.jpg", id:'37'},
    {songName: "ReauBeau - For You (feat. Eline Mann)", filePath: "songs/39.mp3", coverPath: "covers/13.jpg", id:'38'},
    {songName: "PLEEG - Alive", filePath: "songs/40.mp3", coverPath: "covers/12.jpg", id:'39'},
    {songName: "Rex Hooligan x Anna Simone - No More Levitation", filePath: "songs/41.mp3", coverPath: "covers/8.jpg", id:'40'},
    {songName: "JJD - Can't Say No", filePath: "songs/42.mp3", coverPath: "covers/6.jpg", id:'41'},
    {songName: "ANGELPLAYA - PULL UP", filePath: "songs/43.mp3", coverPath: "covers/3.jpg", id:'42'},
    {songName: "Rob Gasser & Miss Lina - Rift", filePath: "songs/44.mp3", coverPath: "covers/2.jpg", id:'43'},
    {songName: "Jack Shore & KORA - Memory Nights", filePath: "songs/45.mp3", coverPath: "covers/8.jpg", id:'44'},
    {songName: "32Stitches & GNDHI - Wish You The Best", filePath: "songs/46.mp3", coverPath: "covers/13.jpg", id:'45'},
    {songName: "borne - Bonfire ft. imallryt", filePath: "songs/47.mp3", coverPath: "covers/15.jpg", id:'46'},
    {songName: "Lennart Schroot - Fata Morgana", filePath: "songs/48.mp3", coverPath: "covers/19.jpg", id:'47'},
    {songName: "SIIK & Alenn - Mess", filePath: "songs/49.mp3", coverPath: "covers/17.jpg", id:'48'},
    {songName: "Culture Code - Not Giving In ", filePath: "songs/50.mp3", coverPath: "covers/12.jpg", id:'49'},
]

songItems.forEach(function (element, i) {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('play').addEventListener('click', ()=>{
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

function copyURL() {
    var url = window.location.href;
  
    navigator.clipboard.writeText(url)
      .then(function() {
        // Provide feedback to the user
        alert('URL copied to clipboard: ' + url);
      })
      .catch(function(error) {
        // Handle error if clipboard access is denied
        console.error('Error copying URL to clipboard:', error);
      });
  }
  document.getElementById('copyButton').addEventListener('click', copyURL);




