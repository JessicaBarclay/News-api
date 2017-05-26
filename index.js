function initialize() {
  this.headlines = new Headlines();
  this.newsfeedController = new newsfeedController();
  loadAPI();
  newsfeedController.renderHeadlines();
}
window.onload = initialize;
