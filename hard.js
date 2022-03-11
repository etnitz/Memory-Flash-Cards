document.addEventListener('DOMContentLoaded', () => {
    
    const cardArr = [
        {
            name: 'gorilla',
            img: 'images/gorilla.png'
        },
        {
            name: 'gorilla',
            img: 'images/gorilla.png'
        },
        {
            name: 'kangaroo',
            img: 'images/kangaroo.png'
        },
        {
            name: 'kangaroo',
            img: 'images/kangaroo.png'
        },
        {
            name: 'ladybug',
            img: 'images/ladybug.png'
        },
        {
            name: 'ladybug',
            img: 'images/ladybug.png'
        },
        {
            name: 'lion',
            img: 'images/lion.png'
        },
        {
            name: 'lion',
            img: 'images/lion.png'
        },
        {
            name: 'octopus',
            img: 'images/octopus.png'
        },
        {
            name: 'octopus',
            img: 'images/octopus.png'
        },
        {
            name: 'panda',
            img: 'images/panda.png'
        },
        {
            name: 'panda',
            img: 'images/panda.png'
        },
        {
            name: 'pig',
            img: 'images/pig.png'
        },
        {
            name: 'pig',
            img: 'images/pig.png'
        },
        {
            name: 'rabbit',
            img: 'images/rabbit.png'
        },
        {
            name: 'rabbit',
            img: 'images/rabbit.png'
        },
        {
            name: 'sheep',
            img: 'images/sheep.png'
        },
        {
            name: 'sheep',
            img: 'images/sheep.png'
        },
        {
            name: 'turtle',
            img: 'images/turtle.png'
        },
        {
            name: 'turtle',
            img: 'images/turtle.png'
        },
    ]

    cardArr.sort( () => 0.5 - Math.random())
    

    const board = document.querySelector('.game-board')
    let cardsClicked = []
    let cardsMatched = []
    
    const newBoard = () => {
        cardArr.forEach( (i) => {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/back.jpeg')
            card.setAttribute('id', i.img)
            card.addEventListener('click', flip)
            board.appendChild(card)
        })
    }

    const match = () => {
        const cardOne = cardsClicked[0].id
        const cardTwo = cardsClicked[1].id
        
        if (cardOne === cardTwo) {
            cardsClicked[0].src = 'images/check.png'
            cardsClicked[1].src = 'images/check.png'
            cardsMatched.push(cardsClicked)
        } else {
            cardsClicked[0].src = 'images/back.jpeg'
            cardsClicked[1].src = 'images/back.jpeg'
        }
        cardsClicked = []
        console.log(cardsMatched)
        if (cardsMatched.length === cardArr.length / 2) {
            alert('You win!')
        }
    }

    const flip = (event)  => {
        let clickedCard = event.currentTarget
        cardsClicked.push(clickedCard)
        clickedCard.setAttribute('src', clickedCard.id)
        if (cardsClicked.length === 2) {
            setTimeout(match, 500)
        }
    }
    newBoard()
})