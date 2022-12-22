import Player from '@vimeo/player';

const players = new Player('handstick', {
    id: 19231868,
    width: 640
});

players.on('play', function(currentTime) {
    const seconds = currentTime.seconds
localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
});

