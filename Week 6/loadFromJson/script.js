function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("tableData").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET","data.json",true);
    xhttp.send();
}