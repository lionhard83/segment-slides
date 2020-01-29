import { Component, OnInit } from '@angular/core';
import { Match, ResultService } from 'src/app/result.service';

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.scss'],
})
export class FixturesComponent implements OnInit {

  public matches: Match[] = [];
  constructor(public resultService: ResultService) { }

  async ngOnInit() {
    this.matches = await this.resultService.matches();
    console.log('this.matches:', this.matches);
  }

}
