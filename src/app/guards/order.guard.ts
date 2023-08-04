import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CartService} from "../services/cart.service";

@Injectable({
  providedIn: 'root'
})
export class OrderGuard {
  constructor(
    private router: Router,
    private cartService: CartService
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.cartService.getItemCount() == 0) {
      this.router.navigate(['/products'], {replaceUrl: true});
      return false;
    }
    return true
  }
}
