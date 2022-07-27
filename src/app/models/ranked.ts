import { Summoner } from './summoner';

export interface Ranked {
  queueType: string;
  tier: string;
  tierName: string;
  rank: string;
  wins: string;
  losses: string;
  leaguePoints: number;
  summoner: Summoner;
}
