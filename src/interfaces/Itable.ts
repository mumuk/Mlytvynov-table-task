import {IPerson} from "./IPerson.ts";


export interface ITable {
  count: number;
  next: string;
  previous: string;
  results: Array<IPerson>;
}

