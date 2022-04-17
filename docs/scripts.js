const card = document.querySelectorAll('.cell');
const front = document.querySelectorAll('.front');   
const back = document.querySelectorAll('.back');
const container = document.querySelector('.container');
const score = document.querySelector('.score span');
const audio = document.querySelector('.win');
const audioFim = document.querySelector('.parabens');

shuffleImage();
click();

function playAudio() {
    audio.play();
}

function playParabens() {
    audioFim.play();
}

function shuffleImage () {
   
    card.forEach(c => {
        const num = [...Array(card.length).keys()]
        const random = Math.floor(Math.random() * card.length)

        c.style.order = num[random]
    })
}

function click() {

    for(let i = 0; i < card.length; i++) {

        front[i].classList.add('show');

        setInterval(() => {
            front[i].classList.remove('show');
        }, 2000);

        card[i].addEventListener('click', () => {
            front[i].classList.add('flip');
            const flippedCard = document.querySelectorAll('.flip');

            if(flippedCard.length == 2) {
                container.style.pointerEvents = 'none';

                setInterval(() => {
                    container.style.pointerEvents = 'all';
                } , 1000);
                
                match(flippedCard[0], flippedCard[1]);
            }
        
        })
    }
}

function match(cardOne,cardTwo) {
    if(cardOne.dataset.index == cardTwo.dataset.index) {
        

        score.innerHTML = parseInt(score.innerHTML) + 1 + ' jogador de basquete';
             
        cardOne.classList.remove('flip');
        cardTwo.classList.remove('flip');

        cardOne.classList.add('match');
        cardTwo.classList.add('match');
          playAudio();

        if(score.innerHTML == '6 jogador de basquete') {
            score.innerHTML = 'Você venceu! Aqui pra você : <3';
            playParabens();     
            
        }

    } else{

        setTimeout(() => {
            cardOne.classList.remove('flip');
            cardTwo.classList.remove('flip');
        } , 1000);


    }
}

// teste2