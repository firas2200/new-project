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
  
  function makeActivite (name, price, location, image) {
    return {
      name,
      price,
      location,
      image,
      id: id(),
    };
  }
  
  function generateId() {
    var counter = 0;
    return function count() {
      var x = counter;
      counter = counter + 1;
      return x;
    }; 
} 
 
var  id = generateId(); 
 
var Activite1 = makeActivite(
    "Game Room", 
    100, 
    "sousse", 
    "mall of sousse.jpg"
); 
 
var Activite2 = makeActivite(
  "Game Room",
  120,
  "sfax",
  "sfax mall.jpg"
) 
var Activite3 = makeActivite(
  "Game park",
  100,
  "sousse", 
  "hannibal-park.jpg"
) 

var arr1 = [
  Activite1, 
  Activite2, 
  Activite3
] 


function show(array1) {
  $(".showw").empty();
  $(".showw").append();
  each(array1, function (element, i) {
    $(".showw ").append(
      `<div>
            <div class="item">
            <img id="${element.}" src="${element.image}" />
            <div class="item-info">
              <h2>${element.name}</h2>
              <h3>${element.price}$</h3>
              <h6>Size:${element.location}</h6>
              <div class="rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>

              <button class='buybutton' onclick="buy('${element.type}',${i})">Buy</button>
              </div>
            </div>
          </div>
             </div>
             `
    );
  });
}







