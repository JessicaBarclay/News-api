(function(exports) {

  function guardianAPI() {
    var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body";
    var req = new XMLHttpRequest();
    var articles = [];

    req.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        articles.push(JSON.parse(this.response));
      }
    };
    req.open("GET", url, true);
    req.send();

    return articles;

  }
  exports.guardianAPI = guardianAPI;
})(this);
