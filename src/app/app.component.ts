import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sideNav') sideNav: any;
  isLogin!:boolean;
  constructor(private _authService:AuthService){ }
  ngOnInit(): void {
    this._authService.logInStatus.subscribe(res => {
      this.isLogin = res;
    })
  }
  onLogOut(){
    this._authService.logOut()
  }
  onClick(){
    this.sideNav.open();
  }
}
