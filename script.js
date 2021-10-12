let emailAddres = document.querySelector("#email")
let SubmitEmail = document.querySelector("#submitEmail")
let valid = document.querySelector(".valid")

function emailValidator(){
    let email = emailAddres.value
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


    if(email.match(mailformat)){
        valid.innerText = "Email Valid"
        valid.style.color = "green"
        return true
    }else{
        valid.innerText = "Please enter a valid email address"
        valid.style.color = "red"
        return false
    }
}