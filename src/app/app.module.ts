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
import { ToarrayobservablesComponent } from './pages/toarrayobservables/toarrayobservables.component'

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
