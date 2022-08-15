import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Tournament } from 'src/app/models/tournaments';
import { TournamentsService } from 'src/app/services/tournaments.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tournaments!: Tournament[];

  constructor(private tournamentService: TournamentsService) { }

  ngOnInit(): void {
    this.getAllTournaments();
  }

  getAllTournaments() {
    this.tournamentService.getAllTournaments().pipe(
      tap((tournaments: Tournament[]) => this.tournaments = tournaments)
    ).subscribe();
  }

}
