import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../interfaces/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private apiUrl = 'https://localhost:7194/api/stocks';

  constructor(private httpClient: HttpClient) {
  }

  getStocks(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(this.apiUrl);
  }
}
