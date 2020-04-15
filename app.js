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
	if (bodyWeight.value == "") {
        alert_input()		
		return false;
	}
	if (sq_reps.value == "") {
        alert_input()		

		return false;
	}
	if (sq_weight.value == "") {
        alert_input()		

		return false;
	}
	if (sq_rpe.value == "") {
        alert_input()		

		return false;
	}
	if (bn_reps.value == "") {
        alert_input()		
		return false;
	}
	if (bn_weight.value == "") {
        alert_input()		

		return false;
	}
	if (bn_rpe.value == "") {
        alert_input()		
		return false;
	}
	if (dl_reps.value == "") {
        alert_input()		
		dl_reps.focus();
		return false;
	}
	if (dl_weight.value == "") {
        alert_input()		
		dl_weight.focus();
		return false;
	}
	if (dl_rpe.value == "") {
        alert_input()		
        dl_rpe.focus();
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
    alertify.confirm('Support', 'Please enter all input fields', 
    function() {
	}, function() {
	});
}