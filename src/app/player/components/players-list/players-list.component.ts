import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../../model/player.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  @Input() playersList:Player[];
  @Output() playerToDelete=new EventEmitter<number>();

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
  }

  editPlayer(player: Player) {
    this.playerService.getPlayerDetail(player);
  }

  deletePlayer(playerIndex: number) {
    this.playerToDelete.emit(playerIndex);
  }
  
}
