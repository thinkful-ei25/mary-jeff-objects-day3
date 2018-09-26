// Object creator
// In this drill, you need to write code for the createMyObject function so that it returns an object with the following key value pairs:

// foo => 'bar'
// answerToUniverse => 42
// olly olly => 'oxen free'
// sayHello => a function that returns the string 'hello'

// function createMyObject() {
// 	return {
// 		foo: 'bar',
// 		answerToUniverse: 42,
// 		'olly olly': 'oxen free',
// 		sayHello: function(){return 'hello';}
// 	}
// }

// let testObject = createMyObject();
// console.log(testObject);

////////////////////////////////////////////////////////////////////////////

// Object updater
// Modify the updateObject function (which takes a single argument (obj)) so that it adds the following key/value pairs to obj and returns it:

// foo => 'foo'
// bar => 'bar'
// bizz => 'bizz'
// bang => 'bang'

// function updateObject(obj) {
// 	obj.foo = 'foo',
// 	obj.bar = 'bar',
// 	obj.bizz = 'bizz',
// 	obj.bang = 'bang'
// 	return obj;
// }
// let test = {};
// console.log(updateObject(test));
///////////////////////////////////////////////////////


function personMaker() {
    var person = {
        firstName: 'Paul',
        lastName: 'Jones',
        fullName: function(){
            return this.firstName + ' ' + this.lastName;
        }
      };
    
      return person;
}
let person = personMaker();
console.log(person.fullName());




/////////////////////////
const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
  }

let test = keyDeleter(sampleObj);
console.log(test);
  