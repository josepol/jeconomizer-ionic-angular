import { Component, OnInit } from '@angular/core';
import { MovementService } from './services/movement/movement.service';
import { MovementModel } from './models/movement.model';
import { NavigationService } from '../shared/services/navigation/navigation.service';
import { CONSTANT } from '../shared/utils/constants';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.page.html',
  styleUrls: ['./movement.page.scss'],
})
export class MovementPage implements OnInit {

  public title: string = 'Movement';
  public movements: Array<MovementModel>;

  constructor(
    private movementService: MovementService,
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
    this.getMovements();
  }

  private getMovements() {
    this.movementService.getMovements().subscribe(movements => this.movements = movements);
  }

  onFloatingButtonClicked() {
    this.navigationService.navigate(CONSTANT.NAV.ADD_MOVEMENT);
  }

}
