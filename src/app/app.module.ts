import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionCountryComponent } from './components/region-country/region-country.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RegionCountryComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({deutsche_bank: reducer}),
    StoreDevtoolsModule.instrument({
      name: 'DeutscheBank'
      // logOnly: environment.production,
    }),
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true,
    //   }
    // }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [HttpClient, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
