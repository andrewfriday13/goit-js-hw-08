import throttle from 'lodash.throttle'; 
import Player from '@vimeo/player';

const vimeo = document.getElementById("vimeo-player")

const players = new Player('handstick', {
    id: 19231868,
    width: 640
});

players.on('timeupdate', throttle(({ seconds }) =>
    localStorage.setItem('videoplayer-current-time', seconds)), 500);

console.log("привіт")