const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')

const jump = () => {
 
    mario.classList.add('jump');
    

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
   
    const pipePosition = pipe.offsetLeft; //deslocamento (offset) esquerdo (left)
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //get computed style retorna todas as informações do css, o + é para converter para número

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 100){

        pipe.style.animation = 'none'; //coloca a animação none que quer dizer nenhuma
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'; //coloca a animação none que quer dizer nenhuma
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './assets/images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clouds.style.animation = 'none'; //coloca a animação none que quer dizer nenhuma
        clouds.style.left = `${cloudsPosition}px`;
        console.log(cloudsPosition);

        clearInterval(loop); // para parar o loop

    }
}, 10)

document.addEventListener("keypress", jump);
