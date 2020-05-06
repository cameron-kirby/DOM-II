// Get Selector Function
function get(selector){
    return document.querySelector(selector);
}

function getAll(selector){
    return document.querySelectorAll(selector);
}

// Selectors
logoType = get('.logo-heading');
heroImage = get('.intro img');
letsGoImage = get('#letsGoImage');
adventureImage = get('#adventureImage');
linkArray = Array.from(getAll('nav-link'));


// Create 10 unique event listeners 

function textShadow(selector, toggle){ // Event
    if(toggle) {
        selector.classList.add('textShadow');
    } else {
        selector.classList.remove('textShadow');
    }   
}

function imageTransparent(selector, toggle){ // Event function
    if(toggle) {
        selector.classList.add('transparent');
    } else {
        selector.classList.remove('transparent');
    }
}

function backgroundToBlue(selector){
    selector.classList.add('toBlue');
}

function imagePop(selector){
    selector.classList.add('pop');
}

function imageRotate(selector){
    selector.classList.add('rotate');
}

function toRed(event){
    get('.main-navigation').classList.add('toRed');
    get('body').classList.add('toRed');
}

function whiteText(event){
    get('body').classList.add('whiteText');
}

// Event Listeners
logoType.addEventListener('mouseover', function(event){textShadow(logoType, true)}); // Add on mouseover
logoType.addEventListener('mouseout', function(event){textShadow(logoType, false)}); // Remove on mouseout
document.addEventListener('keydown', function(event){imageTransparent(heroImage, true)}); // Add on keydown
document.addEventListener('keyup', function(event){imageTransparent(heroImage, false)}); // Remove on keyup
document.addEventListener('wheel', function(event){backgroundToBlue(get('.main-navigation'))}); // Change background on wheel event
letsGoImage.addEventListener('dblclick', function(){imagePop(letsGoImage)}); // Change image opacity on double click
letsGoImage.addEventListener('load', function(event){imageRotate(letsGoImage); event.stopPropagation();}); // Spins image on load, stops propagation for the document load
adventureImage.addEventListener('click', function(event){imageRotate(adventureImage)}); // Spins image on click
document.addEventListener('load', function(event){backgroundToBlue(get('body'))}); // Change background to blue on load, gets stopped
window.addEventListener('load', function(event){backgroundToBlue(get('body'))}); // Change background to blue on load
window.addEventListener('resize', toRed); // Changes colors to red on resize
window.addEventListener('scroll', whiteText); // Changes font color to white on scroll event

linkArray.forEach(function(index){ // Disable links
    linkArray[index].addEventListener('click', function(event){event.preventDefault();});
});