(function(exports) {

  function HeadlinesViewer(headlines = new Headlines()) {
    this._headlines = headlines;
  }
  exports.HeadlinesViewer = HeadlinesViewer;
})(this);
