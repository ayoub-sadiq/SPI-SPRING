app.controller('EnseignantUpdate', function($scope,$http,$location,$routeParams) {

	
	    	
	
			$http.get('/enseignants/searchById/'+$routeParams.noEnseignant).then(function(response) {
		        
		    
		        	
		        	 obj=response.data;
		        	 
		        	  $scope.noEnseignant =obj.noEnseignant ;
		        	 $scope.nom  =	obj.nom ;
		        	 $scope.prenom  =	obj.prenom ;
		        	 $scope.adresse  =	obj.adresse;
		        	 $scope.codePostal   =	obj.codePostal;
		        	 $scope.emailPerso =  obj.emailPerso;
		        	 $scope.emailUbo  = 	obj.emailUbo;
		        	 $scope.mobile  = 	obj.mobile;
		        	 $scope.pays   =	obj.pays ;
		        	 $scope.sexe   =	obj.sexe;
		        	 $scope.telephone = 	obj.telephone;
		        	 $scope.type =  obj.type;
		        	 $scope.ville  = 	obj.ville; 
		    
		    	    })   	
			
		    	,
		      	$scope.saveEdit=function(){
				var obj = {};
		    obj.noEnseignant = $scope.noEnseignant;
		    	obj.nom = $scope.nom;
		    	obj.prenom = $scope.prenom;
		    	obj.adresse= $scope.adresse;
		    	obj.codePostal=$scope.codePostal;
		    obj.emailPerso=$scope.emailPerso;
		    	obj.emailUbo=$scope.emailUbo;
		    	obj.mobile = $scope.mobile;
		    	obj.pays = $scope.pays;
		    	obj.sexe= $scope.sexe;
		    	obj.telephone=$scope.telephone;
		    obj.type=$scope.type;
		    	obj.ville=$scope.ville;
		        	 
		         	$http.put("/enseignants/Update/",obj)
		        	.then(function(){
		        		console.log("update done");
		        	
		        		$location.path('/enseignant/');
		    	    });	
		    	}
	
	
	
});