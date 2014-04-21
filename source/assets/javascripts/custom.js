$(document).ready(function(){
  var url,
      pathRegex,
      result,
      parentName;

    url = window.location.pathname;
    pathRegex = '/([^\/]+[^\/])/';
    result = url.match(pathRegex);

    if (result) {
      parentName = result[1];

      menuItem = $('#nav_' + parentName);
      menuItem.addClass("active");
    }
});
