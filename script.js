const mainContainer = document.getElementById('container');
const progressBar = document.getElementById('my-range');
const gridSize = document.querySelector('.grid-size');
const resetBtn = document.querySelector('.reset-btn');

function createGrid(e) {
    
    mainContainer.innerHTML = "";
    let progressBarValue = e.target.value;
    gridSize.innerText = `Grid size: ${progressBarValue} x ${progressBarValue}`;
    let sketchContainer = document.createElement('div');
    sketchContainer.classList.add('sketch-container');
    sketchContainer.style.setProperty("grid-template-columns", `repeat(${progressBarValue}, 1fr)`);
    for(i = 0; i < progressBarValue**2; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'square');
        sketchContainer.appendChild(div);
        mainContainer.appendChild(sketchContainer); 
    }
    
    let sketchChildren = [];
    sketchChildren = Array.from(sketchContainer.children);
    
    sketchChildren.forEach(sketchChild => {
        sketchChild.addEventListener('mousemove', function(e) {
            e.target.style.backgroundColor = "blue";
        });
    });

};


progressBar.addEventListener('click',createGrid);

resetBtn.addEventListener('click', function() {
    mainContainer.innerHTML = "";
    progressBar.value = 0;
    gridSize.innerText = "";
});