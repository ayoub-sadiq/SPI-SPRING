
app.controller('Enseignant', function($scope,$http) {
  
    $scope.getenseignants=function(){
    	$http.get('/enseignants').then(function(response) {
            $scope.enseignants = response.data;
        });
    },

    $scope.remove=function(id){
    		$http.delete("/enseignants/remove/"+id)
        	.then(function(){
        		console.log("delete done");
    	
    	
    	$http.get('/enseignants').then(function(response) {
            $scope.enseignants = response.data;
        });
        	})},
        	    	
        	$scope.show = function(){        		
        		 	$location.path('/enseignant/enseignantajout.html');    		 	
        	};
        
  
  });