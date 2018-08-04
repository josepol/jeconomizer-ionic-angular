import { Component, OnInit, Input } from '@angular/core';
import { MovementModel } from '../../models/movement.model';

@Component({
  selector: 'app-movements-list',
  templateUrl: './movements-list.component.html',
  styleUrls: ['./movements-list.component.scss']
})
export class MovementsListComponent implements OnInit {

  @Input() movements: Array<MovementModel>;

  constructor() { }

  ngOnInit() {
  }

}
