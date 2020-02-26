import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'slp-place-finder',
  templateUrl: './place-finder.component.html',
  styleUrls: ['./place-finder.component.scss']
})
export class PlaceFinderComponent implements OnInit, AfterViewInit {
  public searchControl: FormControl;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  @Output() selectPlace: EventEmitter<
    google.maps.places.PlaceResult
  > = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.searchControl = new FormControl();
  }

  ngAfterViewInit(): void {
    const autocomplete = new google.maps.places.Autocomplete(
      this.searchElementRef.nativeElement,
      {
        types: ['address']
      }
    );

    autocomplete.addListener('place_changed', () => {
      const place: google.maps.places.PlaceResult = autocomplete.getPlace();
      this.selectPlace.emit(place);
    });
  }
}
