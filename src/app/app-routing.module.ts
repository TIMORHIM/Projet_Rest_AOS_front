import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NavComponent } from './nav/nav.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { AddWorkerComponent } from './worker/add-worker/add-worker.component';
import {ListWorkerComponent} from './worker/list-worker/list-worker.component';

const routes: Routes = [
  {
      path: 'auth/login',
      component: LoginComponent
  },
  {
      path: 'nav',
      component: NavComponent
  },
  {
      path: 'user',
      component: UserComponent
  },
  {
      path: 'admin',
      component: AdminComponent
  },
  {
      path: 'addWorker',
      component: AddWorkerComponent
  },
  {
    path : 'listWorker',
    component : ListWorkerComponent
  },
  {
      path: '',
      redirectTo: '/auth/login',
      pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
