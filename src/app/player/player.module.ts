import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayerService } from './services/player.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Team } from './masterData/Players';
import { TodoTickButtonModule } from '../shared Module/todo-tick-button/todo-tick-button.module';


@NgModule({
  declarations: [PlayerComponent, PlayerFormComponent, PlayersListComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    ReactiveFormsModule,
    TodoTickButtonModule
  ],
  providers: [
    PlayerService,
    Team
  ]
})
export class PlayerModule { }
