import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../../shared/services/navigation/navigation.service';
import { CONSTANT } from '../../../shared/utils/constants';

@Component({
  selector: 'app-create-movement',
  templateUrl: './create-movement.component.html',
  styleUrls: ['./create-movement.component.scss']
})
export class CreateMovementComponent implements OnInit {

  x: string;

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  onEmitGoBack() {
    this.navigationService.navigate(CONSTANT.NAV.MOVEMENT);
  }

}
