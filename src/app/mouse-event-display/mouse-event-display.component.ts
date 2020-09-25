import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-event-display',
  templateUrl: './mouse-event-display.component.html',
  styleUrls: ['./mouse-event-display.component.scss']
})
export class MouseEventDisplayComponent implements OnInit {

  constructor() { }

  public event: MouseEvent;
  public clientX: number = 0;
  public clientY: number = 0;

  ngOnInit(): void {

  }

  public onEvent(event: MouseEvent): void {
    this.event = event;
  }

  public coordinates(event: MouseEvent): void {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
  }

}
