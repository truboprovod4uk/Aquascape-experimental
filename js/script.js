// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    


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
              var foto = "<img src="+ res[i].foto + " alt='aqua foto'><p>" ;
              var message = "<h3>" + res[i].plantName + "</h3>" + " " + res[i].description+"</p></div>";
              reult+=float+foto+message;
              }
              document.querySelector("#plants")
                .innerHTML = "<p>" + reult + "</p>" ;
            });



  }
);


