(function() {
  var curImgId = 0;
  var numberOfImages = 5;  Change this to the number of background images
  window.setInterval(function() {
    $('body').css('background-image','url(background' + curImgId + '.png)');
    curImgId = (curImgId + 1) % numberOfImages;
  }, 5  1000);
})();