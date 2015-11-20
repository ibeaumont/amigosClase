var amigosControllers = angular.module('amigosControllers', []);

//controlador para el index
amigosControllers.controller('appCtrl',['$scope','$rootScope',function($scope,$rootScope){
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
 		$rootScope.amigos.push($scope.amigo);
 		console.log($scope.amigo);
 		console.log($rootScope.amigos);
 	}
}]);
