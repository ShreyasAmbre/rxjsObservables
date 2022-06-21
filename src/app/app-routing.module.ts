import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './pages/observables/observables.component';
import { PromisesComponent } from './pages/promises/promises.component';

const routes: Routes = [
  { path: '', redirectTo: 'promises', pathMatch: 'full' },
  { path: 'promises', component: PromisesComponent },
  { path: 'observables', component: ObservablesComponent },
  { path: '**', redirectTo: 'promises', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
