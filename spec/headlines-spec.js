(function() {
  console.log("UNIT TEST: Headlines is a constructor and receives data");

  var headlines, data;
  headlines = new Headlines();
  data = "I am data. Eat me";

  assert.isConstructedFrom(headlines, Headlines);
  assert.isEqual(headlines.receiveAPIrequest(data), data);
})();

(function() {
  console.log("UNIT TEST: Headlines can return stored API data");
  var headlines, data;
  headlines = new Headlines();
  data = "It is sunny. I want icecream";
  headlines.receiveAPIrequest(data);
  assert.isEqual(headlines.getAPI(), data);
})();
