import { Component, OnInit } from '@angular/core';
import { CONSTANT } from '../shared/utils/constants';
import { NavigationService } from '../shared/services/navigation/navigation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  onEmitGoBack() {
    this.navigationService.navigate(CONSTANT.NAV.MOVEMENT);
  }

}
