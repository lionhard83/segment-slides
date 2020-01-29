import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Weather {
        humidity: string;
        temp_celsius: string;
        temp_farenheit: string;
        wind_speed: string;
        description: string;
}

export interface Team {
    country: string;
    code: string;
    goals: number;
    penalties: number;
}

export interface TeamEvent {
    id: number;
    type_of_event: string;
    player: string;
    time: string;
}

export interface StartingEleven {
    name: string;
    captain: boolean;
    shirt_number: number;
    position: string;
}

export interface Substitute {
    name: string;
    captain: boolean;
    shirt_number: number;
    position: string;
}

export interface TeamStatistics {
    country: string;
    attempts_on_goal: number;
    on_target: number;
    off_target: number;
    blocked: number;
    corners: number;
    offsides: number;
    ball_possession: number;
    pass_accuracy: number;
    num_passes: number;
    passes_completed: number;
    distance_covered: number;
    tackles: number;
    clearances: number;
    yellow_cards: number;
    red_cards: number;
    fouls_committed: number;
    tactics: string;
    starting_eleven: StartingEleven[];
    substitutes: Substitute[];
}

export interface Match {
    venue: string;
    location: string;
    status: string;
    time: string;
    fifa_id: string;
    weather: Weather;
    attendance: string;
    officials: string[];
    stage_name: string;
    home_team_country: string;
    away_team_country: string;
    datetime: Date;
    winner: string;
    winner_code: string;
    home_team: Team;
    away_team: Team;
    home_team_events: TeamEvent[];
    away_team_events: TeamEvent[];
    home_team_statistics: TeamStatistics;
    away_team_statistics: TeamStatistics;
    last_event_update_at: Date;
    last_score_update_at: Date;
}

export interface OrderedTeam {
  id: number;
  country: string;
  alternate_name?: any;
  fifa_code: string;
  group_id: number;
  group_letter: string;
  wins: number;
  draws: number;
  losses: number;
  games_played: number;
  points: number;
  goals_for: number;
  goals_against: number;
  goal_differential: number;
}

export interface GroupResult {
  id: number;
  letter: string;
  ordered_teams: OrderedTeam[];
}

export interface TeamRoot {
  id: number;
  country: string;
  alternate_name?: any;
  fifa_code: string;
  group_id: number;
  group_letter: string;
}




@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(public httpClient: HttpClient) {}
  public api: string = 'https://worldcup.sfg.io';

  public matches(): Promise<Match[]> {
    return this.httpClient.get<Match[]>(`${this.api}/matches`).toPromise();
  }

  public groups(): Promise<GroupResult[]> {
    return this.httpClient.get<GroupResult[]>(`${this.api}/teams/group_results`).toPromise();
  }

  public teams(): Promise<TeamRoot[]> {
    return this.httpClient.get<TeamRoot[]>(`${this.api}/teams`).toPromise();
  }

}

