import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllobservablesComponent } from './pages/allobservables/allobservables.component';
import { CustomobservableComponent } from './pages/customobservable/customobservable.component';
import { FilterObservableComponent } from './pages/filter-observable/filter-observable.component';
import { FromeventobservablesComponent } from './pages/fromeventobservables/fromeventobservables.component';
import { MapObservableComponent } from './pages/map-observable/map-observable.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { OffromObservablesComponent } from './pages/offrom-observables/offrom-observables.component';
import { PluckObservableComponent } from './pages/pluck-observable/pluck-observable.component';
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
    {path: 'customobservable', component: CustomobservableComponent},
    {path: 'mapobservable', component: MapObservableComponent},
    {path: 'pluckobservable', component: PluckObservableComponent},
    {path: 'filterobservable', component: FilterObservableComponent},
  ]},
  { path: '**', redirectTo: 'promises', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
