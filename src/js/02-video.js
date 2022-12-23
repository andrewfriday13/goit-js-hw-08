import throttle from 'lodash.throttle'; 
import Player from '@vimeo/player'

const iframe = document.querySelector('iframe');

const players = new Player(iframe)

players.on('timeupdate', throttle(({ seconds }) => localStorage.setItem('videoplayer-current-time', seconds)), 1100);

players.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});