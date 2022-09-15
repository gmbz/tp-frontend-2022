import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

import { TournamentsService } from 'src/app/services/tournaments.service';
import { Tournament } from 'src/app/models/tournaments';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css'],
})
export class TournamentListComponent implements OnInit {
  tournaments!: Tournament[];

  constructor(private tournamentService: TournamentsService) { }

  ngOnInit(): void {
    this.getAllTournaments();
  }

  // getAllTournaments() {
  //   this.tournamentService.getAllTournaments().subscribe({
  //     next: (res) => {
  //       console.log(res);
  //       this.tournaments = res;
  //     },
  //     error: (err) => console.log(err),
  //   });
  // }
  getAllTournaments() {
    this.tournamentService.getAllTournaments().pipe(
      tap((tournaments: Tournament[]) => this.tournaments = tournaments)
    ).subscribe();
  }
}
