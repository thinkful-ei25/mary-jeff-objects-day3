// function makeStudentReport(data){
// let finalArray = [];
// for(let i=0; i<data.length; i++){
// 	finalArray.push(data[i].name + ': ' + data[i].grade);
// }
// console.log(finalArray);
// return finalArray;
// }

// const testData = [
//     { name: 'Jane Doe', grade: 'A' },
//     { name: 'John Dough', grade: 'B' },
//     { name: 'Jill Do', grade: 'A' },
//   ];

//   makeStudentReport(testData);

  /////////////////////////////////////////
/*
  function enrollInSummerSchool(students) {
  	let finalArray = [];
  	for(let i=0; i<students.length; i++) {
      let iteration = students[i];
  		finalArray.push({
        name: iteration.name, 
        status: 'In Summer School', 
        course: iteration.course}
        )
  	}
  	console.log(finalArray);
  	return finalArray;
  }



let studentObject = [
  { name: 'Tim', status: 'Current student',course: 'Biology'
},
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

enrollInSummerSchool(studentObject);


///////////////////////////////////////////

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  for (let i=0; i < items.length; i++) {
    let iteration = items[i];
    if (idNum === iteration.id) {
      return iteration;
    }
  }
}

console.log(findById(scratchData, 19));
console.log(findById(scratchData, 1));

*/
//////////////////////////////////////////

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};


const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {
  let objKeys = Object.keys(object);
 if (objKeys.length !== expectedKeys.length){
   return false;
 }
 for(let i=0; i < expectedKeys.length; i++) {
  if (!objKeys.find(key => key === expectedKeys[i])) {
    return false;
   }
  }
   return true; 
 }

 console.log(validateKeys(objectA,expectedKeys));
