import { Summoner } from './summoner';
import { User } from './user';

export interface Tournament {
  _id?: string;
  nombre: string;
  privado: string;
  premio: string;
  cupo: number;
  fechaInicio: Date;
  fechaFin: Date;
  autor?: User;
  participantes?: Summoner[];
}
