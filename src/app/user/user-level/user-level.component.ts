import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-level',
  templateUrl: './user-level.component.html',
  styleUrls: ['./user-level.component.css']
})
export class UserLevelComponent implements OnInit {

  @Input()
  level = 0;

  stars: boolean[];

  constructor() {
  }

  ngOnInit() {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars[i] = i < this.level;
    }
  }

}
