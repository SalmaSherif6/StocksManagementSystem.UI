import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Stock } from '../models/stock.model';

@Component({
  selector: 'app-market-screen',
  templateUrl: './market-screen.component.html',
  styleUrls: ['./market-screen.component.scss']
})
export class MarketScreenComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.getStocks();
  }

  getStocks() {
    this.stockService.getStocks().subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
