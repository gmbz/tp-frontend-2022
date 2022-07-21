import { SummonerLeague } from './summonerLeague';

export interface Summoner {
  _id?: string;
  summonerName: string;
  summonerLevel: string;
  leagues: SummonerLeague[];
}
