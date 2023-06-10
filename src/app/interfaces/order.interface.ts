import { Stock } from "./stock.interface";

export interface Order {
  price: number;
  quantity: number;
  stockId: number;
  personName: string;
  stock?: Stock;
}
