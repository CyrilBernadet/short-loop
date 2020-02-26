import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PlaceFinderComponent } from './place-finder/place-finder.component';

@NgModule({
  declarations: [AppComponent, MapComponent, PlaceFinderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
