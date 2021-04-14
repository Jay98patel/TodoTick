import { Component, OnInit } from '@angular/core';
import { Player } from './model/player.model';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  editPlayer: Player;
  playersList:Player[];
  playerID:number;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayerList();
  }

  getPlayerList() {
    this.playerService.getPlayers().subscribe((playersList: Player[]) => {
      this.playersList = playersList;
    },(err) =>{});
  }

  playerToEdit(editPlayer:Player) {
    this.editPlayer = editPlayer;
    this.playerID=editPlayer.id;
  }

  updatePlayer(player:Player){
    this.playerService.updatePlayer(player,this.playerID).subscribe((player:Player)=>{
      this.getPlayerList();
    },(err)=>{});
  }

  savePlayer(player:Player){
    this.playerService.addPlayer(player).subscribe((player:Player)=>{
      this.getPlayerList();
    },(err)=>{});
  }

  playerToDelete(playerId:number){
    this.playerService.deletePlayer(playerId).subscribe((playerDelete:Player)=>{
      this.getPlayerList();
    },(err)=>{});
  }
}
