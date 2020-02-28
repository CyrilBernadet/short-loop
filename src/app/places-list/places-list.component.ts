import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'slp-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {
  @Input() start: google.maps.places.PlaceResult;
  @Input() places: google.maps.places.PlaceResult[];

  @Output() removeStartPlace: EventEmitter<void> = new EventEmitter();
  @Output() removePlace: EventEmitter<
    google.maps.places.PlaceResult
  > = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  removeStart() {
    this.removeStartPlace.emit();
  }

  removePlaceFromList(place: google.maps.places.PlaceResult) {
    this.removePlace.emit(place);
  }
}
