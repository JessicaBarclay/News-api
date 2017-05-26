(function() {
  console.log("UNIT TEST: Checks HeadlinesViewer can be instantiated")
  var viewer;
  viewer = new HeadlinesViewer();
  assert.isConstructedFrom(viewer, HeadlinesViewer);
})();
(function() {
  console.log("UNIT TEST: can transform object data to string")
  var viewer;
  viewer = new HeadlinesViewer();
  // assert.isEqual(viewer.wrapHTML(), )
})();


// (function() {
//   console.log("UNIT TEST: can wrap a single headline data in HTML")
//   var viewer;
//   viewer = new HeadlinesViewer();
//   assert.isEqual(viewer.wrapHTML(), )
// })();
