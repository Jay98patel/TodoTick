import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../masterData/Players';
import { Player } from '../model/palyer.model';

@Injectable()
export class PlayerService {
  private baseURL: string;

  constructor(private playerList:Team,private http: HttpClient) { 
    this.baseURL = environment.apiUrl;
  }

  getPlayers():Observable<Player[]>{
    return this.http.get<Player[]>(`${this.baseURL}/player`)
  }

  addPlayer(newPlayer:Player):Observable<Player>{
    return this.http.post<Player>(`${this.baseURL}/player`, newPlayer);
  }

  updatePlayer(playerDetail:Player,playerId:number){
    return this.http.put<Player>(`${this.baseURL}/player/${playerId}`, playerDetail);
  }

  deletePlayer(playerIndex:number){
    return this.http.delete<Player>(`${this.baseURL}/player/${playerIndex}`);
  }
}

// return this.http.put<Player>(this.baseURL +`/`+'player'+ `/` + playerDetail.id, playerDetail);
// const index = this.playerList.players.findIndex(player => playerDetail.id === player.id);
// this.playerList.players[index] = playerDetail;