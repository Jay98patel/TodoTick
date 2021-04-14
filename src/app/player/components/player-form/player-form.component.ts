import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Player } from '../../model/player.model';
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
  @Output() player  = new EventEmitter<Player>();
  @Output() editPlayer  = new EventEmitter<Player>();

  constructor(public fb: FormBuilder) { }

  ngOnInit():void {
    this.playerForm = this.buildPlayerForm();
  }

  buildPlayerForm(): FormGroup {
    return this.fb.group({
      playerName: ['', [Validators.required]],
      playerAge: ['', [Validators.required]],
      playerCity: ['', [Validators.required]],
    });
  }

  resetPlayerForm(){
    this.playerForm.reset();
    this.playerUpdateButton = false;
  }

  savePlayer() {
    if (this.playerForm.valid) {
      this.player.emit(this.playerForm.value);
      this.resetPlayerForm();
    }
  }

  updatePlayer() {
    if (this.playerForm.valid) {
      this.editPlayer.emit(this.playerForm.value);
      this.resetPlayerForm();
    }
  }
}
