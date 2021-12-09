function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype); 

duck.eat(); 
beagle.eat(); 