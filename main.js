

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

  function formattedString(value) {
    return value.split(",").join("<li>");
  }
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
    <a class="nav-link active" id="location-tab" data-toggle="tab" href="#a1" role="tab" aria-controls="#a1" aria-selected="true">Location</a>
      </li>
      <li class="nav-item">
    <a class="nav-link" id="hours-tab" data-toggle="tab" href="#b1" role="tab" aria-controls="#b1" aria-selected="false">Hours</a>
      </li>
      <li class="nav-item">
    <a class="nav-link" id="admission-tab" data-toggle="tab" href="#c1" role="tab" aria-controls="#c1" aria-selected="false">Admission</a>
      </li>
      <li class="nav-item">
    <a class="nav-link" id="types-tab" href="#d1" data-toggle="tab" role="tab" aria-controls="#d1" aria-selected="false">Type of Media</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#e1" id="featured-tab" data-toggle="tab" role="tab" aria-controls="#e1" aria-selected="false">Featured</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#f1" id="website-tab" data-toggle="tab" role="tab" aria-controls="#f1" aria-selected="false">Website</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#g1" id="phone-tab" data-toggle="tab" role="tab" aria-controls="#g1" aria-selected="false">Phone Number</a>
      </li> 
      <li class="nav-item">
      <a class="nav-link" href="#h1" id="email-tab" data-toggle="tab" role="tab" aria-controls="#h1" aria-selected="false">E-mail</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
    <div class="tab-pane fade show active" id="a1" role="tabpanel" aria-labelledby="location-tab">
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
  <h3 style="margin-left: 42%; color: white; background-color: emerald; margin-right: 38%; text-align: center;">${location}</h3>
    </div>
  
  
    
  <div class="tab-pane" id="b1" role="tabpanel" aria-labelledby="hours-tab">
  <h3 style="color: white; background-color: teal blue; width: 26rem;">${formattedString(hours)}</h3>
  </div>
  <div class="tab-pane" id="c1" role="tabpanel" aria-labelledby="admission-tab">
  <h3 style="color: white"; background-color: teal blue; width: 26rem;"> ${formattedString(admission)}</h3>
  </div>
  <div class="tab-pane" id="d1" role="tabpanel" aria-labelledby="types-tab">
  <h3 style="color: white"; background-color: teal blue; width: 26rem;"> ${formattedString(types)}</h3>
  </div>
  <div class="tab-pane" id="e1" role="tabpanel" aria-labelledby="Featured-tab">
  <h3 style="color: white"; background-color: teal blue; width: 26rem;"> ${formattedString(featured)}</h3>
  </div>
  <div class="tab-pane" id="f1" role="tabpanel" aria-labelledby="website-tab">
  <h3 style="color: white"; background-color: teal blue; width: 26rem;"> ${formattedString(website)}</h3>
  </div>
  <div class="tab-pane" id="g1" role="tabpanel" aria-labelledby="phone-tab">
  <h3 style="color: white"; background-color: teal blue; width: 26rem;"> ${formattedString(phone)}</h3>
  </div>
  <div class="tab-pane" id="h1" role="tabpanel" aria-labelledby="email-tab">
  <h3 style="color: white"; background-color: teal blue; width: 26rem;"> ${formattedString(email)}</h3>
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
