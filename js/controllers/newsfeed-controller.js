(function(exports){

  function NewsfeedController(view = new HeadlinesViewer()){
    this._view = view;
  }

  NewsfeedController.prototype.renderHeadlines = function () {
    document.getElementById("headlines").innerHTML = this._view._headlines.getAPI();
  };

  exports.NewsfeedController = NewsfeedController;

})(this);
