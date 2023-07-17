function generateArray(array) {
    array = [];
    for (let i = 1; i < 9; i++) {
        array.push(i)
        array.push(i)

    }
    return array
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

const gameArray = (shuffle(generateArray()))


document.addEventListener('DOMContentLoaded', () => {
    gameStart()
})

const cards = [];
let firstCard = null;
let secondCard = null;


function createBoard() {
    let gameRow = document.createElement('div')

    gameRow.classList.add('row', 'align-items-center', 'justify-content-center')


    return gameRow

}

function createCard () {
    let cardId = gameArray[cards.length]
    let card = {
        cardId,
        isMatched: false,
        isOpen: false,
    }

    const gameCard = document.createElement('div')
    gameCard.classList.add('col-3')
    gameCard.textContent = 'Card'
    gameCard.style.height = '300px'
    gameCard.style.margin = '0 0 15px 0'
    gameCard.style.padding = '15px'
    gameCard.style.borderRadius = '10px'
    gameCard.textContent = card.cardId;
    gameCard.id = cardId;

    function checkOpenedCards() {
        for (let item of document.querySelectorAll('.col-3')) {
            item.classList.remove('selected')
        }
    }

    cards.push(card)

    gameCard.addEventListener('click', () => {
        if (firstCard === null) {
            firstCard = card;
            gameCard.classList.add('selected')
            console.log(gameCard)
        } else {
            if (secondCard === null) {
                secondCard = card
                gameCard.classList.add('selected')
                console.log(secondCard)
            }
            if (firstCard.cardId === secondCard.cardId) {
                let allCards = document.querySelectorAll('.col-3')


                for (let item of allCards) {
                    if (+item.id === +firstCard.cardId) {
                        item.classList.add('matched')
                        item.style.pointerEvents = 'none'
                    }

                }

                firstCard.isMatched = true;
                secondCard.isMatched = true;
                setTimeout(checkOpenedCards, 1000);
                firstCard = null;
                secondCard = null;
            } else {
                firstCard = null;
                secondCard = null;
                setTimeout(checkOpenedCards, 1000);
            }
        }

    })






    return {
        gameCard,
        card
    }
}

function gameStart() {
    let gameContainer = document.querySelector('.container-fluid')
    let bordCreation = createBoard();

    gameContainer.append(bordCreation)

    for (let i = 0; i < 16; i++) {
        let cardCreation = createCard();
        bordCreation.append(cardCreation.gameCard)
    }
}
