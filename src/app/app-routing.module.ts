import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { TournamentCreateComponent } from './components/tournament/tournament-create/tournament-create.component';
import { TournamentListComponent } from './components/tournament/tournament-list/tournament-list.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./components/user/user.module').then((x) => x.UserModule),
  },
  { path: 'tournaments', component: TournamentListComponent },
  {
    path: 'tournaments/create',
    component: TournamentCreateComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
