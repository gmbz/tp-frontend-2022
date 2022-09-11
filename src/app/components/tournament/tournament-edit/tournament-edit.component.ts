import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { League } from 'src/app/models/league';
import { Tournament } from 'src/app/models/tournaments';
import { LeagueService } from 'src/app/services/league.service';
import { TournamentsService } from 'src/app/services/tournaments.service';

@Component({
  selector: 'app-tournament-edit',
  templateUrl: './tournament-edit.component.html',
  styleUrls: ['./tournament-edit.component.css']
})
export class TournamentEditComponent implements OnInit {
  public tournamentId!: String;
  tournamentForm!: FormGroup;
  leagues!: League[];
  tournament!: Tournament;

  constructor(
    private tournamentService: TournamentsService,
    private leagueService: LeagueService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
  ) {
    this.tournamentForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      premio: ['', Validators.required],
      cupo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      clasificacionMinima: ['', Validators.required],
      privado: [false],
    });
    this.route.paramMap.subscribe((params) => {
      this.tournamentId = params.get('id')!;
    });

  }

  ngOnInit(): void {
    this.getAllLeagues();
    this.getTournamentById();
  }

  edit() {
    const tournament: Tournament = {
      nombre: this.tournamentForm.get('nombre')?.value,
      privado: this.tournamentForm.get('privado')?.value,
      cupo: this.tournamentForm.get('cupo')?.value,
      premio: this.tournamentForm.get('premio')?.value,
      fechaInicio: this.tournamentForm.get('fechaInicio')?.value,
      fechaFin: this.tournamentForm.get('fechaFin')?.value,
      clasificacionMinima: this.tournamentForm.get('clasificacionMinima')?.value,
    };
    this.tournamentService.editTournamentById(this.tournamentId, tournament).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.success('El torneo se ha actualizado', 'Torneo actualizado!');
        this.router.navigate(['/tournaments']);
      },
      error: (err) => console.log(err),
    });
  }

  getAllLeagues() {
    this.leagueService.getAllLeagues().pipe(
      tap((leagues: League[]) => this.leagues = leagues)
    ).subscribe();

  }

  getTournamentById() {
    this.tournamentService
      .getTournamentById(this.tournamentId).subscribe(data => {
        this.tournamentForm.setValue({
          nombre: [data.nombre],
          premio: [data.premio],
          cupo: [data.cupo],
          fechaInicio: [this.datePipe.transform(data.fechaInicio, "yyyy-MM-dd")],
          fechaFin: [this.datePipe.transform(data.fechaFin, "yyyy-MM-dd")],
          clasificacionMinima: [data.clasificacionMinima?.tier],
          privado: [data.privado],
        });
      });
  }

}
