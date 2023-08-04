import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    if (!localStorage.getItem("token")) {
      this.router.navigate(['/signin'], {queryParams: {redirectUrl: url}, replaceUrl: true});
      return false;
    }
    return true;
  }
}

