import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  auctions = [
    {title: 'bike'},
    {title: 'iPhone'},
    {title: 'watch'},
    {title: 'table'},
    {title: 'boat'}
    ];

  ngOnInit(): void {
  }

  onTitleClicked(event: MouseEvent): void {
    this.titleClicked.emit('Title clicked');
  }

}
