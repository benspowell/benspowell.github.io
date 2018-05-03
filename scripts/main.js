var image = document.querySelector('img');
var header = document.querySelector('h1');
var button1 = document.querySelector('button');
var userName='';

if (!localStorage.getItem('name')){
    setName();
}else{
    userName=localStorage.getItem('name');
    header.textContent='hey '+userName;;
}
image.onmouseover=function() {
    if (image.getAttribute('src')==='images/face.png'){
        image.setAttribute('src','images/face2.jpg');
    }else{
        image.setAttribute('src','images/face.png');
    }
}
function setName(){
    userName=prompt('Enter your name');
    header.textContent='hey '+userName;
    localStorage.setItem('name',userName);
}
button1.onclick=function(){
    setName();
}
header.onclick=function() {
    header.textContent=header.textContent+' '+userName
}
