var systemLogIn = document.getElementById('systemLogIn');
var systemSignUp = document.getElementById('systemSignUp');
var signUp = document.getElementById('signUp');
var signIn = document.getElementById('signIn');
var nameInput= document.getElementById('nameInput');
var emailInput=document.getElementById('emailInput');
var passwordInput=document.getElementById('passwordInput');
var btnSignUp=document.getElementById('btnSignUp');
var msgName=document.getElementById('msgName');
var msgEmail=document.getElementById('msgEmail');
var msgPassword=document.getElementById('msgPassword');
var msgSuccess=document.querySelector('.msgSuccess')
var msgExists=document.querySelector('.msgExists')
var emailInputLogIn=document.getElementById('emailInputLogIn');
var passwordInputLogIn=document.getElementById('passwordInputLogIn');
var btnLogIn=document.getElementById('btnLogIn');
var inCorrectEmail=document.getElementById('inCorrectEmail');
var ancorTag=document.createElement('a');
var navBarText=document.getElementById('navBarText');


//a tag 

if (signUp) {
    signUp.addEventListener('click', function(){

        systemLogIn.classList.add('d-none');
        systemSignUp.classList.replace('d-none', 'd-block')
    
    })
}

if (signIn) {
    
signIn.addEventListener('click', function(){

    systemSignUp.classList.replace('d-block', 'd-none')
    systemLogIn.classList.remove('d-none');

})
}


// input sign up


function validName() {
    var regex=/^[a-z]{2,10}$/i;
    var text = nameInput.value;

    if (regex.test(text)===true) {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
        msgName.classList.replace('d-block','d-none');
    }
    else{
        nameInput.classList.remove('is-valid');
        nameInput.classList.add('is-invalid');
        msgName.classList.replace('d-none','d-block');
    }
}


if (nameInput) {
    
nameInput.addEventListener('input', function () {
    validName();
});

}





function validEmail() {
    var regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
    var text = emailInput.value;

    if (regex.test(text)===true) {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
        msgEmail.classList.replace('d-block','d-none');
    }
    else{
        emailInput.classList.remove('is-valid');
        emailInput.classList.add('is-invalid');
        msgEmail.classList.replace('d-none','d-block');
    }
}



if (emailInput) {
    emailInput.addEventListener('input', function () {
        validEmail();
    })
}



function validPassword() {
    var regex=/\S+/;
    var text = passwordInput.value;

    if (regex.test(text)===true) {
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.add('is-valid');
        msgPassword.classList.replace('d-block','d-none');
    }
    else{
        passwordInput.classList.remove('is-valid');
        passwordInput.classList.add('is-invalid');
        msgPassword.classList.replace('d-none','d-block');
    }
};



if (passwordInput) {
    passwordInput.addEventListener('input', function () {
    
        validPassword();
    });
    
}


if (btnSignUp) {
    btnSignUp.addEventListener('click',function () {
        if (nameInput.classList.contains('is-valid') && emailInput.classList.contains('is-valid') && passwordInput.classList.contains('is-valid')) {
            msgSuccess.classList.replace('d-none','d-block');
        }
        
        else{
            msgSuccess.classList.replace('d-block','d-none');
        }
        
        exists()
        addperson();
        
        clearData();
        
    
        
        
    });
    
}




var emails=[];



if (localStorage.getItem('person') !==null) {
    emails=JSON.parse(localStorage.getItem('person'));
}

function addperson() {
    
    var person={
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value

    };

     emails.push(person);

    localStorage.setItem('person', JSON.stringify(emails));

    

};


function exists() {
    for (var i = 0; i < emails.length; i++) {
        if (emailInput.value===emails[i].email) {
            msgExists.classList.replace('d-none','d-block');
            msgSuccess.classList.replace('d-block','d-none');
        }else{
            msgSuccess.classList.replace('d-none','d-block');
            msgExists.classList.replace('d-block','d-none');
        }
        
    }
}


function clearData() {
    
    nameInput.value=null;
    emailInput.value=null;
    passwordInput.value=null;
    

}



function logIn() {
        
    for (var i = 0; i < emails.length; i++) {
        if (emailInputLogIn.value!==emails[i].email || passwordInputLogIn.value!==emails[i].password) {
            
            inCorrectEmail.classList.replace('d-none','d-block');

        }else if (emailInputLogIn.value===null || passwordInputLogIn.value===null) {
            
            inCorrectEmail.classList.replace('d-none','d-block');
            window.location.href = "index.js";
        }
        else{
            
            inCorrectEmail.classList.replace('d-block','d-none');
            
            localStorage.setItem('name',JSON.stringify(emails[i].name));
            window.location.href = "welcome.html";
            
            
        

        }

        
    }



}

if (btnLogIn) {
    btnLogIn.addEventListener('click', function () {
    
        logIn();
        
    })
}


