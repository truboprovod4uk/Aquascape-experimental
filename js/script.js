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

/*---------*/
var htmlPlantsLoop="snippets/plants-snippet.html";
var htmlFishesLoop="snippets/fishes-snippet.html";
var htmlGalery="snippets/gallery-snippet.html";
var htmlHome="snippets/home-snippet.html";
var urlPlants="data/plants.json";
var urlFishes="data/fishes.json";
var contcont="<div class='container-content'>";


// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {
// On first load, show home view
$ajaxUtils.sendGetRequest(
  htmlHome,
  function (res) {
    document.querySelector("#main-content").innerHTML = res;
  },
  false);
});



// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector).innerHTML = html;
};


// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string.replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}

var loadHome = function(){
$ajaxUtils.sendGetRequest(
  htmlHome,
  function (res) {
    document.querySelector("#main-content").innerHTML = res;
  },
  false);
};

var loadGallery = function(){
$ajaxUtils.sendGetRequest(
  htmlGalery,
  function (res) {
    document.querySelector("#main-content").innerHTML = res;
  },
  false);
};

/*----------------------Plants----------------------------*/
var loadPlants = function () {
  $ajaxUtils.sendGetRequest(
    urlPlants,
    buildAndShowPlantsHTML);
};
// Builds HTML for the plants page based on the data from the server
function buildAndShowPlantsHTML (categories/*json(обэкт що буде оброблятись)*/) {

      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(htmlPlantsLoop,/*url до фрагменту який буде лупатись*/
        function (htmlPlantsLoop) {/*handle фрагменту який буде лупатись*/
          var plantsViewHtml =
            buildPlantsViewHtml(categories,
                                    htmlPlantsLoop);
          insertHtml("#main-content", plantsViewHtml);
        },
        false);
}

// Using plants data and snippets html build plants view HTML to be inserted into page
function buildPlantsViewHtml(categories, htmlPlantsLoop){
  var finalHtml = "<div class='container-content' id='plants'>";
  for (var i = 0; i < categories.length; i++) {
    if (i%2==0){
      var float="plant-left";
    }else{
      var float="plant-right";
    }
    var html = htmlPlantsLoop;
    var name = categories[i].name;
    var pH = categories[i].pH
    var temp=categories[i].temperature;
    var hardness = categories[i].hardness;
    var lighting = categories[i].lighting;
    var co2 = categories[i].CO2;
    html = insertProperty(html, "float", float);
    html = insertProperty(html, "name", name);
    html = insertProperty(html, "pH", pH);
    html = insertProperty(html, "temp", temp);
    html = insertProperty(html, "hardness", hardness);
    html = insertProperty(html, "lighting", lighting);
    html = insertProperty(html, "co2", co2);
    finalHtml += html;
  }
  finalHtml += "</div>";
  return finalHtml;
}

/*----------------------End Plants------------------------*/



/*----------------------Fishes----------------------------*/

var loadFishes = function () {
  $ajaxUtils.sendGetRequest(
    urlFishes,
    buildAndShowFishesHTML);
};

function buildAndShowFishesHTML (categories/*json(обэкт що буде оброблятись)*/) {

      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(htmlFishesLoop,/*url до фрагменту який буде лупатись*/
        function (htmlFishesLoop) {/*handle фрагменту який буде лупатись*/
          var fishesViewHtml =
            buildFishesViewHtml(categories,
                                    htmlFishesLoop);
          insertHtml("#main-content", fishesViewHtml);
        },
        false);
}

// Using plants data and snippets html build plants view HTML to be inserted into page
function buildFishesViewHtml(categories, htmlFishesLoop){
  var finalHtml = "<div class='container-content' id='plants'>";
  for (var i = 0; i < categories.length; i++) {
    if (i%2==0){
      var float="plant-left";
    }else{
      var float="plant-right";
    }
    var html = htmlFishesLoop;
    var name = categories[i].name;
    var temp = categories[i].temperature;
    var lighting = categories[i].lighting;
    var size = categories[i].size;
    var lifespan = categories[i].lifespan;

    html = insertProperty(html, "float", float);
    html = insertProperty(html, "name", name);
    html = insertProperty(html, "temp", temp);
    html = insertProperty(html, "lighting", lighting);
    html = insertProperty(html, "size", size);
    html = insertProperty(html, "lifespan", lifespan);


    finalHtml += html;
  }
  finalHtml += "</div>";
  return finalHtml;
}