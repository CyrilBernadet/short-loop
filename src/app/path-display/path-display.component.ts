import { Path } from './../models/path';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slp-path-display',
  templateUrl: './path-display.component.html',
  styleUrls: ['./path-display.component.scss']
})
export class PathDisplayComponent implements OnInit {

  @Input() path: Path;

  constructor() { }

  ngOnInit(): void {
  }

}
