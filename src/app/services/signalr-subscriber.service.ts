import { Inject, Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { Subject } from 'rxjs';

export class JobEventResult {
  constructor(public type: JobEventType) { }
}

export enum JobEventType {
  PricesUpdate = 1,
}

@Injectable({
  providedIn: 'root',
})
export class SignalRSubscriberService {
  private _connection: HubConnection;
  private apiUrl = 'https://localhost:7194/notification';

  public signalREvent: Subject<JobEventResult> = new Subject<JobEventResult>();

  constructor() {
    this.subscribeToEvent();
  }

  subscribeToEvent(): void {
    this.startListeningToLiveChanges(this.apiUrl);

    this.on('PricesUpdate',
      () => {
        this.signalREvent.next(new JobEventResult(JobEventType.PricesUpdate));
      });
  }

  public startListeningToLiveChanges(url: string): void {
    this._connection = new HubConnectionBuilder()
      .withUrl(url)
      .build();

    this._connection.onclose(error => {
      setTimeout(() => {
        if (error && this._connection) {
          debugger;
          this.startConnectionInternal();
        }
      }, 5000);
    });
    debugger;
    this.startConnectionInternal();
  }

  public on(methodName: string, callback: (...args: any[]) => void): void {
    this._connection.on(methodName, callback);
  }

  public stopListening(): void {
    if (this._connection) {
      this._connection.stop();
      this._connection = null as any;
    }
  }

  private startConnectionInternal(): void {
    // start
    this._connection.start()
      .catch(err => {
        debugger;
        console.log(err);
      }
      );
  }
}
