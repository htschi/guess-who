console.log('Guess Who?')

// By clicking a card the this function will be triggered. the class eliminated (change opacity) will be add to the clicked card
function toggleEliminated(card) {
   card.classList.toggle('eliminated')
}