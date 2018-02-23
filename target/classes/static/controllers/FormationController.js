
app.controller('Formation', function($scope,$http,$location) {

	$scope.getformations=function(){
	 $http.get('/formations').then(function(response) {
        $scope.formations = response.data;
       
    });
	},
	
	

	
$scope.remove=function(id){
		$http.delete("/formations/delete/"+id)
    	.then(function(){
    		console.log("delete done");
	
	
	$http.get('/formations').then(function(response) {
        $scope.formations = response.data;
    });
    	})},
    	
    	
    	$scope.show = function(){   		
    		 	$location.path('/formation/formationajout.html');    		 	
    	};
});


	    	
	    	
	  
	