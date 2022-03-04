import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-crossroad',
  templateUrl: './crossroad.component.html',
  styleUrls: ['./crossroad.component.scss'],
})
export class CrossroadComponent implements OnInit {

  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor() { }

  ngOnInit() {
  }
}
