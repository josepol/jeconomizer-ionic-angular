import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';
import { CONSTANT } from '../../utils/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  public isSearchBarVisible: boolean;

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  navigateProfile() {
    this.navigationService.navigate(CONSTANT.NAV.PROFILE);
  }

  displaySearchBar(visible) {
    this.isSearchBarVisible = visible;
  }

}
