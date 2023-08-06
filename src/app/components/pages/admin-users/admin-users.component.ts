import {Component, OnInit} from '@angular/core';
import {IUserRole} from "../../../models/user/user-role.model";
import {IUserAdmin} from "../../../models/user/user-admin.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html'
})
export class AdminUsersComponent implements OnInit {
  public users: IUserAdmin[] = []
  public roles: IUserRole[] = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadList()
    this.userService.getAllRoles().subscribe(resp=>{
      this.roles = resp
    })
  }

  onChangeRole(user: IUserAdmin, e: any) {
    const newRoles = [this.roles.find(r=>r.name == e.target.value.toUpperCase()) || this.roles[0]]
    this.userService.putUserRoles(user, newRoles).subscribe(resp=>{
      this.loadList()
    })
  }

  private loadList() {
    this.userService.getAllUsers().subscribe(resp=>{
      this.users = resp
    })
  }

}
