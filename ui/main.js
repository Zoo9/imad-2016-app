//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
  //Make a request to the counter endpoint
  
  //Capture the response and store it in a variable
  
  //render the variable in a correct span
  counter = counter + 1;
  var span = document.getElementById('counts');
  span.innerHTML  = counter.toString();
};









/*
console.log('Loaded!');
//change the text
var element = document.getElementById('main-text');
element.innerHTML = 'Bye bye';
//move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};
*/