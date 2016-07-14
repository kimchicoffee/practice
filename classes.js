//functional
  var dog = function(breed){
    var obj = {breed:breed};
    obj.bark = function(){
      console.log("wowowow");
    };
    return obj
  }

  var honeybell = dog("daschund");
  // if we console.log honeybell it would be {breed:'daschund', bark:function}
  // pros : easy to read
  // cons : it's creating function object when we instanciate.

//functional share
  var dog = function(breed){
    var obj = {};
    obj.breed = breed;
    obj.assign(dogMethod); // obj._extend(dogMethod)
    //obj.bark = dogmethod.bark
    return obj;
  };

  var dogMethod = {};
  dogMethod.bark = function(){
    this.breed = 'I dont know';
  }

  var honeybell = dog('daschund');
  // pros: it's not creating new function object when we instanciate
  // cons: refering object when it's called because of <this>. object have method when it's instanciated

//prototypal
  var dog = function(breed) {
    var obj = Object.create(dogMethod);
    obj.breed = breed;
    return obj;
  }
  var dogMethod = {};
  dogMethod.bark = function(){
    this.breed = 'I donot know';
  }
 var honeybell = dog('daschund');
 //pros: it attaches methods directly to the Object's prototype, so if we want to change methods,
 all the instance will have the connection with the changed methods even after instanceated.
 //cons:

//pseduclassical
  var Dog = function(breed) {
    this.breed = breed;
  }
  dog.prototype.bark = {
    this.breed = 'I donot know';
  }

  var honeybell = new Dog(breed);
// pros: less code
// cons: complecation under the hood especially whne you want subclass inheritance.