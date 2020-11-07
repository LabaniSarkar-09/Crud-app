import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateproComponent } from './createpro/createpro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'createpro', component: CreateproComponent},
  { path: 'edit/:id', component: CreateproComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
