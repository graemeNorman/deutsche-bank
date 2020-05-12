import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionCountryComponent } from './components/region-country/region-country.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegionCountryComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, DataService],
  bootstrap: [AppComponent]
})

export class AppModule { }
