export const validateName =(name)=>{
    if(name!== ""){
        return true
    }else{
        alert("Enter valid username")
    }
}

export const validateEmail =(email)=>{
    const emailpattern =/\S+@\S+\.\S+/
    if(emailpattern.test(email)){
        return true

    }
    else{
        alert("Enter valid email")
    }
}
 export const validateMnumber= (mnumber)=>{
    const mobilepattern=/^\d{10}$/
    if(mobilepattern.test(mnumber)){
        return true
    }
    else{
        alert("Enter valid number")
    }
 }
 export const validatePassword=(password)=>{
    if(password.length >= 8){
        return true
    }else{
        alert("Password must be at least 8 characters")
    }
 }

 export const validateCpassword =(Cpassword,password) =>{
    if(Cpassword === password){
        return true
    }else{
        alert("Password do not match")
    }
 }