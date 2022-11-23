import { IUser } from "@domain/types/User";
import { IWashingMachine } from "@domain/types/WashingMachine";
import { useState } from "react";
import { add } from "date-fns";

export type TWashType = "cookWash" | "fabricWash" | "handWash";

const initialState: IWashingMachine[] = [...Array(12).keys()].map((item) => ({
  bookedUntil: null,
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
        if ((item.bookedUntil as Date) <= new Date()) {
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
    setMachines((prev) =>
      prev.map((item) =>
        item?.id === machineID
          ? {
              ...item,
              bookedUntil: add(new Date(), {
                minutes: getWashDurationInMinutes(washType),
              }),
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
    requestMachine,
  };
};

export default useDatabase;
