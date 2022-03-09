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



    function newBoard() {
        cardArr.forEach( (i) => {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/back.jpeg')
            card.setAttribute('card-id', i)

            board.appendChild(card)
        })
    }

    

    newBoard()
})