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
var name = document.getElementById('name');
name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Make a request to the server and send the list.
    
    //Capture it from the server and render it
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for(var i=0;i<names.length;i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('nameslist');
    ul.innerHTML = list;
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