function themeApplier() {
var images = document.getElementsByTagName('img');
var videos = document.getElementsByTagName("video");
for (var i = 0, l = images.length; i < l; i++) {
images[i].style.filter="invert(100%)";
}
for (var i = 0, l = videos.length; i < l; i++) {
videos[i].style.filter="invert(100%)";
}
var css = 'html {-webkit-filter: invert(90%);color:#000000;background-color: #292727;';
head = document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';

style.appendChild(document.createTextNode(css));


//injecting the css to the head
head.appendChild(style);    
}
setTimeout(themeApplier, 0)
setInterval(themeApplier, 10000)