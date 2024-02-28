function validate(){
    var empName = document.getElementById("employeeName").value
    var empPass = document.getElementById("employeePassword").value
    var empEmail = document.getElementById("employeeEmail").value
    var empPhone = document.getElementById("employeePhone").value

    if(! /^[A-Za-z ]+$/.test(empName)){
        alert("Only insert letters and whitespace in name")
    }
    if(empPass.length < 6){
        alert("Password should be 6 or more characters")
    }
    if(! /^\S+@\S+\.\S+$/.test(empEmail)){
        alert("Email not valid")
    }
    if(! /^\d{10}$/.test(empPhone)){
        alert("Phone number not valid enter 10 digits only")
    }
    else{
        alert("Form Valid")
    }

}