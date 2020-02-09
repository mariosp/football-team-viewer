'use strict';


angular.
  module('playersList').
  component('playersList', {
    templateUrl: 'players-list/players-list.template.html',
    controller: 
      function PlayersListController($http, Player, $rootScope, $scope) {
            
        var contr = this;
        contr.players;
        contr.prevClicked=null;

       async function init() {
           $rootScope.team = "Top 10 Football Players 2020";
           await Player.getPlayers();
           $scope.$apply(()=>{
               contr.players = Player.getAll()
           });
       }
       init();

      contr.btn = function(index){

        document.getElementsByClassName("pbox")[index].classList.add("clicked");

        if(contr.prevClicked != null){
          document.getElementsByClassName("pbox")[contr.prevClicked].classList.remove("clicked");
        }

        contr.prevClicked = index;

      }

              

        
      }
    
  });
