'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider 
  .when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  }).otherwise({redirectTo: '/'});
}])
.controller('View2Ctrl',function($scope,$http,$rootScope)
{
  let idNumber=0;
  $scope.id = $rootScope.abc;
  idNumber=$scope.id;
  console.log(idNumber)
  $http.get('https://api.themoviedb.org/3/movie/'+idNumber+'?api_key=82fa3e0ef7a423ae707ff8078a2080ee&language=en-US')
  .then(function(response)
  {
           console.log(response)
           $scope.details=response.data;
  })
});


/*function View2Ctrl($scope,$location)
{

  $scope.movieDetails = function(index)
  {
    $location.path(index); 
   console.log(index);
  }

};*/