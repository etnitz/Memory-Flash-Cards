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

    cardArr.sort( () => 0.5 - Math.random())
    

    const board = document.querySelector('.game-board')
    let cardsClickedId = []
    let cardsMatched = []
    
    const newBoard = () => {
        cardArr.forEach( (i) => {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/back.jpeg')
            card.setAttribute('card-id', i.img)
            card.addEventListener('click', flip)
            board.appendChild(card)
        })
    }

    const match = () => {
        let cards = document.querySelector('img')
        const cardOne = cardsClickedId[0]
        const cardTwo = cardsClickedId[1]
        if (cardsClickedId[0] === cardsClickedId[1]) {
            cards[cardOne].setAttribute('src', 'images/check.png')
            cards[cardTwo].setAttribute('src', 'images/check.png')
            cardsMatched.push(cardsClickedId)
        } else {
            cards[cardOne].setAttribute('src', 'images/back.jpeg')
            cards[cardTwo].setAttribute('src', 'images/back.jpeg')
        }
    }

    const flip = ()  => {
        let cardId = event.currentTarget.getAttribute('card-id')
        cardsClickedId.push(cardId)
        event.currentTarget.setAttribute('src', cardId)
        if (cardsClickedId.length === 2) {
            setTimeout(match, 500)
        }
    }
    newBoard()
})