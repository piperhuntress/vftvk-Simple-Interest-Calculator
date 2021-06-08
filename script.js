/* Final Project for Introduction to Cloud Development with HTML, CSS, and JavaScript
by: Jasmin Tumulak Estudillo
Developed: June 8,20201
*/
function compute()
{
    var principal = document.getElementById("principal").value;
/*Validation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"*/	
	if (principal<=0){
        alert("Enter a positive number."); 
		document.getElementById("principal").focus();
	}
	else{
		var rate = document.getElementById("rate").value;
		var years = document.getElementById("years").value;
		var interest = principal * years * rate /100;
		var year = new Date().getFullYear()+parseInt(years);
		var amount =  parseInt(interest);
		document.getElementById("result").innerHTML=
		"If you deposit <span class='numbers'>"+ principal+"<\/span>,\<br\>at an interest rate of <span class='numbers'>"+rate+"%<\/span>\<br\>You will receive an amount of <span class='numbers'>"+amount+"<\/span>\<br\>in the year <span class='numbers'>"+year+"<\/span>\<br\>";
	}
}
/* function that reads the value of the range slider and displays it the <span>adjacent to the slider.*/
    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}



