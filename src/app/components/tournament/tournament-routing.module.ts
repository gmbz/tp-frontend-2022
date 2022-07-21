import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard';

import { TournamentCreateComponent } from './tournament-create/tournament-create.component';
import { TournamentDetailComponent } from './tournament-detail/tournament-detail.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';

const routes: Routes = [
  { path: '', component: TournamentListComponent },
  {
    path: 'create',
    component: TournamentCreateComponent,
    canActivate: [AuthGuard],
  },
  { path: ':id', component: TournamentDetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentRoutingModule {}
