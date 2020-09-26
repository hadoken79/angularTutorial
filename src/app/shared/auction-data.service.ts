import {Auction} from './auction';
import {AUCTION_DATA} from './auction-data';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuctionDataService {

  private auctions: Auction[] = AUCTION_DATA;
  private URL = 'http://localhost:4730/auctions';

  constructor(private httpClient: HttpClient) {}

  public getAuctions() {
    return this.auctions;
  }

  getObservableAuctions(): Observable<Auction[]> {
    return of(this.auctions);
  }

  public getHttpAuctions(): Observable<Array<Auction>> {
    return this.httpClient.get<Array<Auction>>(this.URL);
  }
}