'use strict';


angular.
  module('playerDetail').
  component('playerDetail', {
    templateUrl: 'player-detail/player-detail.template.html',
    controller:
      function PlayerDetailController($routeParams, Player) {

        var self = this;
        this.player = Player.getPlayer($routeParams.playerId);
        this.playerId = $routeParams.playerId;
      

        this.imageUrl = this.player.strThumb;
        this.name = this.player.strPlayer;
        this.age = getAge(this.player.dateBorn);
        this.description = this.player.strDescriptionEN;
        this.nationality = this.player.strNationality;
        this.star = this.player.star;
        this.colo = starob();

        


        function getAge(dateString) {
          var today = new Date();
          var birthDate = new Date(dateString);
          var age = today.getFullYear() - birthDate.getFullYear();
          var m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
              age--;
          }
          return age;
      }

      this.cstar = function (){
          if(self.player.star==false){
           Player.setStar(self.playerId,true);
           self.player.star =true;
           self.colo = starob();
          }else{
            Player.setStar(self.playerId,false);
            self.player.star=false;
            self.colo = starob();
          }
      }
        
      function starob(){

        if(self.player.star == false){
          
          return ''

        }else{
          
          return 'colo'
        }
         
      }
       
      
      }
    
  });
