var log = function(i) {console.log(i)}

var AttackAPI={
    version:'0.1',
      author:'zy',
};

    AttackAPI.PortScanner = {};
    AttackAPI.PortScanner.scanPort = function(callback, target, port, timeout) {

        if(isNaN(port)) {
            console.log('not a num')
            return
        }

        var timeout = (timeout==null) ? 100 : timeout;
        var tcp_package = new Image();

        tcp_package.onerror = function() {
            if(!tcp_package) return;
            tcp_package = undefined;
            callback(target, port, 'open');
        };

        tcp_package.onload = tcp_package.onerror;

        tcp_package.src = 'http://'+target+':'+port;
        setTimeout(function(){
            if(!tcp_package) return;
            tcp_package = undefined;
            callback(target, port, 'closed');
        }, 1000);

    };

    AttackAPI.PortScanner.scanTarget = function(callback,target,ports,timeout) {
        for(index=0;index<ports.length;index++){
            AttackAPI.PortScanner.scanPort(callback,target,ports[index],timeout);
        }
    };
