function fullscreen(url) {
    var newTab = window.open("about:blank");
    newTab.document.open();
    newTab.document.write('<title>Google</title><link rel="icon" href="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png" type="image/x-icon"><iframe src="' + url + '" width="100%" height="100%" frameborder="0"></iframe>');
    newTab.document.close();
}