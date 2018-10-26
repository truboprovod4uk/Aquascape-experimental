// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {

        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/plants.json", 
            function (res) {
              var reult="";
                for (var i=0; i<res.length; i++){
              var message = "<h3>" + res[i].plantName + "</h3>" + " " + res[i].description + "<img src="+ res[i].foto + " alt='aqua foto'>" ;
              reult+=message;
              }
              document.querySelector("#content")
                .innerHTML = "<p>" + reult + "</p>" ;
            });


      });
  }
);


