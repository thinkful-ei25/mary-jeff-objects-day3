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