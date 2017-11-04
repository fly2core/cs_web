// 返回主菜单

var i = 1
var addtr = function(ip, port, des, open) {
  // log('i='+i)
  //  * class=alt
  var text = '<tr>\
  <td>'+'本机'+'</td>\
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

$(document).ready(function() {
  $('#setcolor').click(function() {
    var tr = $('tbody').children()
    for (let i = 2; i < tr.length; i+=2) {
      // log('tr' + tr[i])
      tr.eq(i).css('background-color', '#CCCCCC')
    }
  })
})

var callback = function(target,port,status){
    // show table
    $('#id_table').css({'display': 'block'})
    // console.log('log callback')
    // log(target+':'+port+''+status+"\n");
    // 回显
    addtr(target, port, '', status)
}

var scan = function (){
    //清空表
    $('#id_tbody').html('')
    // log(1)
    var target = $('#id_target').val()
    var port = $('#id_port').val()
    var timeout = $('#id_timeout').val()
    // log('ip:'+target)
    // log('port:'+port)
    // log('timeout:'+timeout)
    AttackAPI.PortScanner.scanTarget(callback, target, port.split(','), timeout);
    // 设置背景
}
