console.log('Guess Who?')

// Create an array with the cards and their attributes image and name
let cardArray = [{
   name: 'Sakura',
   image: 'images/characters_01.jpg'
},
{
   name: 'Kaede',
   image: 'images/characters_02.jpg'
},
{
   name: 'Aya',
   image: 'images/characters_03.jpg'
},
{
   name: 'Yuuki',
   image: 'images/characters_04.jpg'
},
{
   name: 'Mikoto',
   image: 'images/characters_05.jpg'
},
{
   name: 'Ren',
   image: 'images/characters_06.jpg'
},
{
   name: 'Ryo',
   image: 'images/characters_07.jpg'
},
{
   name: 'Yori',
   image: 'images/characters_08.jpg'
},
{
   name: 'Hana',
   image: 'images/characters_09.jpg'
},
{
   name: 'Tatsuya',
   image: 'images/characters_10.jpg'
},
{
   name: 'Taro',
   image: 'images/characters_11.jpg'
},
{
   name: 'Mai',
   image: 'images/characters_12.jpg'
},
{
   name: 'Emiko',
   image: 'images/characters_13.jpg'
},
{
   name: 'Ayumi',
   image: 'images/characters_14.jpg'
},
{
   name: 'Hotaru',
   image: 'images/characters_15.jpg'
},
{
   name: 'Haru',
   image: 'images/characters_16.jpg'
},
{
   name: 'Kazuya',
   image: 'images/characters_17.jpg'
},
{
   name: 'Akira',
   image: 'images/characters_18.jpg'
},
{
   name: 'Saki',
   image: 'images/characters_19.jpg'
},
{
   name: 'Kazuo',
   image: 'images/characters_20.jpg'
}]

/* Create a Array based on HTML code with each cards and the information regarding name and image.
   ONLY applied when its hardcoded in HTML*/
/* let cardList = document.querySelectorAll('.card')
   let newCardList = []
   for(let i = 0; i < 20; i++) {
   newCardList[i] = [{
      name: cardList[i].querySelector('span').innerHTML,
      image: cardList[i].querySelector('img').src
    }] 
} */

// By clicking a card the this function will be triggered. The class 'eliminated' (change opacity) will be added to the clicked card
function toggleEliminated(card) {
   card.classList.toggle('eliminated')
}

// Create a random mystery card
function selectRandomCard() {
   // Create a random number
   let randomIndex = Math.random()*19
   let randomIndexRounded = Math.round(randomIndex)
   
   // Pick a random card from the newCardList and set it to the mystery card
    let randomCard = cardArray[randomIndexRounded]
    document.querySelector('.mystery-card').querySelector('span').innerHTML = randomCard.name
    document.querySelector('.mystery-pic').src = randomCard.image
 }

selectRandomCard()

// Loop through the cardArray and add each card to the class '.cards', so the HTML code will be produce via JS
function populateCards() {
   
   for (let i = 0; i < cardArray.length; i++) {
      let image = cardArray[i].image
      let name = cardArray[i].name 
      document.querySelector('.cards').innerHTML += '<div class="card" onclick="toggleEliminated(this)"><img src=""/><span></span></div>'
      let listCards = document.querySelectorAll('.card')
      listCards[i].querySelector('img').src = image
      listCards[i].querySelector('span').innerHTML = name       

      console.log(document.querySelector('.cards').innerHTML)
   }
   
}

populateCards()
