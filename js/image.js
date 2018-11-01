var images = [
src="images/aqua/aqua-1.jpg",
src="images/aqua/aqua-2.jpg",
src="images/aqua/aqua-3.jpg",
src="images/aqua/aqua-4.jpg",
src="images/aqua/aqua-5.jpg",
src="images/aqua/aqua-6.jpg",
src="images/aqua/aqua-7.jpg",
src="images/aqua/aqua-8.jpg",
src="images/aqua/aqua-9.jpg",
src="images/aqua/aqua-10.jpg",
src="images/aqua/aqua-11.jpg",
];

var num = 0;
var cl = 0;

function next(){
var slider = document.getElementById("slider");
num++;
if(num>=images.length){
num = 0;
}
slider.src = images[num];
}

function prev(){
var slider = document.getElementById("slider");
num--;
if(num<=0){
num = images.length-1;
}
slider.src = images[num];
}