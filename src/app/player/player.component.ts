import { Component, OnInit } from '@angular/core';
import { Player } from './model/palyer.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  editPlayer: Player;
  constructor() { }

  ngOnInit(): void {
  }

  playerToEdit(editPlayer) {
    this.editPlayer = editPlayer;
  }

}
