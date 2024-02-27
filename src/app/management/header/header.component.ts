import {Component, Input} from '@angular/core';
import {userItems} from "./header-data-choise";
import {LocalStorageService} from "../../services/storage/local-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

   profile = this.localStorageService.getLastName();
  constructor(private localStorageService :LocalStorageService) {
  }
  userItems =userItems;
  userName :string ="EL Miraouy ";
  getHeadClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }
}
