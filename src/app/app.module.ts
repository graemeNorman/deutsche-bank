import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RegionCountryComponent } from './components/region-country/region-country.component';

import { DataService } from './services/data.service';
import { RequestCache } from './services/cache-request.service';
import { CachingInterceptor } from './services/caching.interceptor';
import { reducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    RegionCountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({deutsche_bank: reducer}),
    StoreDevtoolsModule.instrument({
      name: 'DeutscheBank'
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    HttpClient,
    DataService,
    RequestCache,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
