import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore} from '@angular/fire/compat/firestore'
import { Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  alreadyHaveAccount:boolean = true;
  constructor(
    private _authService:AuthService,
    private _firestore:AngularFirestore,
    private _router:Router,
    private _snackBar:SnackbarService) { }

  ngOnInit(): void {
    let userrole = localStorage.getItem('userRole')!;
    if(userrole){
      if(userrole.includes('teacher')){
        this._router.navigate(['/teachersDashboard'])
      }
      if(userrole.includes('students')){
        this._router.navigate(['/studentsDashboard'])
      }
    }
  }
  onLogin(loginForm:NgForm){
    if(loginForm.valid){
    // console.log(loginForm.value);
    let {email, password} = loginForm.value;
    this._authService.logIn(email, password)
    .then(res=>{
      console.log(res);
      this._authService.logInStatus.next(true);
      const uid = res.user?.uid;
      this._firestore.collection('users').doc(uid).get()
      .subscribe((userDocs:any)=>{
        // console.log(userDocs.data());
        const userRole:any = userDocs.data();
        localStorage.setItem("userRole", userRole.role);
        if(userRole.role.includes('teacher')){
          this._router.navigate(['/teachersDashboard'])
        }
        if(userRole.role.includes('students')){
          this._router.navigate(['/studentsDashboard'])
        }
      })
    })
    .catch(error => {
      let msg:string = error.code.slice(5)
      this._snackBar.openSnackBar(msg);
      loginForm.reset();
    })

    }
  }
  onSignUp(signUpForm:NgForm){
    if(signUpForm.valid){
      // console.log(signUpForm.value);
      let {email, password,userrole} = signUpForm.value;
      this._authService.createAccount(email,password)
      .then((res)=>{
        console.log(res);
        const uid = res.user?.uid;
        this._firestore.collection('users').doc(uid).set({role:userrole});
      })
      .catch((error)=>{
        // console.log(err);
        let msg:string = error.code.slice(5)
        this._snackBar.openSnackBar(msg)
      })
    }
    signUpForm.reset();
  }
}
