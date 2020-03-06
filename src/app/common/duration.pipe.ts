import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let duration: number = +value;

    var h = Math.floor(duration / 3600);
    var m = Math.floor((duration % 3600) / 60);
    var s = Math.floor((duration % 3600) % 60);

    var hDisplay = h > 0 ? h + ' h' : '';
    var mDisplay = m > 0 ? m + ' m' : '';
    var sDisplay = s > 0 ? s + ' s' : '';

    return `${hDisplay} ${mDisplay} ${sDisplay}`;
  }
}
