"use strict";
(function() {

  console.log(window.location.host);

  var searchbar = document.getElementsByName('q')[0];
  searchbar.tabIndex = 2;
  var results = document.getElementsByClassName('r');
  var anchors = [];
  var arrows = [];
  var size = null;
  var color = null;
  var activated = false;
  for (var i = 0; i < results.length; i++) {
    anchors.push(results[i].children[0]);
    if (i === 0) {
      var style = window.getComputedStyle(results[i], null).getPropertyValue('height');
      size = parseFloat(style.slice(0, -2))/2;
      color = window.getComputedStyle(anchor, null).getPropertyValue('color');
    } 
    var div = document.createElement("div");
    div.style.width = 0;
    div.style.height = 0;
    div.style.borderTop = (size * 0.866) + "px solid transparent";
    div.style.borderBottom = (size * 0.866) + "px solid transparent";
    div.style.borderLeft = size + "px solid " + color;
    div.style.marginLeft = (-2 * size) + "px";
    div.style.float = "left";
    div.style.display = "none";
    results[i].style.overflow = "visible";
    results[i].insertBefore(div, results[i].children[0]);
    arrows.push(div);
  }
  function createHandlers(i) {
    return [function() { if (activated) arrows[i].style.display = "block"; },
            function() { arrows[i].style.display = "none"; }];
  }
  for (i = 0; i < anchors.length; i++) {
    anchors[i].tabIndex = 1;
    var funcs = createHandlers(i);
    anchors[i].onfocus = funcs[0];
    anchors[i].onblur = funcs[1];
  }
  document.onkeydown = function(e) {
    e = e || window.event;
    var key = e.which || e.charCode || e.keyCode;
    if (key === 9) {
      activated = true;
    }
  };
  document.onkeyup = function(e) {
    e = e || window.event;
    var key = e.which || e.charCode || e.keyCode;
    if (key === 9) {
      activated = false;
    }
  };
})();
