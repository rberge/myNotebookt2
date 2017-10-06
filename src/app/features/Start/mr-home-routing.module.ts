import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MrHomeComponent } from './mr-home.component';

const MedRecordRoutes: Routes = [
  {
    path: '',
    component: MrHomeComponent,
      }
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(MedRecordRoutes)
  ],
  exports: [
    RouterModule
  ],

})
export class MrHomeRoutingModule { }
