import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllobservablesComponent } from './pages/allobservables/allobservables.component';
import { FromeventobservablesComponent } from './pages/fromeventobservables/fromeventobservables.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { OffromObservablesComponent } from './pages/offrom-observables/offrom-observables.component';
import { PromisesComponent } from './pages/promises/promises.component';
import { ToarrayobservablesComponent } from './pages/toarrayobservables/toarrayobservables.component';

const routes: Routes = [
  { path: '', redirectTo: 'promises', pathMatch: 'full' },
  { path: 'promises', component: PromisesComponent },
  { path: 'observables', component: ObservablesComponent, children: [
    {path: '', component: AllobservablesComponent},
    {path: 'fromevent', component: FromeventobservablesComponent},
    {path: 'offrom', component: OffromObservablesComponent},
    {path: 'toarray', component: ToarrayobservablesComponent},
  ]},
  { path: '**', redirectTo: 'promises', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
