import type { IUser } from "./User";

export interface IWashingMachine {
  bookedByUser: IUser | null;
  bookedUntil: number;
  id: number;
}
