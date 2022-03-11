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
        }
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