import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { League } from '../models/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private SERVER: string = 'http://localhost:4000/league';

  constructor(private httpClient: HttpClient) { }

  getAllLeagues(): Observable<League[]> {
    return this.httpClient.get<League[]>(`${this.SERVER}/`);
  }
}
