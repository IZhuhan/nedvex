var slider = $('#dg-container');
var sld = function() {
  if ($(window).width() > 838) {
    slider.gallery({
        autoplay: true,
        interval: 5000
    });
  } else {
    slider.gallery.destroy;
  }
};
sld();
$(window).resize(sld);