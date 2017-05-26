function loadAPI() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
      headlines.recieveAPIrequest(this);
      document.getElementById("headlines").innerHTML = headlines.getAPI();
      console.log(this.readyState);
      console.log(JSON.parse(this.responseText));
    }
  };
  console.log(this.readyState);
  xhttp.open("GET", "https://content.guardianapis.com/search?api-key=", true);
  xhttp.send();
}
