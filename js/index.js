//Log out a message to show you've got JavaScript running
console.log("Script running!");



//Define a variable `myName` and log it out
let myName = "Kari Wang";
console.log(myName);


//Define a function `getVowelCount()`
function getVowelCount (aString) {
    let lowerCaseString = aString.toLowerCase();
    let modifiedString = lowerCaseString.replaceAll("a","");
    modifiedString = modifiedString.replaceAll("e","");
    modifiedString = modifiedString.replaceAll("i","");
    modifiedString = modifiedString.replaceAll("o","");
    modifiedString = modifiedString.replaceAll("u","");
    modifiedString = modifiedString.replaceAll("y","");
    let myString = lowerCaseString.length - modifiedString.length;
    return myString;
}



//Define a variable `numVowelsInName` and log it out
let numVowelsInName = getVowelCount(myName);
console.log(numVowelsInName);



//Create a variable `h1Elememt` that refers to the `<h1>` element in the DOM.
let h1Elememt = $('h1');
//Then change the text of that element
h1Elememt.text("Interactive Pet Viewer");



//Create a variable `footerElement` that refers to the `<footer>`, then
let footerElement = $('footer');
//change the HTML content of that element
footerElement.html('<small>All images from <a href="https://unsplash.com/">unsplash.com</a></small>');



//Change the CSS `display` property of the `#cats` element
$('#cats').css('display','none');
//Add the `active` class to the `#btnShowDogs` element
$('#btnShowDogs').addClass('active');




//Add an event listener to the buttons to respond to click events.
let button = $('.btn-group');
//The listener's function will toggle the `#dogs` and `#cats` divs,
//and toggle which button has the `active` class
button.on('click', function(event) { 
    $('#cats, #dogs').toggle("fast"); 
    $('#btnShowDogs, #btnShowCats').toggleClass('active'); 
})




//Change the `cursor` CSS property of the images
$('img').css({'cursor': 'pointer'});



//Add the `data-bs-toggle` and `data-bs-target` attributes to the images
$('img').attr('data-bs-toggle', 'modal'); 
$('img').attr('data-bs-target', '#theModal');



//Ad an event listener to the modal for `show.bs.modal` events.
//The listener's function will replace the modal's image `src` and
//`alt` attributes with the values from the clicked image.
$('#theModal').on('show.bs.modal', function(event) {
    let imageClicked = $(event.relatedTarget);
    $('#modalImage').attr("src", imageClicked.attr('src'));
    $('#modalImage').attr("alt", imageClicked.attr('alt'));
});