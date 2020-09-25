import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AUCTION_DATA } from '../shared/auction-data';
import { Auction } from '../shared/auction';

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.scss']
})
export class AuctionListComponent implements OnInit {

  constructor() { 
    this.titleClicked = new EventEmitter<string>()
  }

  @Input() headerTitle: string;
  @Output() titleClicked: EventEmitter<string>;

  auctions: Auction[] = AUCTION_DATA;

  ngOnInit(): void {
  }

  onTitleClicked(event: MouseEvent): void {
    this.titleClicked.emit('Title clicked');
  }

}
