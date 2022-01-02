import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {environment} from '../../../environments/environment';
import {User} from 'firebase';
import {auth} from 'firebase/app';
import {HttpErrorResponse} from '@angular/common/http';
import UserCredential = firebase.auth.UserCredential;
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get user(): User {
    return this._user;
  }

  // Angular Fire User
  private _user: User;

  constructor(private _angularFirestore: AngularFirestore,
              private _router: Router,
              private _angularFireAuth: AngularFireAuth) {

    this._angularFireAuth.authState.pipe(first()).subscribe((user) => {
      if (user) {
        this._user = user;
        this.setUser(JSON.stringify(this._user));
        this._router.navigateByUrl('').then();
      } else {
        this.setUser(null);
      }
    });

  }

  public loginWithGoogle(): void {
    this._angularFireAuth.signInWithPopup(new auth.GoogleAuthProvider()).then((data: UserCredential) => {
      if (data.user) {
        this._user = data.user;
        this.setUser(JSON.stringify(this._user));
        this._router.navigateByUrl('').then();
      } else {
        this.setUser(null);
      }
    }).catch((err: HttpErrorResponse) => {
      console.error(err);
    });
  }

  public setUser(value: string | null) {
    localStorage.setItem(environment.userKey, value);
  }

  public authUser(): User {
    return this._user;
  }

  public logout(): void {
    this._angularFireAuth.signOut().then(() => {
      localStorage.removeItem(environment.userKey);
      this._router.navigateByUrl('/login').then();
    })
  }

}
