import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tournament } from 'src/app/models/tournaments';
import { TournamentsService } from 'src/app/services/tournaments.service';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css'],
})
export class TournamentCreateComponent implements OnInit {
  tournamentForm: FormGroup;

  constructor(
    private tournamentService: TournamentsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.tournamentForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      premio: ['', Validators.required],
      cupo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      privado: [false],
    });
  }

  ngOnInit(): void {}

  create() {
    const tournament: Tournament = {
      nombre: this.tournamentForm.get('nombre')?.value,
      privado: this.tournamentForm.get('privado')?.value,
      cupo: this.tournamentForm.get('cupo')?.value,
      premio: this.tournamentForm.get('premio')?.value,
      fechaInicio: this.tournamentForm.get('fechaInicio')?.value,
      fechaFin: this.tournamentForm.get('fechaFin')?.value,
    };
    this.tournamentService.createTournament(tournament).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.success('El torneo fue creado con exito', 'Torneo creado!');
        this.router.navigate(['/tournaments']);
      },
      error: (err) => console.log(err),
    });
  }
}
