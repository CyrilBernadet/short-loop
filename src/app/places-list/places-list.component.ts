import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'slp-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  @Input() start: google.maps.places.PlaceResult;
  @Input() places: google.maps.places.PlaceResult[];

  constructor() {}

  ngOnInit(): void {}

  removePlaceFromList(place: google.maps.places.PlaceResult) {
    this.places.splice(this.places.indexOf(place), 1);
  }
}
