'use strict';
  
var app = angular.module('app', [
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/formation', {
      templateUrl: 'views/formation.html',
      controller: 'Formation'
    }) 
    .when('/enseignant', {
      templateUrl: 'views/enseignant.html',
      controller: 'Enseignant'
    })
    .when('/formation/formationajout', {
      templateUrl: 'views/formationajout.html',
      controller: 'FormationAjout'
    })
     .when('/formation/formationupdate/:codeFormation', {
      templateUrl: 'views/formationupdate.html',
      controller: 'FormationUpdate'
    })
     .when('/enseignant/enseignantajout', {
      templateUrl: 'views/enseignantajout.html',
      controller: 'EnseignantAjout'
    })
     .when('/enseignant/enseignantupdate/:noEnseignant', {
      templateUrl: 'views/enseignantupdate.html',
      controller: 'EnseignantUpdate'
    })
    .when('/', {
      templateUrl: 'views/stats.html',
      controller: 'Index'
    })
   
});


