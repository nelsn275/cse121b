/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples')
let templeList = []

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        var articleElement = document.createElement('article')

        var h3Element = document.createElement('h3')
        h3Element.textContent = temple.templeName

        var imgElement = document.createElement('img')
        var imageUrl = temple.imageUrl
        var location = temple.location
        imgElement.setAttribute('src', imageUrl)
        imgElement.setAttribute('alt', location)
        
        articleElement.appendChild(h3Element)
        articleElement.appendChild(imgElement)

        templesElement.appendChild(articleElement)
    })
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    if (response.ok){
        const data = await response.json()
        templeList = data
        displayTemples(templeList)
    }

}

/* reset Function */
const reset = async () => {
    while (templesElement.firstChild){
        templesElement.removeChild(templesElement.firstChild)
    }
}

/* sortBy Function */
const sortBy = async (temples) => {
    reset()
    var filter = document.querySelector('#sortBy')
    switch (filter.value){
        case 'utah':
            displayTemples(temples.filter(function (temple) {
                return !temple.location.includes("Utah");
              }));
              break;
        case "nonutah":
            displayTemples(temples.filter(function (temple) {
            return !temple.location.includes("Utah");
            }));
            break;
          
        case "older":
            displayTemples(temples.filter(function (temple) {
            return new Date(temple.dedicated) < new Date(1950, 0, 1);
            }));
            break;
        default:
            displayTemples(temples);
            break;

    }
}


getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => {sortBy(templeList)})

