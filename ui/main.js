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
            var counter = request.responseText;
            var span = document.getElementById('counts');
            span.innerHTML  = counter.toString();
        }
    }
  };
  //make the request
 request.open('GET','http://zoo9.imad.hasura-app.io/counter', true);
 request.send(null);
};

//Submit list

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Make a request to the server and send the list.
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
    //Capture it from the server and render it
    var names = request.responseText;
    names = JSON.parse(names);
    var list = '';
    for(var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('nameslist');
    ul.innerHTML = list;
        }
    };
    var nameInput = document.getElementById('name');
var name = nameInput.value;
     request.open('GET','http://zoo9.imad.hasura-app.io/submit-name?name='+name, true);
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