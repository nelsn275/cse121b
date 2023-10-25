let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let age = document.getElementById('age')
let email = document.getElementById('email')
let profileCard = document.getElementById('profile')
var createButton = document.getElementById('create')
const apiURL = 'https://api.thecatapi.com/v1/images/search'
let pictureURL
let catFacts = ['Fluffy', 'Crazy', 'Cuddly', 'Playful']


async function getCat(url){
    const response = await fetch(url)
    if (response.ok){
        const data = await response.json()
        pictureURL = data[0].url
    }
}
getCat(apiURL)

createButton.addEventListener('click', ()=>{
let profileHeader = document.createElement('h2')
let ageSpan = document.createElement('span');
let picture = document.createElement('img')
let contactInfo = document.createElement('h4')
picture.src = pictureURL
picture.style.width = '100px'


let listTitle = document.createElement('h3')
listTitle.textContent = 'Your cat is: '
let factsList = document.createElement('ul')
catFacts.forEach(function(catFact){
    fact = document.createElement('li')
    fact.textContent = catFact
    factsList.appendChild(fact)
})

ageSpan.style.fontSize = 'small';
ageSpan.textContent = age.value;

contactInfo.textContent = email.value
profileHeader.textContent = `${lastName.value}, ${firstName.value} `
profileHeader.appendChild(ageSpan)

profileCard.appendChild(picture)
profileCard.appendChild(contactInfo)
profileCard.appendChild(listTitle)
profileCard.appendChild(factsList)
profileCard.appendChild(profileHeader)


// firstName.value = ''
// lastName.value = ''
// age.value = ''
// email.value = ''
    
})
