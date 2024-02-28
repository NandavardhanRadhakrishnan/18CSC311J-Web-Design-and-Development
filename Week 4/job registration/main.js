function validate(){
    var empName = document.getElementById("employeeName").value
    var empPass = document.getElementById("employeePassword").value
    var empEmail = document.getElementById("employeeEmail").value
    var empPhone = document.getElementById("employeePhone").value
    var valid = true
    if(! /^[A-Za-z ]+$/.test(empName)){
        alert("Only insert letters and whitespace in name")
        valid=false
    }
    if(empPass.length < 6){
        alert("Password should be 6 or more characters")
        valid=false
    }
    if(! /^\S+@\S+\.\S+$/.test(empEmail)){
        alert("Email not valid")
        valid=false
    }
    if(! /^\d{10}$/.test(empPhone)){
        alert("Phone number not valid enter 10 digits only")
        valid=false
    }
    if(valid){
        alert("Form valid")
    }

}
