import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AngularTestComponent} from './angular-test/angular-test.component';

const routes: Routes = [
  { 
    path: '', 
    component: AngularTestComponent,
  },
  { 
    path: 'home', 
    component: HomeComponent,
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '/' },
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
