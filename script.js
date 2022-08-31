const maincontainer = document.getElementById('container');
let sketchDiv = document.createElement('div');
sketchDiv.classList.add('sketch-container');

for(i = 0; i < 16; i++) {

    let div = document.createElement('div');
    div.setAttribute('class', 'box');
    sketchDiv.appendChild(div);
    
}

maincontainer.append(sketchDiv);
console.log(maincontainer);