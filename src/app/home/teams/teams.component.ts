import { Component, OnInit } from '@angular/core';
import { ResultService, TeamRoot } from 'src/app/result.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {

  public teams: TeamRoot[] = [];
  constructor(public resultService: ResultService) { 
    console.log('TeamsComponent!');
  }

  async ngOnInit() {
    this.teams = await this.resultService.teams();
    console.log('this.teams:', this.teams);
  }

}
