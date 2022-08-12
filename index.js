// Change Img of Skill 
var i=0;
var skillimg=['/img/html.png','/img/css.jpg','/img/js.jpg','/img/c_c++.png','/img/python.jpg','/img/illustrator.jpg','/img/unity.jpg'];

var imgskill=document.getElementById("imgskill");

function changeImg(){
    imgskill.src=skillimg[i];
    i=(i+1)%skillimg.length;
}
setInterval(changeImg, 2000);