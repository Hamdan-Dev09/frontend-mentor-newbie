const form = document.getElementById("form");
const fName = document.getElementById("Fname");
const lName = document.getElementById("Lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkForm();
    successMessage();
    
})

let checkForm = ()=>{
    const fNameValue = fName.value;
    const lNameValue = lName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
  

    if(fNameValue == ""){
        displayError(fName,'First name cannot be blank');
    }
    
    if(lNameValue == ""){
        displayError(lName,'Last name  cannot be blank');
    }

    if(passwordValue == ""){
        displayError(password, "Password cannot be empty");
    }else if(passwordValue.length < 8){
        displayError(password, "Password must not be less than 8 characters")
        password.value = "";
    }

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailValue == ""){
        displayError(email,'Email cannot be empty');
    }
    else if(!emailValue.match(mailformat)){
        displayError(email,'You have entered an incorrect email address');
        email.value = "";
    }

}

let displayError = (input, message)=>{    
    input.parentElement.classList.add("error");
    input.nextElementSibling.innerText = message;
}

let successMessage = () =>{
    const inputDivs = document.querySelectorAll('.input-div');
    const formArea = document.querySelector('.form-area');

    let flag = false;
    
    for (let i = 0; i < inputDivs.length; i++) {
        if(inputDivs[i].classList.contains('error')){
            flag = true;
            break;
        };    
    }
    if(!flag){
        formArea.innerHTML = "<h4>You have successfully claimed your free title</h4>";
    }
}
