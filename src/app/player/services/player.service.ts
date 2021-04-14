import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Team } from '../masterData/Players';
import { Player } from '../model/player.model';
/**
 * Json server Crud Methods
 * 
 */

@Injectable()
export class PlayerService {
  private baseURL: string;
  player:Player[]=[];
  playerSubject=new BehaviorSubject<Player[]>(this.player);

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