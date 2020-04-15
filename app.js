function about() {
	alertify.confirm('Support', 'This web applicatoin is free forever, but it still cost effort to maintain it on AppStore. Want to buy me a cup of coffee?', function(closeEvent) {
		window.location.href = "https://www.paypal.me/akonyein/";
	}, function() {
	});
}

function verifyAllInputs() {
	var bodyWeight = document.forms["form"]["bodyweight"];
	var sq_reps = document.forms["form"]["sq_reps"];
	var sq_weight = document.forms["form"]["sq_weight"];
	var sq_rpe = document.forms["form"]["sq_rpe"];
	var bn_reps = document.forms["form"]["bn_reps"];
	var bn_weight = document.forms["form"]["bn_weight"];
	var bn_rpe = document.forms["form"]["bn_rpe"];
	var dl_reps = document.forms["form"]["dl_reps"];
	var dl_weight = document.forms["form"]["dl_weight"];
	var dl_rpe = document.forms["form"]["dl_rpe"];
    if (bodyWeight.value == "" || 
        sq_reps.value == "" ||
        sq_weight.value == "" ||
        sq_rpe.value == "" ||
        bn_reps.value == "" ||
        bn_weight.value == "" ||
        bn_rpe.value == "" ||
        dl_reps.value == "" ||
        dl_weight.value == "" ||
        dl_rpe.value == "")
        {
            alert_input()		
            return false;
        }
	return true;
}

function Calculate()
{
    var testBW = document.getElementById("bodyweight").value;
    localStorage.setItem("bodyweight", testBW);
}

function alert_input(){
    alertify.confirm('Alert', 'Please enter all input fields!', 
    function() {
	}, function() {
	});
}

