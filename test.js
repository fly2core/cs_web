var target = 'www.baidu.com'
var port = 80

var timeout = 1000
var img = new Image();

img.onerror = function() {
    if(!img) return;
    img = undefined;
    callback(target, port, 'open');
};

img.onload = img.onerror;

img.src = 'http://'+target+':'+port;

setTimeout(function(){
    if(!img) return;
    img = undefined;
    callback(target, port, 'closed');
}, timeout);
