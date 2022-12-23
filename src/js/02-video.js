import throttle from 'lodash.throttle'; 

const iframe = document.querySelector('iframe');

const players = new Vimeo.Player(iframe);
console.log(players)

players.on('timeupdate', throttle(({ seconds }) => localStorage.setItem('videoplayer-current-time', seconds)), 500);
