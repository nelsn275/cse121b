/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Nicholas Nelson';
let currentYear = 2023;
let profilePicture = 'images/dolphin-boogeyboard.JPG';


/* Step 3 - Element Variables */
nameElement = document.getElementById('name');
foodElement = document.getElementById('food');
yearElement = document.querySelector('#year');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
document.querySelector('img').src = profilePicture;





/* Step 5 - Array */
let favFoods = ['Mac N Cheese', ' Homemade Pizza', ' Chocolate Chip Cookies'];
let favFood = ' Tacos';
foodElement.innerHTML += `<br>${favFoods}`
favFoods.push(favFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}`;





