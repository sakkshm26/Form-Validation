
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;

name.addEventListener('blur',()=> {
    //console.log("Name is blurred");
    //Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    //console.log(regex,str);
    if(regex.test(str)){
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        name.classList.add('is-invalid');
        validUser = false;
    }
})

email.addEventListener('blur',()=> {
    //console.log("email is blurred");
    //Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    //console.log(regex,str);
    if(regex.test(str)){
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur',()=> {
    //console.log("phone is blurred");
    //Validate phone here
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    //console.log(regex,str);
    if(regex.test(str)){
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let success = document.getElementById('success');
    let failure = document.getElementById('failure');
    if(validEmail && validPhone && validUser){
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
})
