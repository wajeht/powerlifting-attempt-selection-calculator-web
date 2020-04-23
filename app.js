function oneRepMax(rep, weight, rpe) {
    return weight * (10 - (rpe + 1) + rep) * 0.03 + weight;
}

function firstAttempt(oneRepMax) {
    return parseInt(oneRepMax * 0.91);
}

function secondAttempt(oneRepMax) {
    return parseInt(oneRepMax * 0.96);
}

function thirdAttempt(oneRepMax) {
    return parseInt(oneRepMax);
}

function savaData() {
    // bodyweight
    var bodyWeight = document.getElementById("bodyweight");
    localStorage.setItem("bodyweight", bodyWeight.value);

    // gender
    var gender = document.querySelector('input[name = "gender"]:checked');
    localStorage.setItem("gender", gender.value);

    // squat one rep max
    var sq_reps = document.getElementById("sq_reps");
    localStorage.setItem("sq_reps", sq_reps.value);
    var sq_weight = document.getElementById("sq_weight");
    localStorage.setItem("sq_weight", sq_weight.value);
    var sq_rpe = document.getElementById("sq_rpe");
    localStorage.setItem("sq_rpe", sq_rpe.value);

    // bench one rep max
    var bn_reps = document.getElementById("bn_reps");
    localStorage.setItem("bn_reps", bn_reps.value);
    var bn_weight = document.getElementById("bn_weight");
    localStorage.setItem("bn_weight", bn_weight.value);
    var bn_rpe = document.getElementById("bn_rpe");
    localStorage.setItem("bn_rpe", bn_rpe.value);

    // deadlift one rep max
    var dl_reps = document.getElementById("dl_reps");
    localStorage.setItem("dl_reps", dl_reps.value);
    var dl_weight = document.getElementById("dl_weight");
    localStorage.setItem("dl_weight", dl_weight.value);
    var dl_rpe = document.getElementById("dl_rpe");
    localStorage.setItem("dl_rpe", dl_rpe.value);
}

function loadData() {
    // bodyweight
    document.getElementById("bodyweight").innerHTML = localStorage.getItem(
        "bodyweight"
    );

    // gender
    document.getElementById("gender").innerHTML = localStorage.getItem(
        "gender"
    );

    // squat one rep max
    var sq_1RM = oneRepMax(
        parseInt(localStorage.getItem("sq_reps")),
        parseInt(localStorage.getItem("sq_weight")),
        parseInt(localStorage.getItem("sq_rpe"))
    );
    document.getElementById("sq_1RM").innerHTML = "SQUAT e1RM: " + sq_1RM;

    // declaring attempt
    var sq1_attempt = firstAttempt(sq_1RM);
    var sq2_attempt = secondAttempt(sq_1RM);
    var sq3_attempt = thirdAttempt(sq_1RM);

    // squat low
    document.getElementById("sq1_low").innerHTML = parseInt(
        sq1_attempt - sq1_attempt * 0.01
    );
    document.getElementById("sq1_Normal").innerHTML = sq1_attempt;
    document.getElementById("sq1_High").innerHTML = parseInt(
        sq1_attempt + sq1_attempt * 0.02
    );

    // squat normal
    document.getElementById("sq2_low").innerHTML = parseInt(
        sq2_attempt - sq2_attempt * 0.01
    );
    document.getElementById("sq2_Normal").innerHTML = sq2_attempt;
    document.getElementById("sq2_High").innerHTML = parseInt(
        sq2_attempt + sq2_attempt * 0.02
    );

    //squat high
    document.getElementById("sq3_low").innerHTML = parseInt(
        sq3_attempt - sq3_attempt * 0.01
    );
    document.getElementById("sq3_Normal").innerHTML = sq3_attempt;
    document.getElementById("sq3_High").innerHTML = parseInt(
        sq3_attempt + sq3_attempt * 0.02
    );

    // bench one rep max
    var bn_1RM = oneRepMax(
        parseInt(localStorage.getItem("bn_reps")),
        parseInt(localStorage.getItem("bn_weight")),
        parseInt(localStorage.getItem("bn_rpe"))
    );
    document.getElementById("bn_1RM").innerHTML = "SQUAT e1RM: " + bn_1RM;

    // declaring bench attempt
    var bn1_attempt = firstAttempt(bn_1RM);
    var bn2_attempt = secondAttempt(bn_1RM);
    var bn3_attempt = thirdAttempt(bn_1RM);

    // bench low
    document.getElementById("bn1_low").innerHTML = parseInt(
        bn1_attempt - bn1_attempt * 0.01
    );
    document.getElementById("bn1_Normal").innerHTML = bn1_attempt;
    document.getElementById("bn1_High").innerHTML = parseInt(
        bn1_attempt + bn1_attempt * 0.02
    );

    // bench normal
    document.getElementById("bn2_low").innerHTML = parseInt(
        bn2_attempt - bn2_attempt * 0.01
    );
    document.getElementById("bn2_Normal").innerHTML = bn2_attempt;
    document.getElementById("bn2_High").innerHTML = parseInt(
        bn2_attempt + bn2_attempt * 0.02
    );

    // bench high
    document.getElementById("bn3_low").innerHTML = parseInt(
        bn3_attempt - bn3_attempt * 0.01
    );
    document.getElementById("bn3_Normal").innerHTML = bn3_attempt;
    document.getElementById("bn3_High").innerHTML = parseInt(
        bn3_attempt + bn3_attempt * 0.02
    );

    // deadlift one rep max
    var dl_1RM = oneRepMax(
        parseInt(localStorage.getItem("dl_reps")),
        parseInt(localStorage.getItem("dl_weight")),
        parseInt(localStorage.getItem("dl_rpe"))
    );
    document.getElementById("dl_1RM").innerHTML = "SQUAT e1RM: " + dl_1RM;

    // declaring deadlift attempt
    var dl1_attempt = firstAttempt(dl_1RM);
    var dl2_attempt = secondAttempt(dl_1RM);
    var dl3_attempt = thirdAttempt(dl_1RM);

    // deadlift low
    document.getElementById("dl1_low").innerHTML = parseInt(
        dl1_attempt - dl1_attempt * 0.01
    );
    document.getElementById("dl1_Normal").innerHTML = dl1_attempt;
    document.getElementById("dl1_High").innerHTML = parseInt(
        dl1_attempt + dl1_attempt * 0.02
    );

    // deadlift normal
    document.getElementById("dl2_low").innerHTML = parseInt(
        dl2_attempt - dl2_attempt * 0.01
    );
    document.getElementById("dl2_Normal").innerHTML = dl2_attempt;
    document.getElementById("dl2_High").innerHTML = parseInt(
        dl2_attempt + dl2_attempt * 0.02
    );

    //deadlift high
    document.getElementById("dl3_low").innerHTML = parseInt(
        dl3_attempt - dl3_attempt * 0.01
    );
    document.getElementById("dl3_Normal").innerHTML = dl3_attempt;
    document.getElementById("dl3_High").innerHTML = parseInt(
        dl3_attempt + dl3_attempt * 0.02
    );
}

function about() {
    alertify.confirm(
        "Support",
        "This web applicatoin is free forever, but it still cost effort to maintain it on AppStore. Want to buy me a cup of coffee?",
        function (closeEvent) {
            window.location.href = "https://www.paypal.me/akonyein/";
        },
        function () {}
    );
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
    if (
        bodyWeight.value == "" ||
        sq_reps.value == "" ||
        sq_weight.value == "" ||
        sq_rpe.value == "" ||
        bn_reps.value == "" ||
        bn_weight.value == "" ||
        bn_rpe.value == "" ||
        dl_reps.value == "" ||
        dl_weight.value == "" ||
        dl_rpe.value == ""
    ) {
        alert_input();
        return false;
    }
    return true;
}

function alert_input() {
    alertify.confirm(
        "Alert",
        "Please enter all input fields!",
        function () {},
        function () {}
    );
}
