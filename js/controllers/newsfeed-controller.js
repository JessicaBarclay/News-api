(function(exports){

  function newsfeedController(){
  }

  newsfeedController.prototype.renderHeadlines = function () {
    document.getElementById("headlines").innerHTML = headlines.getAPI();
  };

  exports.newsfeedController = newsfeedController;

})(this);
