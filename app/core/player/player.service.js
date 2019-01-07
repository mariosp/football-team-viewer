'use strict';

angular.
  module('core.player').
  factory('Player', function ($rootScope) {
    var players;
    var favp = '';


    return {
        getAll: getAll,
        getPlayer : getPlayer,
        setData : setData,
        setStar : setStar,
        getStar : getStar,
        setFavPlayers :setFavPlayers,
        getFav : getFav,
        setStarId : setStarId
    };

    // .................

    function getAll() {
        return players;
    }

    function getPlayer(value) {
      return players[value];
    }

    function setData(value){
     players = value;
     players.forEach(function(e) { e.star = false});
    }

    function setStar(index,value){
        players[index].star=value;
        setFavPlayers();
        $rootScope.$broadcast("favchanged");
    }

    function setStarId(id){
        
        players.forEach(function(player){
            if(player.idPlayer == id){
                player.star = false;
            }
        });
        setFavPlayers();
        $rootScope.$broadcast("favchanged");
    }


    function getStar(index){
        return players[index].star;
    }

    function setFavPlayers(){

      favp = players.filter(function(player){
          
        if(player.star == true){
            return true;
        }else{
            return false;
        }
      });

      return favp;

    }

    function getFav(){
        return favp;
    }

});
