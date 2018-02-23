app.controller('FormationAjout', function($scope,$http,$location) {
	
	
	 $scope.add = function(){
		
	       
	       
	  	var obj = {};
	    	obj.codeFormation = $scope.codeFormation;
	    	obj.nomFormation = $scope.nomFormation;
	    	obj.diplome = $scope.diplome;
	    	obj.n0Annee= $scope.anneeFormation;
	    	obj.doubleDiplome=$scope.doublediplome;
	    obj.finAccreditation=$scope.datedebut;
	    	obj.debutAccreditation=$scope.datefin;
	    	
	   // 	console.log(obj);
	    	
	    	$http.get('/formations/'+obj.codeFormation).then(function(response) {
	    		if(response.data.codeFormation!=undefined) {console.log('Existant');}
	    		else {
	    		 	$http.post("/formations",obj)
	    	    	.then(function(){
	    	    		console.log("done");
	    	    	
	    	    	  	$location.path('/formation/');
	    	    	    });	 
	    		}
	    		//console.log(response.data.codeFormation);
	    	});
	     	
	    	};
	    		 	
	    	
	  
	
	
	
});