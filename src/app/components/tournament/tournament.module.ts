import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentCreateComponent } from './tournament-create/tournament-create.component';
import { TournamentDetailComponent } from './tournament-detail/tournament-detail.component';
import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentEditComponent } from './tournament-edit/tournament-edit.component';

@NgModule({
  declarations: [TournamentListComponent, TournamentCreateComponent, TournamentDetailComponent, TournamentEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TournamentRoutingModule,
  ],
})
export class TournamentModule {}
