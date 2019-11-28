

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  
  
  
        
    
  var getAllRecords = function() {
    $.getJSON(
      "https://api.airtable.com/v0/appoci57C5iSEDYla/Design%20projects?api_key=keyUmKgG0SBwMYcij",
      function(airtable) {
        var html = [];
        $.each(airtable.records, function(index, record) {
          var id = record.id;
          var logo = record.fields["Museum Logo"];
          var name = record.fields["Name"];
          html.push(listView(id, logo, name));
        });
        $(".list-view").append(html);
      }
    );
  };

  var listView = function(id, logo, name) {
    return `
    <div class="card" style="width: 25rem;">
    ${logo ? `<img src="${logo[0].url}">` : ``}
    <div class="card-body">
     <div class= "card-title"><p>${name}</p></div>
      <button type="button" class="btn btn-outline-dark"><a href="index.html?id=${id}">Details</a></button>
    </div>
    `;
  };

  /* function addCard (fields){
      $(".card-deck").append(`<div class="card" style="width: 18rem;">
      <img class="card-img-top" src="` +   fields["Museum Logo"][0].thumbnails.large.url +`" alt="Track image cap">
      <div class="card-body">
       <div class= "card-title">`+
       fields["Name"] + 
       `</div>
       <button type="button" class="btn btn-outline-dark museumView" data-name="`+ fields["Name"] + `">Details</button>
      </div>

    </div>`);
    $(".museumView").click(function() {
      console.log($(this).data("name"));
      var museumName = $(this).data("name");
      console.log("museumName clicked: " + museumName);
      viewMuseum(window.menuData[museumName]);
    });
  }

var viewMuseum = function(fields) { */


      //$(".content").html(`<div class="container"><h6>`+ fields["Name"] + `</h6></div>`);<div class="carousel-item active">
      
      /* $(".content").html(`<div class="container">
<ul class="nav nav-tabs">
      <li class="nav-item">
    <a class="nav-link active" href="#1a" data-toggle="tab">Location</a>
      </li>
      <li class="nav-item">
    <a class="nav-link" href="#1b" data-toggle="tab">Hours</a>
      </li>
      <li class="nav-item">
    <a class="nav-link" href="#1c" data-toggle="tab">Admission</a>
      </li>
      <li class="nav-item">
    <a class="nav-link" href="#1d"data-toggle="tab">Media</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#1e" data-toggle="tab">Featured Exhibitions</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#1f" data-toggle="tab">Website</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#1g" data-toggle="tab">Contact Information</a>
      </li>

</ul>
      <div class="tab-content clearfix">
        <div class="tab-pane active" id="1a">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
      <div class="tab-pane" id="1b">
      </div>
      <div class="tab-pane" id="1c">
      </div>
      <div class="tab-pane" id="1d">
      </div>
      <div class="tab-pane" id="1e">
      </div>
      
</div>
          
            
         </div>
        
         </div>
        </div>

      
       </div>`);

       $(".carousel-inner").append(`<div class="carousel-item active"><img class="d-block w-100" src="` +   fields["Museum  images"][0].thumbnails.large.url +`" alt="First slide" >
       
       </div>`);

      $()
  }

  function listViewBase (){
      $(".content").html(`<div class="card-deck">
      
    </div>`)
  } */

 
  var getOneRecord = function(id) {
    $.getJSON(
      `https://api.airtable.com/v0/appoci57C5iSEDYla/Design%20projects/${id}?api_key=keyUmKgG0SBwMYcij`,
      function(record) {
        var html = [];
        var name = record.fields["Name"];
        var images = record.fields["Museum  images"];
        var location = record.fields["Location"];
        var hours = record.fields["Museum Open Hours"];
        var admission = record.fields["Admission Cost"];
        var types = record.fields["Type of Media"];
        var featured = record.fields["Featured"];
        var website = record.fields["Museum's website"];
        var phone = record.fields["Phone Number"];
        var email = record.fields["Email"];
        html.push(
          detailView(
            name, images, hours, location, admission, types, featured, website, phone, email
          )
        );
        $(".detail-view").append(html);
      }
    );
  };
 
  var detailView = function(name, images, hours, location, admission, types, featured, website, phone, email) {
    var result= `
    
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
    <a class="nav-link active" id="location-tab" data-toggle="tab" href="#1a" role="tab" aria-controls="#1a" aria-selected="true">Location</a>
      </li>
      <li class="nav-item">
    <a class="nav-link" id="hours-tab" data-toggle="tab" href="#1b" role="tab" aria-controls="#1b" aria-selected="false">Hours</a>
      </li>
      <li class="nav-item">
    <a class="nav-link" id="admission-tab" data-toggle="tab" href="#1c" role="tab" aria-controls="#1c" aria-selected="false">Admission</a>
      </li>
      <li class="nav-item">
    <a class="nav-link" href="#1d" data-toggle="tab">Media</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#1e" data-toggle="tab">Featured Exhibitions</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#1f" data-toggle="tab">Website</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#1g" data-toggle="tab">Contact Information</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="1a" role="tabpanel" aria-labelledby="location-tab">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">`;
    for (var i=0; i < images.length; i++) {
      result= result +`<div class="carousel-item ` + (i==0 ? "active" : "") + 
      `"><img src="` + images[i].url + `" alt="`+ name + `" class="d-block w-100"></div>`;

    }
    result= result + `
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <h3${name}</h3>
  <h3>${location}</h3>
    </div>
  
  
    
  <div class="tab-pane" id="1b" role="tabpanel" aria-labelledby="hours-tab">
  <p>h</p>
  </div>
  <div class="tab-pane" id="1c" ole="tabpanel" aria-labelledby="admission-tab>
  </div>
  <div class="tab-pane" id="1d">
  </div>
  <div class="tab-pane" id="1e">
  </div>
  <div class="tab-pane" id="1f">
  </div>
  <div class="tab-pane" id="1g">
  </div>
          
            
        
        
         
    `;
    return result;
  };

  var id = getParameterByName("id");
if (id) {
  getOneRecord(id);
} else {
  getAllRecords();
}
  /* function addCards (fields){
    $(".card-deck1").append(`<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="` +   fields["Museum Logo"][0].thumbnails.large.url +`" alt="Track image cap">
    <div class="card-body">
     <div class= "card-title">`+
     fields["Name"] + 
     `</div>
     <button type="button" class="btn btn-outline-dark compass" data-name="`+ fields["Name"] + `">Details</button>
    </div>
  </div>`);
  $(".compass").click(function() {
    console.log($(this).data("name"));
    var fields = window.menuData[$(this).data("name")];
    $(".content").html(`<div class="container"><h6>`+ fields["Name"] + `</h6></div>`);

  })
}


  $(document).ready(function(){
listViewBase();
getAllRecords();
  }); 
 */
