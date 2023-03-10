import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

setVideoTime();

player.on('timeupdate', throttle(handleGetCurrentTime, 1000));

function handleGetCurrentTime(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}

function setVideoTime() {
  if (localStorage.getItem(STORAGE_KEY)) {
    player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
  }
}
