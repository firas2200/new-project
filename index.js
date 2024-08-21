function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function (element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  


  function generateId() {
    var counter = 0;
    return function count() {
      var x = counter;
      counter = counter + 1;
      return x;
    }; 
} 




var idGenerate = generateId();

// Function to create a destination object
function destination(name) {
  return {
    name,
    list: [],
    addNewdestination: function(name, price, location, image) {
      var destination = {
        id: idGenerate(),
        name: name,
        price: price,
        location: location,
        image: image
      };
      this.list.push(destination);
      return destination;
    },
    displayItems: function() {
      $("#show").empty();
      for (var i = 0; i < this.list.length; i++) {
        display(this.list[i]);
      }
    }
  };
}


function display(destination) {
  var id = destination.id;
  $("#show").append(`
      <div class="card" id="destination-${id}">
          <img class="card-img-top" id="image${id}" src="${destination.image[0]}" alt="${destination.name}" />
          <div class="card-body">
              <h2 class="card-title" id="name${id}">${destination.name}</h2>
              <p class="card-text location" id="location${id}">Location: ${destination.location}</p>
              <p class="card-text price" id="price${id}">Price: $${destination.price}</p>
          </div>
      </div>
  `);

$(`#image${id}`).on("click", function() {
  var details = {
      "#detail-img": destination.image[0],
      "#detail-name": destination.name,
      "#detail-location": `Location: ${destination.location}`,
      "#detail-price": `Price: $${destination.price}`
  };

  $.each(details, function(parametre, value) {
      if (parametre === "#detail-img") {
          $(parametre)[0].src = value; 
      } else {
          $(parametre)[0].innerText = value; 
      }
  });

  
  $("#show").hide();
  $("#detailContainer").show();
});
}


var swimming = destination("Swimming");
var camping = destination("Camping");
var gaming = destination("Gaming");
var party = destination("Party")

swimming.addNewdestination('Thalassa', 80, "Sousse", ["thalassa.jpg"]);
swimming.addNewdestination('Aqua Splash', 50, "Sousse", ["aqua.jpg"]);
swimming.addNewdestination('folla', 100, "Sousse", ["folla.jpg"]);

camping.addNewdestination('Centre Camping Eye', 100, "Bizert", ["camping2.jpg"]);
camping.addNewdestination('Centre Camping Iheb', 100, "Ain Draham", ["camp.jpg"]);
camping.addNewdestination('Centre Camping Amal', 100, "Tozeur", ["sahraa.webp"]);

gaming.addNewdestination('gaming room', 100, "mall of sousse", ["mallsousse.jpg "]);
gaming.addNewdestination('carting', 80, "hergla sousse", ["karting.jpg "]);
gaming.addNewdestination('tags', 150, "mestir", ["tags.jpg"]); 

party.addNewdestination('saloon', 150, "sousse", ["saloon.jpg "]);
party.addNewdestination('three house', 120, "sousse", ["tree.jpg "]);
party.addNewdestination('zebra', 100, "gammarth", ["zebra.jpg "]);


$(".swimmingButton").on("click", function() {
  swimming.displayItems();
});

$(".campingButton").on("click", function() {
  camping.displayItems();
});

$(".gamingButton").on("click", function() {
  gaming.displayItems();
}); 
$(".partyButton").on("click", function() {
  party.displayItems();
});
$("#backButton").on("click", function() {
  $("#detailContainer").hide();
  $("#show").show();
});