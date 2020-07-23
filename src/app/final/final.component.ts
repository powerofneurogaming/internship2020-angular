import { Component, OnInit } from '@angular/core';

import { teams } from 'src/app/teams';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  teams = teams;

  constructor() { }

  ngOnInit(): void {
  }

}
