var server = require('net');

server.createServer(function(socket){
    socket.on('data', function(data){
        console.log(data);
        socket.write(data);
    });

    socket.on('close', function(data){
        console.log(data);
        socket.write(data);
    });
}).listen(8017,'127.0.0.1');


