import { Path } from './../models/path';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'slp-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap) map: GoogleMap;

  center: google.maps.LatLngLiteral;

  startPlace: google.maps.places.PlaceResult;
  placesList: google.maps.places.PlaceResult[] = [];

  shortestPath: Path;

  searchControl: FormControl;

  constructor() {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  }

  selectPlace(place: google.maps.places.PlaceResult) {
    if (!this.startPlace) {
      this.startPlace = place;
    } else {
      this.placesList.push(place);
    }

    this.map.center = place.geometry.location;
  }

  removeStart() {
    this.startPlace = null;
  }

  removePlaceFromList(place: google.maps.places.PlaceResult) {
    this.placesList.splice(this.placesList.indexOf(place), 1);
  }

  pathsCompute(path: Path) {
    this.shortestPath = path;
  }
}
