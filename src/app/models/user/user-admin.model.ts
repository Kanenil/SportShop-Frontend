import {IUser} from "./user.model";
import {IUserRole} from "./user-role.model";

export interface IUserAdmin extends IUser {
  roles: IUserRole[],
}
