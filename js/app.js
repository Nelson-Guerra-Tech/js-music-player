// targeting elements
const playerContainer = document.getElementById('player-container');
const image = document.getElementById('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// music
const songs = [
  {
    img: 'https://media.giphy.com/media/lWa7aAo62YZLwtk3nj/giphy.gif',
    name: 'Overflow',
    displayName: 'Overflow',
    artist: 'A.L.I.S.O.N',
  },
  {
    img: 'https://media.giphy.com/media/Zf7L4QMWo3RkI/giphy.gif',
    name: 'In-Passing',
    displayName: 'In Passing (En Passant)',
    artist: 'Zane Alenxander',
  },
  {
    img: 'https://media.giphy.com/media/3ov9k1173PdfJWRsoE/giphy.gif',
    name: 'Resonance',
    displayName: 'Resonance - F. Skyline Remix',
    artist: 'HOME',
  },
  {
    img: 'https://media.giphy.com/media/WoR3wMdCAHd2r8y19d/giphy.gif',
    name: 'Test-Pilot',
    displayName: 'Test Pilot',
    artist: 'Space Sailors',
  },
  {
    img: 'https://media.giphy.com/media/ZgCM9TWQ5lL8zpc4G2/giphy.gif',
    name: 'Universum',
    displayName: 'Universum',
    artist: 'Skykot',
  },
];

// playing or not boolean
let isPlaying = false;

// play function
const playSong = () => {
  isPlaying = true;
  // change button to pause
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');

  music.play();
};

// pause function
const pauseSong = () => {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');

  music.pause();
};

// play or pause eventlistener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// update DOM
const loadSong = (songs) => {
  title.textContent = songs.displayName;
  artist.textContent = songs.artist;
  music.src = `./music/${songs.name}.mp3`;
  image.src = `${songs.img}`;
};

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  // neon color
  if (songIndex === 1) {
    playerContainer.style.boxShadow =
      '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #00ffc6, 0 0 0.8rem #00ffc6, 0 0 2.8rem #00ffc6, inset 0 0 1.3rem #00ffc6';
  } else if (songIndex === 2) {
    playerContainer.style.boxShadow =
      '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #9900F0, 0 0 0.8rem #9900F0, 0 0 2.8rem #9900F0, inset 0 0 1.3rem #9900F0';
  } else if (songIndex === 3) {
    playerContainer.style.boxShadow =
      '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #F900BF, 0 0 0.8rem #F900BF, 0 0 2.8rem #F900BF, inset 0 0 1.3rem #F900BF';
  } else if (songIndex === 4) {
    playerContainer.style.boxShadow =
      '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #C4FB6D, 0 0 0.8rem #C4FB6D, 0 0 2.8rem #C4FB6D, inset 0 0 1.3rem #C4FB6D';
  } else if (songIndex === 0) {
    playerContainer.style.boxShadow =
      '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #FF85B3, 0 0 0.8rem #FF85B3, 0 0 2.8rem #FF85B3, inset 0 0 1.3rem #FF85B3';
  }
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);
  // neon color
  if (songIndex === 1) {
    playerContainer.style.boxShadow =
      '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #00ffc6, 0 0 0.8rem #00ffc6, 0 0 2.8rem #00ffc6, inset 0 0 1.3rem #00ffc6';
  } else if (songIndex === 2) {
    playerContainer.style.boxShadow =
      '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #9900F0, 0 0 0.8rem #9900F0, 0 0 2.8rem #9900F0, inset 0 0 1.3rem #9900F0';
  } else if (songIndex === 3) {
    playerContainer.style.boxShadow =
      '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #F900BF, 0 0 0.8rem #F900BF, 0 0 2.8rem #F900BF, inset 0 0 1.3rem #F900BF';
  } else if (songIndex === 4) {
    playerContainer.style.boxShadow =
      '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #C4FB6D, 0 0 0.8rem #C4FB6D, 0 0 2.8rem #C4FB6D, inset 0 0 1.3rem #C4FB6D';
  } else if (songIndex === 0) {
    playerContainer.style.boxShadow =
      '0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 2rem #FF85B3, 0 0 0.8rem #FF85B3, 0 0 2.8rem #FF85B3, inset 0 0 1.3rem #FF85B3';
  }
  playSong();
}

// On Load - Select First Song
loadSong(songs[songIndex]);

// event listerners for buttons
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
