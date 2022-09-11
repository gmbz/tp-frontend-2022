import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from '../models/tournaments';

@Injectable({
  providedIn: 'root',
})
export class TournamentsService {
  private SERVER: string = 'http://localhost:4000/tournament';

  constructor(private httpClient: HttpClient) {}

  getAllTournaments(): Observable<Tournament[]> {
    return this.httpClient.get<Tournament[]>(`${this.SERVER}/`);
  }

  createTournament(tournament): Observable<any> {
    return this.httpClient.post(`${this.SERVER}/`, tournament);
  }

  getTournamentById(id): Observable<Tournament> {
    return this.httpClient.get<Tournament>(`${this.SERVER}/${id}`);
  }

  deleteTournamentById(id): Observable<any> {
    return this.httpClient.delete(`${this.SERVER}/${id}`);
  }

  editTournamentById(id, tournament): Observable<any> {
    return this.httpClient.put(`${this.SERVER}/${id}`, tournament);
  }
}
