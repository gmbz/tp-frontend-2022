import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

import { Tournament } from 'src/app/models/tournaments';
import { TournamentsService } from 'src/app/services/tournaments.service';

@Component({
  selector: 'app-tournament-detail',
  templateUrl: './tournament-detail.component.html',
  styleUrls: ['./tournament-detail.component.css'],
})
export class TournamentDetailComponent implements OnInit {
  public tournamentId!: String;
  tournament?: Tournament;

  constructor(
    private route: ActivatedRoute,
    private tournamentService: TournamentsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.tournamentId = params.get('id')!;
    });
    this.getTournamentById();
  }

  getTournamentById() {
    this.tournamentService
      .getTournamentById(this.tournamentId)
      .pipe(tap((tournament: Tournament) => (this.tournament = tournament!)))
      .subscribe();
  }
}
