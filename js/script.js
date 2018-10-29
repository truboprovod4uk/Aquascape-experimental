// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    


        // Call server to get the name
        /*$ajaxUtils
          .sendGetRequest("data/plants.json", 
            function (res) {
              var reult="";
                for (var i=0; i<res.length; i++){
              if (i%2==0){
                var float="<div class='plant-left'>";
              }else{
                var float="<div class='plant-right'>"
              }
              var foto = "<img src="+ res[i].foto + " alt='aqua foto'>" ;
              var message = "<p>" + res[i].plantName + "</p>" + "<p>" + res[i].description+"</p></div>";
              reult+=float+foto+message;
              }
              document.querySelector("#plants")
                .innerHTML = "<p>" + reult + "</p>" ;
            });*/

        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/plants.json", 
            function (res) {
              var reult="";
                for (var i=0; i<res.length; i++){
              if (i%2==0){
                var float="<div class='plant-left'>";
              }else{
                var float="<div class='plant-right'>"
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
              document.querySelector("#plants")
                .innerHTML =  reult  ;
            });

  }
);


