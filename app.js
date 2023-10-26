const music = new Audio('audio/1.mp3');
//music.play();

const songs = [
    {
        id: '1',
        songName: `Chicksilog <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/1.jpg",
    },
    {
        id: '2',
        songName: `Halik <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/2.jpg",
    },
    {
        id: "3",
        songName: `Ambisyoso <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/3.jpg",
    },
    {
        id: "4",
        songName: `Narda <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/4.jpg",
    },
    {
        id: "5",
        songName: `Huling Sayaw <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/5.jpg",
    },
    {
        id: "6",
        songName: `Direktors Cut <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/6.jpg",
    },
    {
        id: "7",
        songName: `Martyr Nyeber <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/7.jpg",
    },
    {
        id: "8",
        songName: `First Day High <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/8.jpg",
    },
    {
        id: "9",
        songName: `My Tender Bear <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/9.jpg",
    },
    {
        id: "10",
        songName: `A.I.D.S. <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/10.jpg",
    },
    {
        id: "11",
        songName: `Petix <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/11.jpg",
    },
    {
        id: "12",
        songName: `Sobrang Inet <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/12.jpg",
    },
    {
        id: "13",
        songName: `Ung Tagalog <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/13.jpg",
    },
    {
        id: "14",
        songName: `Lucky <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/14.jpg",
    },
    {
        id: "15",
        songName: `Girlfriend <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/15.jpg",
    },
    {
        id: "16",
        songName: `Hanggang Tingin <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/16.jpg",
    },
    {
        id: "17",
        songName: `If You're Not<br> Here <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/17.jpg",
    },
    {
        id: "18",
        songName: `mmm.Sarap <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/18.jpg",
    },
    {
        id: "19",
        songName: `Alay <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/19.jpg",
    },
    {
        id: "20",
        songName: `Tagpuan <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/20.jpg",
    },
    {
        id: "21",
        songName: `Paano <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/21.jpg",
    },
    {
        id: "22",
        songName: `Ikaw Parin Pla <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/22.jpg",
    },
    {
        id: "23",
        songName: `Seksi Seksi <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/23.jpg",
    },
    {
        id: "24",
        songName: `M.M.K. <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/24.jpg",
    },
    {
        id: "25",
        songName: `Shoot Dat Ball <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/25.jpg",
    },
    {
        id: "26",
        songName: `420 <br>
        <div class="subtitle">Kamikazee</div>`,
        poster: "image/26.jpg",
    },
]

//Play and Pause Function and image//
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () =>{
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays= () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}



//Play and Pause Function and image//
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.mp3`;
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} =elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
    });
})
//Play and Pause Function and image//

//timer function//

let currentStart = document.getElementById ('currentStart')
let currentEnd = document.getElementById ('currentEnd')
let seek = document.getElementById ('seek')
let bar2 = document.getElementById ('bar2')
let dot = document.getElementsByClassName ('dot')[0]

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    //console.log (music_dur)

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    //console.log(min1)
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    //console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

seek.addEventListener(`change`, () => {
    music.currentTime = seek.value * music.duration / 100;
});
//Volume function

let vol_icon = document.getElementById ('vol_icon');
let vol = document.getElementById ('vol');
let vol_bar = document.getElementsByClassName ('vol_bar')[0];
let vol_dot = document.getElementById ('vol_dot');

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

//next and back function

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} =elss;
            title.innerHTML = songName;
        });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
})

next.addEventListener ('click', () => {
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} =elss;
            title.innerHTML = songName;
        });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
});




//left and right function selection of music//
let rock_song_left = document.getElementById('rock_song_left');
let rock_song_right = document.getElementById('rock_song_right');
let rock_song = document.getElementsByClassName('rock_song')[0]


rock_song_right.addEventListener('click', () =>{
    rock_song.scrollLeft +=330
});
rock_song_left.addEventListener('click', () =>{
    rock_song.scrollLeft -=330
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0]


pop_art_right.addEventListener('click', () =>{
    Artists_bx.scrollLeft +=330
});
pop_art_left.addEventListener('click', () =>{
    Artists_bx.scrollLeft -=330
});
//left and right function selection of music//

//playing option Shuffle etc..//

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
                break;
    }
});

const next_music = () => {
        if (index == songs.length) {
            index = 1
        } else {
            index++;
        }
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `image/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.mp3`;
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} =elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
}
const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} =elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
   makeAllplays();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
}
const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `image/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;
    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songName} =elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

   makeAllBackground();
   Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
   makeAllplays();
   el.target.classList.remove('bi-play-circle-fill');
   el.target.classList.add('bi-pause-circle-fill');
   wave.classList.add('active1');
}

music.addEventListener('ended', () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
        case 'next':
            next_music();
        case 'random':
            random_music();
        break;

        default:
            break;
    }
});
