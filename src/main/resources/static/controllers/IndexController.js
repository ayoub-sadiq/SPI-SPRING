app.controller('Index', function($scope,$http,$location,$routeParams) {
	
	$http.get('/formations/count').then(function(response) {
        $scope.formations = response.data;    
    });
	
	$http.get('/enseignants/count').then(function(response) {
        $scope.enseignants = response.data;    
    });
	
});