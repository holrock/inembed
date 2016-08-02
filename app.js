var button = document.getElementById("button");
var edit =  document.getElementById("edit");

chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
  var base = tabs[0].url;
  var r = new RegExp('^https://www.instagram.com/p/[^/]+/');
  base = base.match(r);
  var url = '<iframe src="*/embed" frameborder="0" width="70%" height="600px"></iframe>';
  edit.value = url.replace('*', base);
});

button.addEventListener("click", function() {
  edit.select();
  document.execCommand('copy');
}, false);
