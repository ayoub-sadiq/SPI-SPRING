app.controller('FormationUpdate', function($scope,$http,$location,$routeParams) {

	
	    	
	
			$http.get('/formations/'+$routeParams.codeFormation).then(function(response) {
		        
		        	var obj2 = {};
		        	 obj2=response.data;
		        	$scope.codeFormationModif= obj2.codeFormation;
		        	  $scope.nomFormationModif =	obj2.nomFormation ;
		        	  $scope.diplomeModif=	obj2.diplome ;
		        	  $scope.anneeFormationModif=	obj2.n0Annee;
		        	 $scope.doublediplomeModif=	obj2.doubleDiplome;
		        	 $scope.datedebutModif =obj2.finAccreditation;
		        	 $scope.datefinModif	=obj2.debutAccreditation; 
		    
		    	    })	
		    	    
		    	    ,
		      	$scope.saveEdit=function(){
		    	 	var obj = {};

		    	 	obj.codeFormation = $scope.codeFormationModif;
		        	obj.nomFormation = $scope.nomFormationModif;
		        	obj.diplome = $scope.diplomeModif;
		        	obj.n0Annee= $scope.anneeFormationModif;
		        	obj.doubleDiplome=$scope.doublediplomeModif;
		        obj.finAccreditation=$scope.datedebutModif;
		        	obj.debutAccreditation=$scope.datefinModif;
		        	 
		         	$http.put("/formations/update/",obj)
		        	.then(function(){
		        		console.log("update done");
		        	
		        		$location.path('/formation/');
		    	    });	
		    	}
	
	
	
});