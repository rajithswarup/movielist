'use strict';

angular.module('myApp.view1', ['ngRoute','angularUtils.directives.dirPagination','ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  }).otherwise({redirectTo: '/'});
}])

.controller('View1Ctrl',function($scope,$http,$location,$rootScope, $localStorage, $sessionStorage,$window)
 {
  $scope.currentPage = 1;
  $scope.maxSize = 5;
  $scope.movie=[];
  $scope.paging=[];
  $http.get('https://api.themoviedb.org/3/movie/popular?api_key=82fa3e0ef7a423ae707ff8078a2080ee&language=en-US&page=1')
  .then(function(response)
  {
 // .success(function(response)
   console.log(response);    
   // $scope.response = response.data;
        $scope.results = response.data;
      //  $scope.receivedImage = 'data:image/png;base64,'+_arrayBufferToBase64(response);
         $scope.id;
    angular.forEach(response.data.results, function(index, element) 
    {
        $scope.movie.push(index);
        console.log($scope.movie)
        $scope.movieDetails = function(movieId)
    {
      $location.path('/view2'); 
      $scope.id=movieId;
      console.log(movieId);
      $scope.$watch('movieId', function() 
      {
        console.log($scope.id);
        
    });
     // path not hash 
     }
    
     $scope.$on('$destroy', function() {
      $rootScope.abc = $scope.id;
      console.log($scope.id);  
 });
    });

 
  /*  $scope.noOfPages = $scope.movie.length / $scope.itemsPerPage;

    console.log($scope.movie.length)
  
    $scope.$watch('currentPage', function() 
    {
    
      var begin = ($scope.currentPage - 1) * $scope.itemsPerPage;
      var end = begin + $scope.itemsPerPage;
  
      $scope.paged = { movie: $scope.movie.slice(begin,end)   }
      console.log($scope.paged);
      console.log(end);
      console.log(begin);
    });*/

    $scope.isVisible = function(name)
    {
        return false;// return false to hide this artist's albums
    };
  })    

  $scope.ratedBy=function(active)
  {
    $scope.activeCustomer='active';
    $scope.activeCustomer=active.currentTarget.value;
    console.log($scope.activeCustomer);
   var url = "https://api.themoviedb.org/3/movie/top_rated?api_key=82fa3e0ef7a423ae707ff8078a2080ee&language=en-US&page=1";  
        
   $http.get(url).then(function(response)
    {  
       console.log(response);
      $scope.response = response.data;  
      $scope.rate=[];
        $scope.id;
        angular.forEach(response.data.results, function(index, element) 
        {
      $scope.rate.push(index);
      console.log($scope.movie)
    //  $scope.response["results"]=response["results"];
   });
  });
 }
var name=[];
$scope.favorite=function(names)
{
 
  name.push(names); 
  $window.localStorage.setItem('name', JSON.stringify(name)); 
  console.log(name)
 // $sessionStorage.SessionMessage = name;
}
$scope.getfavoriteList=function()
{
  
  var storedNames = JSON.parse($window.localStorage.getItem('name'));
  console.log(storedNames);
  $window.alert(storedNames);

} 
$scope.getIcon=function(file)
{
  console.log(file);
  'data:image/jpg;base64,'+_arrayBufferToBase64(file);

}
});
// Convert the buffer to base64
var _arrayBufferToBase64 = function( buffer ) {
  var binary = '';
  var bytes = new Uint8Array( buffer );
  var len = bytes.byteLength;
  console.log(len);
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
  }
  return window.btoa( binary );
};























 /* function View1Ctrl($scope,$location)
  {
    $scope.movieDetails = function(index)
    {

      $location.path('/view2'); 
     
     // path not hash 
     
     }
  }*/
 /* .error(function(data,status){    
    console.error('Fail to load data', status, data);    
    $scope.employees = { };
  });*/


/*var employeeAppModule = angular.module("employeeApp", []);    
 employeeAppModule.controller("employeeCtrl", function ($scope,$http) {    
   $http.get('https://api.themoviedb.org/3/movie/popular?api_key=82fa3e0ef7a423ae707ff8078a2080ee&language=en-US&page=1')    
   .success(function(data)
   {
    console.log(data);    
     $scope.employees = data.data;    
   })    
   .error(function(data,status){    
     console.error('Fail to load data', status, data);    
     $scope.employees = { };     
   });    
 });  */