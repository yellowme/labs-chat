module.exports = {
  index:function (req,res) {
    var data_from_client = req.params.all();
    if(req.isSocket && req.method === 'POST'){
      Chat.create(data_from_client).exec(function(error,data_from_client){
        console.log(data_from_client);
        Chat.publishCreate({id: data_from_client.id, message : data_from_client.message , user:data_from_client.user});
      }); 
    } else if(req.isSocket) {
      Chat.watch(req.socket);
    }
  } 
};

