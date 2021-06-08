function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML=
    "If you deposit "+ "<span class='numbers'>"+principal+"</span>,\<br\>at an interest rate of "+"<span class='numbers'>+rate+"</span>"+"%\<br\>You will receive an amount of "+"<span class='numbers'>+amount+"</span>,\<br\>in the year "+year+"\<br\>"
}
/* function that reads the value of the range slider and displays it the <span>adjacent to the slider.*/
    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
/*alidation for "Principal" input box. If the user enters zero or negative values, show an alert "Enter a positive number"*/</span>
function validate_principal()
{
    var principal = document.getElementById("principal").value;
    if principal<=0
        alert("Enter a positive number.");    
}

