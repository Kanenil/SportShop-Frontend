import {Component, HostListener, OnInit} from '@angular/core';
import {CartService} from "../../../../services/cart.service";
import {IUser} from "../../../../models/user/user.model";
import {UserService} from "../../../../services/user.service";
import {EventBusService} from "../../../../shared/event-bus.service";
import {AuthService} from "../../../../services/auth.service";
import {EventData} from "../../../../shared/event.class";
import {IUserRole} from "../../../../models/user/user-role.model";
import {Roles} from "../../../../models/user/roles";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html'
})
export class DefaultHeaderComponent implements OnInit {

  private header: HTMLElement | null = null;

  public loginedUser!: IUser | null
  public roles!: IUserRole[] | null

  constructor(
    public cartService: CartService,
    private userService: UserService,
    private authService: AuthService,
    private eventBusService: EventBusService,
  ) {}

  ngOnInit(): void {
    this.loadUser();

    this.eventBusService.on("authorize", () => {
      this.loadUser();
    });

    this.header = document.querySelector('header');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // @ts-ignore
    if (window.pageYOffset > this.header?.offsetTop) {
      this.header?.classList.add("sticky");
    } else {
      this.header?.classList.remove("sticky");
    }
  }

  private loadUser() {
    if(localStorage.getItem("token")) {
      this.userService.getUser().subscribe(user=>{
        this.loginedUser = user;
      })
      this.userService.getRoles().subscribe(resp=>{
        this.roles = resp
      })
    }
    else
      this.loginedUser = null;
  }

  public isAdmin() {
    return this.roles?.find(r => r.name === Roles.ADMIN) != undefined
  }

  public logout() {
    this.authService.logout().subscribe(()=>{
      localStorage.removeItem("token")
      this.eventBusService.emit(new EventData("authorize", null))
    }, error => {
      if (error.status == 200) {
        localStorage.removeItem("token")
        this.eventBusService.emit(new EventData("authorize", null))
      }
    })
  }

}
