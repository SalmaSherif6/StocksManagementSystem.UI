import { Component, OnInit } from '@angular/core';
import { StockService } from '../services/stock.service';
import { Stock } from '../interfaces/stock.interface';
import { JobEventType, SignalRSubscriberService } from '../services/signalr-subscriber.service';

@Component({
  selector: 'app-market-screen',
  templateUrl: './market-screen.component.html',
  styleUrls: ['./market-screen.component.scss']
})
export class MarketScreenComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService, private signalrService: SignalRSubscriberService) { }

  ngOnInit() {
    this.getStocks();

    this.signalrService.signalREvent.subscribe(signalrEventResult => {
      if (signalrEventResult.type == JobEventType.PricesUpdate) {
        this.getStocks();
      }
    });

    setInterval(() => {
      this.stockService.updateStockPrices().subscribe();
    }, 10000);
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
