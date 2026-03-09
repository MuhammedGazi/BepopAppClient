import { UserModel } from "./userModel";

export class PackageModel {
  id:number;
  name:string;
  maxAccessLevel:number;
  users:UserModel[];
}
