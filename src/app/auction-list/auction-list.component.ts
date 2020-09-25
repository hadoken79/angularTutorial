import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AUCTION_DATA } from '../shared/auction-data';
import { Auction } from '../shared/auction';
import { AuctionDataService } from '../shared/auction-data.service';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})

export class AuctionListComponent implements OnInit {

  constructor(private auctionDataService: AuctionDataService) {
    this.auctions = auctionDataService.getAuctions();
  }

  @Input() headerTitle: string;
  @Output() titleClicked = new EventEmitter<string>();

  auctions: Auction[];

  ngOnInit(): void {
  }

  onTitleClicked(event: MouseEvent): void {
    this.titleClicked.emit('Title clicked');
  }

}
