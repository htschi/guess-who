console.log('Guess Who?')

// By clicking a card the this function will be triggered. the class eliminated (change opacity) will be add to the clicked card
function toggleEliminated(card) {
   card.classList.toggle('eliminated')
}

// Create a Array with each Cards and the information regarding name and image
let cardList = document.querySelectorAll('.card')
let newCardList = []
for(let i = 0; i < 20; i++) {
   newCardList[i] = [{
      name: cardList[i].querySelector('span').innerHTML,
      image: cardList[i].querySelector('img').src
   }] 
}

function selectRandomCard() {
   // Create a random number
   let randomIndex = Math.random()*19
   let randomIndexRounded = Math.round(randomIndex)
   
   // Pick a random Card from the newCardList and set it to the mystery card
   let randomCard = newCardList[randomIndexRounded]
   document.querySelector('.mystery-card').querySelector('span').innerHTML = randomCard[0].name
   document.querySelector('.mystery-pic').src = randomCard[0].image
}
selectRandomCard()