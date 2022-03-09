document.addEventListener('DOMContentLoaded', () => {
    
    const cardArr = [
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

    const board = document.querySelector('.game-board')
    let cardsClicked = []
    let cardsClickedId = []



    const board = () => {
        cardArr.forEach( (i) => {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/back.jpeg')
            card.setAttribute('card-id', i)
            card.addEventListener('click', flip)
            board.appendChild(card)
        })
    }

    const match = () => {
        let cards = document.querySelector('img')
        const cardOne = cardsClicked[0]
        const cardTwo = cardsClicked[1]
        if (cardsClicked[0] === cardsClicked[1]) {
            cards[cardOne].setAttribute('src', 'images/white.jpeg')
            cards[cardTwo].setAttribute('src', 'images/white.jpeg')
        } else {
            cards[cardOne].setAttribute('src', 'images/back.jpeg')
            cards[cardTwo].setAttribute('src', 'images/back.jpeg')
        }
    }

    const flip = () => {
        let cardId = this.getAttribute('card-id')
        cardsClicked.push(cardArr[cardId].name)
        cardsClickedId.push(cardId)
        this.setAttribute('src', cardArr[cardId].img)
        if (cardsClicked.length === 2) {
            setTimeout(match, 500)
        }
    }

    board()
})