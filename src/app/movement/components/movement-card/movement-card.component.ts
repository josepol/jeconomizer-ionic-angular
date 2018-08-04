import { Component, OnInit, Input } from '@angular/core';
import { MovementModel } from '../../models/movement.model';

@Component({
  selector: 'app-movement-card',
  templateUrl: './movement-card.component.html',
  styleUrls: ['./movement-card.component.scss']
})
export class MovementCardComponent implements OnInit {

  @Input() movement: MovementModel;

  constructor() { }

  ngOnInit() {
  }

}
