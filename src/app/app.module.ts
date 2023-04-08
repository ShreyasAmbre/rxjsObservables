import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PromisesComponent } from './pages/promises/promises.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { HttpClientModule } from '@angular/common/http';
import { AllobservablesComponent } from './pages/allobservables/allobservables.component';
import { FromeventobservablesComponent } from './pages/fromeventobservables/fromeventobservables.component';
import { OffromObservablesComponent } from './pages/offrom-observables/offrom-observables.component';
import { ToarrayobservablesComponent } from './pages/toarrayobservables/toarrayobservables.component';
import { CustomobservableComponent } from './pages/customobservable/customobservable.component';
import { MapObservableComponent } from './pages/map-observable/map-observable.component';
import { PluckObservableComponent } from './pages/pluck-observable/pluck-observable.component';
import { FilterObservableComponent } from './pages/filter-observable/filter-observable.component';
import { TapObservableComponent } from './pages/tap-observable/tap-observable.component';
import { TakeObservableComponent } from './pages/take-observable/take-observable.component';
import { DebounceDistinctUntilChangeObservableComponent } from './pages/debounce-distinct-until-change-observable/debounce-distinct-until-change-observable.component';
import { SubjectObservableComponent } from './pages/subject-observable/subject-observable.component';
import { SubjectChildAObservableComponent } from './pages/subject-child-aobservable/subject-child-aobservable.component';
import { SubjectChildBObservableComponent } from './pages/subject-child-bobservable/subject-child-bobservable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromisesComponent,
    ObservablesComponent,
    AllobservablesComponent,
    FromeventobservablesComponent,
    OffromObservablesComponent,
    ToarrayobservablesComponent,
    CustomobservableComponent,
    MapObservableComponent,
    PluckObservableComponent,
    FilterObservableComponent,
    TapObservableComponent,
    TakeObservableComponent,
    DebounceDistinctUntilChangeObservableComponent,
    SubjectObservableComponent,
    SubjectChildAObservableComponent,
    SubjectChildBObservableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
