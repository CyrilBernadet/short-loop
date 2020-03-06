import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Path } from '../models/path';
import { Route } from '../models/route';

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
  @Output() pathsCompute: EventEmitter<Path> = new EventEmitter();

  isComputing = false;

  travelModes = [
    {
      mode: google.maps.TravelMode.DRIVING,
      icon: 'directions_car'
    },
    {
      mode: google.maps.TravelMode.BICYCLING,
      icon: 'directions_bike'
    },
    {
      mode: google.maps.TravelMode.WALKING,
      icon: 'directions_walk'
    }
  ];
  travelMode: google.maps.TravelMode = google.maps.TravelMode.DRIVING;

  constructor() {}

  ngOnInit(): void {}

  removeStart() {
    this.removeStartPlace.emit();
  }

  removePlaceFromList(place: google.maps.places.PlaceResult) {
    this.removePlace.emit(place);
  }

  compute() {
    this.isComputing = true;
    const distanceMatrixService = new google.maps.DistanceMatrixService();
    const listPlaces = [this.start, ...this.places];

    distanceMatrixService.getDistanceMatrix(
      {
        origins: listPlaces.map(place => place.geometry.location),
        destinations: listPlaces.map(place => place.geometry.location),
        travelMode: google.maps.TravelMode.DRIVING
      },
      distanceMatrix => {
        const routes = [];

        distanceMatrix.rows.forEach((result, resultIndex) => {
          result.elements.forEach((route, routeIndex) => {
            // We won't use routes from one place to itself
            if (resultIndex !== routeIndex) {
              routes.push({
                origin: listPlaces[resultIndex],
                destination: listPlaces[routeIndex],
                distance: route.distance,
                duration: route.duration
              });
            }
          });
        });

        const paths: Path[] = this._findPaths(routes);
        paths.sort((a, b) =>
          a.duration === b.duration ? 0 : a.duration < b.duration ? -1 : 1
        );

        this.pathsCompute.emit(paths[0]);
        this.isComputing = false;
      }
    );
  }

  setTravelMode(travelMode: google.maps.TravelMode) {
    this.travelMode = travelMode;
  }

  private _findPaths(routes: Route[]): Path[] {
    const permutations = this._perm(this.places).map(permutation => [
      this.start,
      ...permutation,
      this.start
    ]);

    const paths = [];

    permutations.forEach(permutation => {
      const path = [];
      for (let i = 0; i < permutation.length - 1; i++) {
        path.push(
          routes.filter(
            (route: Route) =>
              route.origin === permutation[i] &&
              route.destination === permutation[i + 1]
          )[0]
        );
      }

      paths.push({
        routes: path,
        duration: path.reduce((acc, cur) => acc + cur.duration.value, 0),
        distance: path.reduce((acc, cur) => acc + cur.distance.value, 0),
        travelMode: this.travelMode
      });
    });

    return paths;
  }

  private _perm(xs) {
    const ret = [];

    for (let i = 0; i < xs.length; i++) {
      const rest = this._perm(xs.slice(0, i).concat(xs.slice(i + 1)));

      if (!rest.length) {
        ret.push([xs[i]]);
      } else {
        rest.forEach(item => {
          ret.push([xs[i]].concat(item));
        });
      }
    }
    return ret;
  }
}
