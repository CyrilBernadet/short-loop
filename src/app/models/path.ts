import { Route } from './route';
export class Path {
  routes: Route[];
  distance: number;
  duration: number;
  travelMode: google.maps.TravelMode;
}
