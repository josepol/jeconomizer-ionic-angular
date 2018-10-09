import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss']
})
export class FloatingButtonComponent implements OnInit {

  @Output() emitExecuted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  execute() {
    this.emitExecuted.emit();
  }

}
