import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../models/stock.model';

@Injectable({
    providedIn: 'root'
})
export class StockService {
    private apiUrl = 'https://localhost:7219/api/stocks';

    constructor(private httpClient: HttpClient) {
    }

    getStocks(): Observable<Stock[]> {
        debugger;
        return this.httpClient.get<Stock[]>(this.apiUrl);
    }
}