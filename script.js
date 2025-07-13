console.log("welcome")
const emailfn = ()=>{
    console.log("welcomeee")
    const emailinput = document.getElementById("emailID");
    const validity = emailinput.validity;

    if ( validity.valueMissing){
        emailinput.setCustomValidity("It needs an email");
        emailinput.classList.add("error");
        emailinput.reportValidity();
    }
    else if ( validity.typeMismatch){
        emailinput.setCustomValidity("That is not a valid email");
        emailinput.reportValidity();
        emailinput.classList.add("error");
    }

    else{
        emailinput.classList.remove("error");
        emailinput.setCustomValidity("");
        emailinput.reportValidity();
    }

}

const countryfn = ()=>{
    const countries = document.getElementById("country");
    const validity = countries.validity;
    console.log(validity.value);
    if ( validity.valueMissing){
        countries.classList.add("error");
        countries.setCustomValidity("Please select a country!");
        countries.reportValidity();
    }
    else{
        countries.classList.remove("error");
        countries.setCustomValidity("");
        countries.reportValidity();
    }
}

const postalfn = ()=>{
    const postalinput = document.getElementById("postal");
}

const pwdfn = ()=>{

    const pwdinput = document.getElementById("pwd");
    const validity = pwdinput.validity;
    if ( validity.valueMissing){
        pwdinput.classList.add("error");
        pwdinput.setCustomValidity("Please enter a password");
        pwdinput.reportValidity();
    }

    else if ( pwdinput.value.length <= 5 || pwdinput.value.length >= 18){
        pwdinput.classList.add("error");
        pwdinput.setCustomValidity("Password length must be between 5 and 18 characters!");
        pwdinput.reportValidity();
    }
    else{
        pwdinput.classList.remove("error")
        pwdinput.setCustomValidity("");
        pwdinput.reportValidity();
    }

    console.log(pwdinput.value, "is the pwd");
    const pwdinputval = pwdinput.value;
    return [pwdinputval];
}

const confirmpwdfn = ()=>{

    const [pwdcall] = pwdfn();
    console.log(pwdcall,"is pwdcall")
    const confpwd = document.getElementById("confirmpwd");
    const validity = confpwd.validity;

    if ( validity.valueMissing){
        confpwd.classList.add("error");
        confpwd.setCustomValidity("Please enter a password");
        confpwd.reportValidity();
    }
    else if ( confpwd.value!== pwdcall ){
        confpwd.classList.add("error");
        confpwd.setCustomValidity("The passwords do not match!");
        confpwd.reportValidity();
    }
    else{
        confpwd.classList.remove("error")
        confpwd.setCustomValidity("");
        confpwd.reportValidity();
    }
}

const sub = document.getElementById("submitbtn");
sub.addEventListener("click",(e)=>{
    e.preventDefault();
    const form = document.getElementById("Form1");
    if ( !form.checkValidity()){
        sub.setCustomValidity("Please fill all required fields before submitting!");
        sub.reportValidity();
    }
    else{
        sub.setCustomValidity("");
        sub.reportValidity();
    }
})