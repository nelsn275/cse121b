/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Nicholas Nelson",
    photo: "dolphin-boogeyboard.JPG",
    favoriteFoods: ['Mac N Cheese', 'Pizza', 'Brownies', 'Tikka Masala'],
    hobbies: ['Basketball', 'Spoiling my wife', 'Board Games', 'Coding'],
    placesLived: [],

};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place: 'Cornelius, Oregon',
    length: '14 years'
    }
);
myProfile.placesLived.push(
    {
        place: 'Rexburg, Idaho',
        length: '2 years'
    }
);



/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let list = document.createElement("li");
    list.textContent = hobby;
    document.querySelector("#hobbies").appendChild(list);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place =>{
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})

