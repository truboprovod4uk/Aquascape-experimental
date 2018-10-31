
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


    var loadPlants = function(){

        $ajaxUtils
          .sendGetRequest(urlPlants, 
            function (res) {
              var reult="";
                for (var i=0; i<res.length; i++){
              if (i%2==0){
                var float="<div class='plant-left'>";
              }else{
                var float="<div class='plant-right'>";
              }

              var foto = "<img src="+ res[i].foto + " alt='aqua foto'>" ;
              var name = "<h3>" + res[i].plantName + "</h3>";
              var pH="<ul>"+"<li>"+"Water pH: "+res[i].pH+"</li>";
              var temp="<li>"+"Temperature: "+res[i].temperature+"</li>";
              var hardness="<li>"+"Hardness: "+res[i].hardness+"</li>";
              var lighting="<li>"+"Lighting: "+res[i].lighting+"</li>";
              var co2="<li>"+"CO2: "+res[i].CO2+"</li></ul></div>";
              reult+=float+foto+name+pH+temp+hardness+lighting+co2;
              }
              document.querySelector("#main-content")
                .innerHTML = contcont+reult+"</div>";
            });
    }


    function loadPlants2(urlPlants,
                        htmlPlantsLoop) {

  var plants=urlPlants;

  for (var i = 0; i < urlPlants.length; i++) {
    // Insert category values
    var html = htmlPlantsLoop;
    var name = plants[i].plantName;
    var pH = plants[i].pH
    var hardness = plants[i].hardness;
    var lighting = plants[i].lighting;
    var co2 = plants[i].co2;
    html = insertProperty(html, "name", name);
    html = insertProperty(html, "pH", pH);
    html = insertProperty(html, "hardness", hardness);
    html = insertProperty(html, "lighting", lighting);
    html = insertProperty(html, "co2", co2);

    finalHtml += html;
  }

  finalHtml ;
  return finalHtml;
}
   

var loadHome = function(){

$ajaxUtils.sendGetRequest(
  htmlHome,
  function (res) {
    document.querySelector("#main-content").innerHTML = res;

  },
  false);


}