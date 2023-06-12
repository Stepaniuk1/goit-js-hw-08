import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const videoPlayer = document.querySelector('#vimeo-player');
const player = new Player(videoPlayer);

player.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(savedTime);
