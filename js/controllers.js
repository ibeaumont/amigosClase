var amigosControllers = angular.module('amigosControllers', []);

//controlador para el index
amigosControllers.controller('appCtrl',['$scope','$rootScope','$location',function($scope,$rootScope,$location){
$rootScope.amigos = [
	{
		nombre:"juan",
		tlfno:"123456789"
	},
	{
		nombre:"pedro",
		tlfno:"123456789"
	},	
	{
		nombre:"luis",
		tlfno:"123456789"
	}
	];
	$scope.isActive=function(viewLocation){
		if($location.path().indexOf(viewLocation)>=0){
			return true;
		}else{
			return viewLocation===$location.path();
		}
		
		
	};
}]);

//controlador para la lista de amigos
amigosControllers.controller('amigosCtrl', ['$scope','$rootScope',
  function($scope,$rootScope) {
    
  }]);

//controlador para la edicion de amigos
amigosControllers.controller('amigoEditCtrl', ['$scope', '$rootScope','$routeParams',
  function($scope,$rootScope,$routeParams) {
  	
	$scope.amigo=$rootScope.amigos[$routeParams.amigoId];
}]);

//controlador para añadir de amigos
amigosControllers.controller('amigoNewCtrl', ['$scope', '$rootScope','$routeParams',
  function($scope,$rootScope) {
 	$scope.amigo={nombre:"",tlfno:""};
 	$scope.guardar=function(){
 		if ($scope.amigo.nombre!=""){
 			$rootScope.amigos.push($scope.amigo);
 		}
 	}
}]);
