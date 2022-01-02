import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {User} from 'firebase';
import {auth} from 'firebase/app';
import {HttpErrorResponse} from '@angular/common/http';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  get user(): User {
    return this._user;
  }

  // 1. Authentication
  // 2. Storing the route param value, room/:id -> id value

  pathParamState: BehaviorSubject<string> = new BehaviorSubject<string>('');

  pathParam: Observable<string>;

  // Angular Fire User
  private _user: User;

  constructor(private _angularFirestore: AngularFirestore,
              private _router: Router,
              private _angularFireAuth: AngularFireAuth) {
    this.pathParam = this.pathParamState.asObservable();

    this._angularFireAuth.authState.subscribe((user) => {
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

  public logout(): void {
    this._angularFireAuth.signOut().then(() => {
      localStorage.removeItem(environment.userKey);
      this._router.navigateByUrl('/login').then();
    })
  }

  public setUser(value: string | null) {
    localStorage.setItem(environment.userKey, value);
  }

  public getUser(): User {
    return this._user;
  }

  public updatePathParamState(newPathParam: string): void {
    this.pathParamState.next(newPathParam);
  }


}
