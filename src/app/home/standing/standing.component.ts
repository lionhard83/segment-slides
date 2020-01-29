import { Component, OnInit } from '@angular/core';
import { GroupResult, ResultService } from 'src/app/result.service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss'],
})
export class StandingComponent implements OnInit {

  
  public groups: GroupResult[] = [];
  constructor(public resultService: ResultService) { }

  async ngOnInit() {
    this.groups = await this.resultService.groups();
    console.log('this.groups:', this.groups);
  }

}
