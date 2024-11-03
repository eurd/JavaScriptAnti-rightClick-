document.oncontextmenu = function(){return false}
if (parent.frames.length > 0) top.location.replace(document.location);
document.ondragstart = function(){return false}
