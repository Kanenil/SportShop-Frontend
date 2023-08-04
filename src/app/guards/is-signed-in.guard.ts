import {CanActivateFn, Router} from '@angular/router';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class IsSignedInGuard {
  constructor(
    private router: Router
  ) { }
  canActivate(): boolean {
    if (localStorage.getItem("token")) {
      this.router.navigate(['/'],{ replaceUrl: true });
      return false;
    }
    return true;
  }
}
