// declaring variables for each class of images
let graphics = document.querySelectorAll('.graphics');
let web = document.querySelectorAll('.web');
let photography = document.querySelectorAll('.photography');
let img = document.querySelectorAll('.productImg');

// declaring variables for the links
let allLink = document.querySelector('#allLink');
let graphicsLink = document.querySelector('#graphicsLink');
let webLink = document.querySelector('#webLink');
let photographyLink = document.querySelector('#photographyLink');

// declaring a function to activate and deactivate a link
function activate(element){
    element.style.color = '#ffffff';
}
function deactivate(element){
    element.style.color = '#000000';
}

// activating the all link
activate(allLink);

// declaring a function to hide elements
function hide(element){
    element.forEach(element => {
        element.style.display = 'none';
    });
}

// declaring a function to show elements
function show(element){
    element.forEach(element => {
        element.style.display = 'inline-block';
    });
}

// declaring functions to resize images
function enlarge(){
    img.forEach(img => {
        img.style.width = '20vw';
        img.style.height = '20vh';
    });
}
function reduce(){
    img.forEach(img => {
    img.style.width = '15vw';
    img.style.height = '15vh';
});
}

// declaring functions to choose the images to be shown
function showAll(){
    show(graphics);
    show(web);
    show(photography);
    activate(allLink);
    deactivate(graphicsLink);
    deactivate(webLink);
    deactivate(photographyLink);
    reduce();
}
function showGraphics(){
    show(graphics);
    hide(web);
    hide(photography);
    activate(graphicsLink);
    deactivate(allLink);
    deactivate(webLink);
    deactivate(photographyLink);
    enlarge();
}
function showWeb(){
    show(web);
    hide(graphics);
    hide(photography);
    activate(webLink);
    deactivate(allLink);
    deactivate(graphicsLink);
    deactivate(photographyLink);
    enlarge();
}
function showPhotography(){
    show(photography);
    hide(graphics);
    hide(web);
    activate(photographyLink);
    deactivate(allLink);
    deactivate(graphicsLink);
    deactivate(webLink);
    enlarge();
}


