let frankie = {
    name: 'Frankie',
    age: 1,
    interests: ['cuddling','chasing strings','catnip'],
};

let jumper = {
    name: 'Jumper',
    age: 2,
    interests: ['jumping','bounding','leaping'],
};

let serena = {
    name: 'Serena',
    age: 6,
    interests: ['domination','holding grudges','being aloof'],
};

let kittenContainerElem = document.getElementById('kittenprofiles');
function displayKitten(kittenObj) {
    let articleElem = document.createElement('article');
    kittenContainerElem.appendChild(articleElem);
    let nameHeaderElem = document.createElement('h2');
    nameHeaderElem.textContent = kittenObj.name;
    articleElem.appendChild(nameHeaderElem);
}
