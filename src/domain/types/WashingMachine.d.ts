import type { IUser } from "./User";

export interface IWashingMachine {
  bookedByUser: IUser | null;
  bookedUntil: Date | null;
  id: number;
}
