app.controller('ChatController',['$http','$log','$scope',function($http,$log,$scope){
  $scope.predicate = '-id';
  $scope.reverse = false;
  $scope.baseUrl = 'http://localhost:1337';
  $scope.chatList =[];
  $scope.getAllchat = function(){
    io.socket.get('/chat/index');
    $http.get($scope.baseUrl+'/chat')
       .success(function(success_data){
          $scope.chatList = success_data;
       });
  };

  $scope.getAllchat();
  $scope.chatUser = "";
  $scope.chatMessage = "";

  io.socket.on('chat',function(obj){
    if(obj.verb === 'created'){
      $scope.chatList.unshift(obj.data);
      console.log($scope.chatList);
      $scope.$digest();
    }
  });

  $scope.sendMsg = function(){
    io.socket.post('/chat/index/',{user:$scope.chatUser,message: $scope.chatMessage});
    $scope.chatMessage = "";
  };
}]);
app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});