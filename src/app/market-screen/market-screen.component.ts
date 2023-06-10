import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Stock } from '../interfaces/stock.interface';

@Component({
  selector: 'app-market-screen',
  templateUrl: './market-screen.component.html',
  styleUrls: ['./market-screen.component.scss']
})
export class MarketScreenComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.getStocks();
  }

  getStocks() {
    this.stockService.getStocks().subscribe(
      stocks => {
        this.stocks = stocks;
      },
      error => {
        console.log("Error in getStocks()", error);
      });
  }
}
