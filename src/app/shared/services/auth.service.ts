import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logInStatus:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private _auth:AngularFireAuth,
    private _router:Router
    ){ }
  
  createAccount(email:string, password:string):Promise<any> {
    return this._auth.createUserWithEmailAndPassword(email as string, password as string);
  }

  logIn(email:string, password:string):Promise<any>{
   return  this._auth.signInWithEmailAndPassword(email, password)
  }
  logOut(){
    localStorage.removeItem("userRole");
    this.logInStatus.next(false);
    this._router.navigate(['/']);
  }
}
