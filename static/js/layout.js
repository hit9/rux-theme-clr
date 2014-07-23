function loadCss(filePath) {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = filePath;
  head.appendChild(link);
}


function initializeFontCss(staticPath) {
  var windowsCssPath = staticPath + '/css/windows.css';
  var iabcCssPath = staticPath + '/css/iabc.css';

  if (navigator.appVersion.indexOf("Win")!=-1) { // Windows
    loadCss(windowsCssPath);
  } else {
    loadCss(iabcCssPath);
  }
}


function initialize(staticPath) {

  initializeFontCss(staticPath);

  // load nprogress
  $(window).load(function(){
    NProgress.done();
  })

  $(document).ready(function(){
    NProgress.start();
    $('.fancybox').fancybox();
  });
}
