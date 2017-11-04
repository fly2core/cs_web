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
    var target = $('#id_target').val()
    var begin_port = $('#port3').val()
    var end_port = $('#port4').val()
    var timeout = $('#id_timeout').val()
    // log('ip:'+target)
    // log('port:'+port)
    // log('timeout:'+timeout)
    for(var i = begin_port; i<=end_port; i++){
      // log(i)
      AttackAPI.PortScanner.scanPort(callback, target, i, timeout);
      // AttackAPI.PortScanner.scanTarget(callback, target, i, timeout);
    }
    // 设置背景
    var tr = $('tbody').children()
    for (let i = 2; i < tr.length; i+=2) {
      // log('tr' + tr[i])
      // log("hello")
      tr.eq(i).css('background-color', '#CCCCCC')
    }
}
