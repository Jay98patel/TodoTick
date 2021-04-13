import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '../../model/palyer.model';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  playerForm: FormGroup;
  playerToEdit: Player;
  playerData: Player;
  playerUpdateButton: boolean = false;

  @Input()
  set playerEdit(playerValue: Player) {
    if (playerValue) {
      this.playerUpdateButton = true;
      this.playerToEdit = { ...playerValue };
      this.playerForm.patchValue(playerValue);
    }
  }
  get playerEdit(): Player {
    return this.playerToEdit;
  }

  constructor(public fb: FormBuilder, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerForm = this.buildPlayerForm();
  }

  buildPlayerForm(): FormGroup {
    return this.fb.group({
      playerName: ['', [Validators.required]],
      playerAge: ['', [Validators.required]],
      playerCity: ['', [Validators.required]],
    });
  }

  savePlayer() {
    if (this.playerForm.valid) {
      this.playerService.addPlayer(this.playerForm.value);
      this.playerForm.reset();
      this.playerUpdateButton = false;
    }
  }

  updatePlayer() {
    if (this.playerForm.valid) {
      let playerDetails={...this.playerToEdit,...this.playerForm.value}
      this.playerService.updatePlayer(playerDetails);
      this.playerForm.reset();
      this.playerUpdateButton = false;
    }
  }
}
