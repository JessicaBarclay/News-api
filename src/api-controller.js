function loadAPI() {
  var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"


  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {
      headlines.receiveAPIrequest(this);
      document.getElementById("headlines").innerHTML = headlines.getAPI();

      console.log(JSON.parse(this.responseText));
    }
  };

  req.open("GET", url, true);
  req.send();
}
