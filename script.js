//function compute to work out the calculation
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;
	

    function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    value.textContent = rate.value;

}

//insert text for result after computing
 document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
 
 //principal should be greater than zero//
    if (principal == 0 || principal <0) {
        alert ("Enter a positive number");
        return;
    }

//update slider value
function updateSlider()
{
    document.getElementById("rate_val").innerHTML = "${rate}%";
}
}

