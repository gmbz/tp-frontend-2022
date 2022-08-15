import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';

import { TournamentCreateComponent } from './components/tournament/tournament-create/tournament-create.component';
import { TournamentListComponent } from './components/tournament/tournament-list/tournament-list.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user.module').then((x) => x.UserModule),
  },
  {
    path: 'tournaments',
    loadChildren: () =>
      import('./components/tournament/tournament.module').then(
        (x) => x.TournamentModule
      ),
  },
  { path: '', component: HomeComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
