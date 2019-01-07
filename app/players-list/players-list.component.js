'use strict';


angular.
  module('playersList').
  component('playersList', {
    templateUrl: 'players-list/players-list.template.html',
    controller: 
      function PlayersListController($http, Player,$rootScope) {
            
        let contr = this;
        contr.players;
        contr.prevClicked=null;    
            

          $http.get("https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Chelsea")
              .then(function successCallback(response){

                Player.setData(response.data.player);
                contr.players = Player.getAll();
                $rootScope.team = contr.players[0].strTeam;
              }, function errorCallback(response){
                  console.log("Unable to perform get request");
              });

              contr.btn = function(index){
                
                document.getElementsByClassName("pbox")[index].classList.add("clicked");

                if(contr.prevClicked != null){
                  document.getElementsByClassName("pbox")[contr.prevClicked].classList.remove("clicked");
                }

                contr.prevClicked = index;
                
              }

              

        
      }
    
  });
