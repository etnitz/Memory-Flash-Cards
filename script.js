document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'bee',
            img: 'images/bee.png'
        },
        {
            name: 'bee',
            img: 'images/bee.png'
        },
        {
            name: 'bird',
            img: 'images/bird.png'
        },
        {
            name: 'bird',
            img: 'images/bird.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'cow',
            img: 'images/cow.png'
        },
        {
            name: 'cow',
            img: 'images/cow.png'
        },
        {
            name: 'deer',
            img: 'images/deer.png'
        },
        {
            name: 'deer',
            img: 'images/deer.png'
        },
        {
            name: 'dog',
            img: 'images/dog.png'
        },
        {
            name: 'dog',
            img: 'images/dog.png'
        },
        {
            name: 'dolphin',
            img: 'images/dolphin.png'
        },
        {
            name: 'dolphin',
            img: 'images/dolphin.png'
        },
        {
            name: 'elephant',
            img: 'images/elephant.png'
        },
        {
            name: 'elephant',
            img: 'images/elephant.png'
        }
    ]

    const gameBoard = document.querySelector('.game-board')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []

    function createBoard() {
        for (i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/back.jpeg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            gameBoard.appendChild(card)
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosen[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.jpeg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpeg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/back.jpeg')
            cards[optionTwoId].setAttribute('src', 'images/back.jpeg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArraylength/2) {
            resultDisplay.textContent = 'Congratulations! you win!'
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    } 

    createBoard()
})
