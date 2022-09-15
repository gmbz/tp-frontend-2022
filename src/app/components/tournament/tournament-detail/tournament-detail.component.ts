import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';

import { Tournament } from 'src/app/models/tournaments';
import { TournamentsService } from 'src/app/services/tournaments.service';
import { UserService } from 'src/app/services/user.service';

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
    private tournamentService: TournamentsService,
    private toastr: ToastrService,
    private router: Router,
    public userService: UserService
  ) { }

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

  deleteTournament() {
    this.tournamentService.deleteTournamentById(this.tournament?._id).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.info("El torneo fue eliminado con éxito", "Torneo eliminado!");
        this.router.navigate(['/tournaments']);
      },
      error: (err) => console.log(err)
    });
  }
}
