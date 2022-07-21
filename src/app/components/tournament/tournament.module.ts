import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { TournamentCreateComponent } from './tournament-create/tournament-create.component';
import { TournamentDetailComponent } from './tournament-detail/tournament-detail.component';
import { TournamentRoutingModule } from './tournament-routing.module';

@NgModule({
  declarations: [TournamentListComponent, TournamentCreateComponent, TournamentDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TournamentRoutingModule,
  ],
})
export class TournamentModule {}
