'use strict';

angular.
  module('fPlayers').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/players/:playerId', {
          template: '<player-detail></player-detail>'
        }).
        when('/players/', {
          template: '<div><h1>Choose a football player to start</h1></div>'
        }).
        otherwise('/players/');
    }
  ]);
