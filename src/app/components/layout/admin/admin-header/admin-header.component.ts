import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {IUser} from "../../../../models/user/user.model";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html'
})
export class AdminHeaderComponent implements OnInit {
  public user!:IUser

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe(resp =>{
      this.user = resp
    })
  }

}
