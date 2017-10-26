import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.css']
})
export class HeadlineComponent implements OnInit {
  name = 'Melissa Patterson';

  constructor() { }

  ngOnInit() {
  }

}
