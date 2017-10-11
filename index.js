// $('tr:odd').style.background-color = #AAAAAA

var log = function(i) {
  console.log(i)
}

$(document).ready(function() {
  $("#show").click(function() {
    $(".mytable").html('\
      <tr>\
        <th>ip</th>\
        <th>port</th>\
        <th>des</th>\
        <th>open or not</th>\
      </tr>\
      <tr>\
        <td>120.220.2.35</td>\
        <td>443</td>\
        <td>https</td>\
        <td>open</td>\
      </tr>\
    ')
  })
})

var i = 1
var addtr = function(ip, port, des, open) {
  log('i='+i)
  //  * class=alt
  var text = '<tr>\
  <td>'+ip+'</td>\
  <td>'+port+'</td>\
  <td>'+des+'</td>\
  <td>'+open+'</td>'
  // var tr = $('<tr></tr>').text(text)
  $('#id_tbody').append(text)

  if (i%2 == 0) {
    log('begin color')
    var tr = $('tbody').children()
    log(tr)
    tr.eq(i).css('background-color', '#CCCCCC')
  }
  i++;
  // log('add')
}

$(document).ready(function() {
  // $('#id_table').hide()
  $('#addtr').click(function() {
    // log('clicked')
    addtr(122, 80, 'http', 'open')
    // return value
    // log($('th').css('background-color'))
    // set value
    // $('th').css('background-color', 'red')
    // set many values by json
    // $('th').css({'background-color': 'red', 'color', 'gray'})
    // $('#id_table').empty()
    // $('tr').remove('.alt')
  })
})

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

var scanall = function() {
  $('#id_tbody').html('')
  // log(1)
  var target = $('#id_target').val()
  var timeout = $('#id_timeout').val()
  // log('ip:'+target)
  // log('port:'+port)
  // log('timeout:'+timeout)
  for (var i=0; i<65536; i++) {
      AttackAPI.PortScanner.scanPort(callback, target, i, timeout);
  }
  // set color
  var tr = $('tbody').children()
  for (let i = 2; i < tr.length; i+=2) {
    // log('tr' + tr[i])
    tr.eq(i).css('background-color', '#CCCCCC')
  }
}
