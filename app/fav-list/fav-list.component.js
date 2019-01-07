'use strict';

angular.
  module('favList').
  component('favList', {
    templateUrl: 'fav-list/fav-list.template.html',
    controller: 
      function FavListController($scope, Player) {

        let contr = this;
        contr.favp= '';

        $scope.$on("favchanged",function () {contr.favp=Player.getFav();} );
        
        contr.changefav = function(id){
              Player.setStarId(id);

        }
        
        


            
              

        
      }
    
  });
