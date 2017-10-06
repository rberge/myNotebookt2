import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdentityComponent } from './features/identity/identity.component';
import { HeaderComponent } from './features/shared/header/header.component';
import { LoginComponent } from './features/login/login.component';
import { FooterComponent } from './features/shared/footer/footer.component';
import { MrHomeComponent } from './features/Start/mr-home.component';

const appRoutes: Routes = [
  { path: '',
  redirectTo: 'app/login',
  pathMatch: 'full'
},
{path: 'test', redirectTo: 'onetest'},
{ path: 'mr-home', component: MrHomeComponent}, // name of folder
{ path: 'Identity', component: IdentityComponent}, // name of folder
/* { path: 'PtHome',      component: ptHomeComponent },
  { path: 'Reports', component:reportBaseComponent},
  {
    path: 'mailbox',
    component: mailBoxComponent,
    data: { title: 'Inbound Mail List' }
  },
  */
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot( appRoutes,
    {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
