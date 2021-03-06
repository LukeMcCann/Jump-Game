const player = document.getElementById('player');
const block = document.getElementById('block');
document.addEventListener('click', jump);


function jump() {
    if (player.classList.contains('animate')) { return; }

    player.classList.add('animate');
    setTimeout(removeJump, 300);
};

function removeJump() {
    player.classList.remove('animate');
}

function checkDead() {
    let characterTop = parseInt(window.getComputedStyle(player).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        alert('Game over');
    }
}

setInterval(checkDead, 10);