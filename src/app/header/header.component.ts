import { Component } from '@angular/core';
import { Response } from '@angular/http'; 

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {

  }

  onSave() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          // console.log(response);
        }
      );
  }

  onFetch() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
  
}
