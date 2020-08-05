import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { teams } from 'src/app/teams';

export interface TeamDetailData {
  teamdata: any
}

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  teams = teams;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(t) {
    this.dialog.open(TeamDetailsDialog, {
      data: {
        teamdata: t
      }
    });
  }

}

@Component({
  selector: 'team-details-dialog',
  templateUrl: 'team-details-dialog.html',
  styleUrls: ['./final.component.scss']
})
export class TeamDetailsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: TeamDetailData) {}
}
