import { Injectable } from '@angular/core';
import { Team } from '../masterData/Players';
import { Player } from '../model/palyer.model';

@Injectable()
export class PlayerService {

  constructor(private playerList:Team) { }

  getPlayers():Player[]{
    return this.playerList.players;
  }

  addPlayer(newPlayer:Player){
    newPlayer.id = this.playerList.players.length + 1;
    return this.playerList.players.push(newPlayer);
  }

  updatePlayer(playerDetail:Player){
    const index = this.playerList.players.findIndex(player => playerDetail.id === player.id);
    this.playerList.players[index] = playerDetail;
  }

  deletePlayer(playerIndex:number){
    return this.playerList.players.splice(playerIndex,1);
  }
}
