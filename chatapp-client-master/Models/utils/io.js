module.exports =function(io){


    io.on("connection",async(socket)=>{console.log("clietn is connected",socket.id);

    });
};