// 返回主菜单

var i = 1
var addtr = function(ip, port, des, open) {
  // log('i='+i)
  //  * class=alt
  var text = '<tr>\
  <td>'+ip+'</td>\
  <td>'+port+'</td>\
  <td>'+get_des(port)+'</td>\
  <td>'+open+'</td>'
  // var tr = $('<tr></tr>').text(text)
  $('#id_tbody').append(text)

  if (i%2 == 0) {
    // log('begin color')
    var tr = $('tbody').children()
    // log(tr)
    tr.eq(i).css('background-color', '#CCCCCC')
  }
  i++;

  var tr = $('tbody').children()
  for (let i = 2; i < tr.length; i+=2) {
    // log('tr' + tr[i])
    tr.eq(i).css('background-color', '#CCCCCC')
  }
  // log('add')
}


var callback = function(target,port,status){
    // show table
    $('#id_table').css({'display': 'block'})
    // console.log('log callback')
    // log(target+':'+port+''+status+"\n");
    // 回显
    addtr(target, port, '', status)
}

var scan = function () {
    //清空表
    $('#id_tbody').html('')
    // log(1)
    var begin_ip = $('#begin_ip').val()
    var end_ip = $('#end_ip').val()

    var port = $('#id_port').val()
    var timeout = $('#id_timeout').val()
    // log('ip:'+target)
    // log('port:'+port)
    // log('timeout:'+timeout)
    var begin_int = ip2int(begin_ip)
    var end_int = ip2int(end_ip)

    for (var count=begin_int; count<=end_int; count++){
      var ip = int2ip(count)
      AttackAPI.PortScanner.scanTarget(callback, ip, port.split(','), timeout);
    }

    // AttackAPI.PortScanner.scanTarget(callback, target, port.split(','), timeout);
    // 设置背景
    // var tr = $('tbody').children()
    // for (let i = 2; i < tr.length; i+=2) {
    //   // log('tr' + tr[i])
    //   // log("hello")
    //   tr.eq(i).css('background-color', '#CCCCCC')
    // }
}

var ip2int = function(ip) {
  a = ip.split('.')
  log(a)
  var ret = parseInt(a[0])*256*256*256+parseInt(a[1])*256*256+parseInt(a[2])*256+parseInt(a[3])
  return ret;
}

var int2ip = function(i) {
  var a = new Array(4)
  r = i % (256*256*256)
  // log('r= '+r)
  a[0] = (i-r) / (256*256*256)
  // log('a0= '+a[0])
  r2 = r % (256*256)
  a[1] = (r - r2) / (256*256)
  r3 = r2 % 256
  a[2] = (r2 -r3)/256
  a[3] = r3
  ret = a[0]+'.'+a[1]+'.'+a[2]+'.'+a[3]
  return ret;
}
