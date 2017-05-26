(function(exports) {
  function Headlines() {
    this._api = '';
  }
  Headlines.prototype.receiveAPIrequest = function(data) {
    return this._api = data;
  };
  Headlines.prototype.getAPI = function() {
    return this._api;
  };

  exports.Headlines = Headlines;
})(this);
