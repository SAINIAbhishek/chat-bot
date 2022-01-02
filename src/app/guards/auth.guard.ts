import {Injectable, OnDestroy} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of, Subject} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {catchError, map, takeUntil, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {

  private _ngUnsubscribe: Subject<any> = new Subject<any>();

  constructor(private _router: Router,
              private _angularFireAuth: AngularFireAuth) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this._angularFireAuth.authState.pipe(
      takeUntil(this._ngUnsubscribe),
      map(user => user !== null),
      tap((value) => {
        if (!value) {
          this._router.navigateByUrl('/login').then();
          return value;
        } else {
          return value;
        }
      }), catchError((err: HttpErrorResponse) => {
        console.error(err);
        this._router.navigateByUrl('/login').then();
        return of(null);
      }));
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

}
