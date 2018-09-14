// var leapYear =function(Enter year); {return}
// function leapYear() {
// if (#year% 4 === 0){
// 	alert("This is a leap year");
// }else if (#year % 100 != 0){
// 	alert("This is not a leap year");
// }else if(#year% 400 === 0){
// 	alert("This is a leap year");
// }else {
// 	alert("Invalid");
// }
// }

var enter_year =document.getElementById('year').value;
console.log (enter_year)

function leapYear(enter_year) {
	if (enter_year% 4 === 0){
		alert("This is a leap year");
	}else if (enter_year % 100 != 0){
		alert("This is not a leap year");
	}else if(enter_year% 400 === 0){
		alert("This is a leap year");
	}else {
		alert("Invalid");
	}
}

// $(document).ready(function(){
// 	$("form#leapYear").submit(function(event){
// 		event.preventDefault():
//
// 		var Enter_year = ($("input#year").val())
// 		console.log(Enter_year)
// 		var result = leapYear(Enter_year);
// 	})
// })
