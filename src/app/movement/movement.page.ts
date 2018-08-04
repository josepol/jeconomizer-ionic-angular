import { Component, OnInit } from '@angular/core';
import { MovementService } from './services/movement/movement.service';
import { MovementModel } from './models/movement.model';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.page.html',
  styleUrls: ['./movement.page.scss'],
})
export class MovementPage implements OnInit {

  public movements: Array<MovementModel>;

  constructor(
    private movementService: MovementService
  ) { }

  ngOnInit() {
    this.getMovements();
  }

  private getMovements() {
    this.movementService.getMovements().subscribe(movements => this.movements = movements);
  }

}