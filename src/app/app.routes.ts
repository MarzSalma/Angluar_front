import { Routes } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { canActivateAuthRole } from './guards/auth-role.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';

export const routes: Routes = [
  {
    path: 'joueurs',
    component: JoueursComponent,
    canActivate: [canActivateAuthRole],
    data: { role: 'ADMIN' },
  },
  {
    path: 'profile',
    component: UserProfileComponent,
  },
  { path: 'forbidden', component: ForbiddenComponent },
];
