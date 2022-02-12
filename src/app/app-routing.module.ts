import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Assignment1Component} from './screens/assignment1/assignment1.component'
import {Assignment2Component} from './screens/assignment2/assignment2.component'

const routes: Routes = [
  {path:"",component:Assignment1Component},
  {path:"assignment1",component:Assignment1Component},
  {path:"assignment2",component:Assignment2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
