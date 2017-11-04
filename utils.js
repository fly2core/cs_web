
var log = function(i) {
  console.log(i)
}

var menu = function() {
    window.location.href = "./index.html"
}

m = {
  21: 'ftp',
  23: 'telnet',
  25: 'smtp',
  80: 'http',
  443: 'https',
  110: 'pop3',
  1521: 'oracle',
  1863: 'MSN'
}

var get_des = function(i) {
  var a = m[i]
  if(a == null) {
    return ''
  } else {
    return a;
  }
}

var f = function() {
    log('a')
}
