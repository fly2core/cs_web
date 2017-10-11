var log = function(i) {console.log(i)}

var AttackAPI={
    version:'0.1',
      author:'zy',
    homepage:'http://www.baidu.com',
};

    AttackAPI.PortScanner = {};

    AttackAPI.PortScanner.scanPort = function(callback, target, port, timeout) {

        if(isNaN(port)) {
            console.log('not a num')
            return
        }

        var timeout = (timeout==null) ? 100 : timeout;
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

    };

    AttackAPI.PortScanner.scanTarget = function(callback,target,ports,timeout) {
        for(index=0;index<ports.length;index++)
        AttackAPI.PortScanner.scanPort(callback,target,ports[index],timeout);
    };

















// var Attack = {'open': -1}
//
// Attack.scanport = function(ip, port) {
//     var img = new Image()
//     img.src = 'http://' + ip + ':' + port
//     setTimeout(function() {
//       console.log(1)
//         if(!img) {
//             console.log(2)
//             Attack['open'] = false
//         } else {
//             img = undefined
//             Attack['open'] = true
//         }
//     }, 1000)
// }
//
// $(document).ready(function() {
//     $('#port').click(function() {
//         Attack.scanport('www.baidu.com', 90)
//         // while (Attack['open'] == -1) {
//         //     console.log('while: ', Attack['open'])
//         // }
//         log('start :')
//         setTimeout(function() {
//             log('end :')
//             console.log(Attack['open'])
//         }, 1000)
//     })
// })
