import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Player } from '../../model/palyer.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  playersList:Player[];

  @Output() playerToEdit = new EventEmitter<Player>();

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getPlayerList();
  }

  getPlayerList(){
    this.playersList= this.playerService.getPlayers();
  }

  editPlayer(player:Player){
    this.playerToEdit.emit(player);
  }

  deletePlayer(playerIndex:number){
    this.playerService.deletePlayer(playerIndex);
  }
}
