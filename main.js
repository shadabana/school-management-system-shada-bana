var students = [];

document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault()
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// Show success message
	showMessage('success');

    
});

function inputValidation(name, id, gdpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
}

// This week task:
// Show list of students 
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.



//display or show list
document.getElementById('display').addEventListener('click', (e) => {
	e.preventDefault()

	var html = "<table border='1|1' >";

	    for (var i = 0; i < students.length; i++) {
		html+="<tr>";
		html+="<td>"+students[i].name+"</td>";
		html+="<td>"+students[i].id+"</td>";
		html+="<td>"+students[i].gdpa+"</td>";
		
		html+="</tr>";
	}
	html+="</table>";
	document.getElementById("demo").innerHTML = html;

});



document.getElementById('Edit').addEventListener('click', (e) => {
	e.preventDefault()
	let nameInput = document.getElementById('name');
	let idInput = document.getElementById('idNumber');
	let gdpaInput = document.getElementById('gdpa');

	for (var i = 0; i < students.length; i++) {
		if(students[i].id==idInput.value ){
			students[i].name=nameInput.value;
			students[i].gdpa=gdpaInput.value;
			alert('Studnet edited!')
		}}
	
   
	
});


document.getElementById('Remove').addEventListener('click', (e) => {
	e.preventDefault()
	let nameInput = document.getElementById('name');
	let idInput = document.getElementById('idNumber');
	let gdpaInput = document.getElementById('gdpa');
	for (var i = 0; i < students.length; i++) {
		if(students[i].id==idInput.value&&students[i].name==nameInput.value&&students[i].gdpa==gdpaInput.value ){
			delete students[i].name;
			delete students[i].gdpa;
			delete students[i].id;
			alert('Studnet removed!')
		}}
	
   
	
	});