import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title: String = 'app works!';
  auctionListTitle = 'this is an auction list (from variable)';


  public onAuctionListTitleClicked(event: any): void {
    console.log(event);
  }
}