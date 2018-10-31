
    var htmlPlants="snippets/plants-snippet.html";
    var htmlPlantsLoop="snippets/plants-snippet-loop.html";
    var htmlFishes="snippets/fishes-shippet.html";
    var htmlGalery="snippets/gallery-snippet.html";
    var htmlHome="snippets/home-snippet.html";
    var urlPlants="data/plants.json";
    var contcont="<div class='container-content'>";


// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};


// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}

var loadHome = function(){
$ajaxUtils.sendGetRequest(
  htmlHome,
  function (res) {
    document.querySelector("#main-content").innerHTML = res;
  },
  false);
}



/*--------------------------------------------------*/
// Load the menu categories view
var loadPlants = function () {
  $ajaxUtils.sendGetRequest(
    urlPlants,/*json*/
    buildAndShowCategoriesHTML);
};


// Builds HTML for the categories page based on the data
// from the server
function buildAndShowCategoriesHTML (categories/*json(обэкт що буде оброблятись)*/) {

      // Retrieve single category snippet
      $ajaxUtils.sendGetRequest(htmlPlantsLoop,/*url до фрагменту який буде лупатись*/
        function (htmlPlantsLoop) {/*handle фрагменту який буде лупатись*/


          var categoriesViewHtml =
            buildCategoriesViewHtml(categories,
                                    htmlPlantsLoop);
          insertHtml("#main-content", categoriesViewHtml);
        },
        false);

}


// Using categories data and snippets html
// build categories view HTML to be inserted into page
function buildCategoriesViewHtml(categories,/*json*/
                                 htmlPlantsLoop){/*url до фрагменту який буде лупатись*/

  var finalHtml = "<div class='container-content' id='plants'>";

  for (var i = 0; i < categories.length; i++) {
    if (i%2==0){
      var float="plant-left";
    }else{
      var float="plant-right";
    }
    var html = htmlPlantsLoop;
    var name = categories[i].plantName;
    var pH = categories[i].pH
    var temp=categories[i].temperature;
    var hardness = categories[i].hardness;
    var lighting = categories[i].lighting;
    var co2 = urlPlants[i].co2;
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
