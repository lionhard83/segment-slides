import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { FixturesComponent } from './fixtures/fixtures.component';
import { StandingComponent } from './standing/standing.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, FixturesComponent, StandingComponent, TeamsComponent]
})
export class HomePageModule {}
