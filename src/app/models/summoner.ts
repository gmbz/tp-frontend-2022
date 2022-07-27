import { Ranked } from './ranked';

export interface Summoner {
  _id?: string;
  summonerId: string;
  summonerName: string;
  summonerLevel: string;
  rankedSolo: Ranked;
  rankedFlex: Ranked;
}
