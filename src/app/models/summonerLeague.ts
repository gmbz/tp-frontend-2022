import { League } from './league';
import { Summoner } from './summoner';

export interface SummonerLeague {
  queueType: string;
  rank: string;
  wins: string;
  losses: string;
  leaguePoints: number;
  summoner: Summoner;
  league: League;
}
