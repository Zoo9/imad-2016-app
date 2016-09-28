//counter code
var button = document.getElementById('counter');

button.onclick = function() {
  //Make a request to the counter endpoint
var request = new XMLHttpRequest();  
  //Capture the response and store it in a variable
  request.onreadystatechange = function (){
    if(request.readyState === XMLHttpRequest.DONE){
        //Take some action
        if(request.status === 200){
            var counter = request.responseText();
            var span = document.getElementById('counts');
            span.innerHTML  = counter.toString();
        }
    }
  };
  //make the request
 request.open('GET','http://zoo9.imad.hasura-app.io/counter', true);
 request.send(null);
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