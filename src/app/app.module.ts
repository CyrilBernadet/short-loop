import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PlacesListComponent } from './places-list/places-list.component';

@NgModule({
  declarations: [AppComponent, MapComponent, PlacesListComponent],
  imports: [BrowserModule, GoogleMapsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
