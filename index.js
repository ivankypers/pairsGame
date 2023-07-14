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


function createBoard() {
    let gameRow = document.createElement('div')

    gameRow.classList.add('row', 'align-items-center', 'justify-content-center')


    return gameRow

}

function createCard () {
    let cardId = gameArray[cards.length]
    let card = {
        cardId,
        cardMatch: false,
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

    gameCard.addEventListener('click', () => {
        gameCard.classList.toggle('selected')

    })

    cards.push(card)

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
