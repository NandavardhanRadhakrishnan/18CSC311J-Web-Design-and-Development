function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var table = document.getElementById("tableData");
            var jsonData = JSON.parse(this.responseText);
            jsonData.forEach(element => {
                table.innerHTML += ("<tr><td>"+element.modelNumber+"</td><td>"+element.name+"</td><td>"+element.price+"</td><td><img src="+element.img+"></td></tr>");
            });
        }
    };
    xhttp.open("GET","data.json",true);
    xhttp.send();
}