import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrls: ['./simple-header.component.scss']
})
export class SimpleHeaderComponent implements OnInit {

  @Output() emitGoBack: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    this.emitGoBack.emit();
  }

}
