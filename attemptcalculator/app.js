function about() {
    if(confirm("This website is free forever. But it still cost a good amount of effort to maintain it. Do you want to buy me a coup of coffee?")) {
        window.location.href = "https://www.paypal.me/akonyein/"
    }
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

      if (bodyWeight.value == "")
      {
          window.alert("Please enter all input fields!"); 
          bodyWeight.focus(); 
          return false; 
      }

      if (sq_reps.value == "")
      {
          window.alert("Please enter all input fields!"); 
          sq_reps.focus(); 
          return false; 
      }

      if (sq_weight.value == "")
      {
          window.alert("Please enter all input fields!"); 
          sq_weight.focus(); 
          return false; 
      }

      if (sq_rpe.value == "")
      {
          window.alert("Please enter all input fields!"); 
          sq_rpe.focus(); 
          return false; 
      }

      if (bn_reps.value == "")
      {
          window.alert("Please enter all input fields!"); 
          bn_reps.focus(); 
          return false; 
      }

      if (bn_weight.value == "")
      {
          window.alert("Please enter all input fields!"); 
          bn_weight.focus(); 
          return false; 
      }

      if (bn_rpe.value == "")
      {
          window.alert("Please enter all input fields!"); 
          bn_rpe.focus(); 
          return false; 
      }

      if (dl_reps.value == "")
      {
          window.alert("Please enter all input fields!"); 
          dl_reps.focus(); 
          return false; 
      }

      if (dl_weight.value == "")
      {
          window.alert("Please enter all input fields!"); 
          dl_weight.focus(); 
          return false; 
      }

      if (dl_rpe.value == "")
      {
          window.alert("Please enter all input fields!"); 
          dl_rpe.focus(); 
          return false; 
      }

      return true; 
  }

