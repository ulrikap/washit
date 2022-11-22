import { IUser } from "types/User";
import { IWashingMachine } from "types/WashingMachine";
import { useState } from "react";

export type TWashType = "cookWash" | "fabricWash" | "handWash";

const initialState: IWashingMachine[] = [...Array(12).keys()].map((item) => ({
  bookedUntil: 0,
  bookedByUser: null,
  id: item,
}));

const getWashDurationInMinutes = (wash: TWashType): number => {
  switch (wash) {
    case "cookWash":
      return 90;
    case "fabricWash":
      return 60;
    case "handWash":
      return 20;
    default:
      return null as never;
  }
};

const useDatabase = () => {
  const [machines, setMachines] = useState<IWashingMachine[]>(initialState);
  const getAvailableMachines = () => machines.find((item) => !item.bookedUntil);

  const cancelReservation = (id: number) => {
    setMachines((prev) =>
      prev.map((item) =>
        item?.id === id
          ? (initialState.find(
              (localItem) => localItem.id === id
            ) as IWashingMachine)
          : item
      )
    );
  };

  const requestMachine = ({
    user,
    washType,
  }: {
    user: IUser;
    washType: TWashType;
  }): IWashingMachine => {
    const id =
      machines.find((item) => {
        if (item.bookedUntil <= Date.now()) {
          return true;
        }
      })?.id ?? -1;

    if (id !== -1) {
      reserveMachine({ user, washType, machineID: id });
      return machines.find((item) => item.id === id) as IWashingMachine;
    } else {
      alert("No machine available for reservation!");
      throw Error("No machine available for reservation");
    }
  };

  const reserveMachine = ({
    user,
    washType,
    machineID,
  }: {
    user: IUser;
    washType: TWashType;
    machineID: number;
  }) => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + getWashDurationInMinutes(washType));
    setMachines((prev) =>
      prev.map((item) =>
        item?.id === machineID
          ? {
              ...item,
              bookedUntil: date.getTime(),
              bookedByUser: user,
            }
          : item
      )
    );
  };

  return {
    machines,

    cancelReservation,
    reserveMachine,
    getAvailableMachines,
    requestMachine,
  };
};

export default useDatabase;
