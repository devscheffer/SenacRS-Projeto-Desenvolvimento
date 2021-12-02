export interface CombustivelModel {
  date: string;
  price: number;
  gas_type: string;
  volume:number
  km?: string
  observation: string;
  _id: string|null;
}
