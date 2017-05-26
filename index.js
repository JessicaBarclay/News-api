function initialize() {
  var headlines = new Headlines();
  var newsfeedController = new NewsfeedController();
  guardianAPI();
  newsfeedController.renderHeadlines();
}
window.onload = initialize;
