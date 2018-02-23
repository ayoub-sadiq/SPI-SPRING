app.controller('EnseignantAjout', function($scope,$http,$location) {
	
	
	 $scope.add = function(){
		       
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
	    	
	  
	    		 	
	    	$http.get('/enseignants/searchById/'+obj.noEnseignant).then(function(response) {
	    		if(response.data.noEnseignant!=undefined) {console.log('Existant');}
	    		else {
	    		 	$http.post("/enseignants",obj)
	    	    	.then(function(){
	    	    		console.log("done");
	    	    	
	    	    	  	$location.path('/enseignant/');
	    	    	    });	 
	    		}
	    		//console.log(response.data.codeFormation);
	    	});
	 }
	  
	
	
	
});