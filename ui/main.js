console.log('Loaded!');
//change the text
var element = document.getElementById('main-text');
element.innerHTML = 'Bye bye';
//move the image
var img = document.getElementById('madi');
var marginRight = '10px';
img.onclick = function(){
    moveRight = marginRight + '10px';
};