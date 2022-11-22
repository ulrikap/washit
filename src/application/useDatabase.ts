import { IUser } from "models/User";
import { IWashingMachine } from "models/WashingMachine";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type TWashType = "cookWash" | "fabricWash" | "handWash";

const firstNames = [
  "Jonas",
  "Bob",
  "Berit",
  "Anne",
  "Hanna",
  "Ulrik",
  "Rudolf",
];

const lastNames = [
  "Blodstrupmoen",
  "Løken",
  "Gyldepris",
  "Gulmedal",
  "Felgen",
  "Haraldsson",
  "Etternavnsen",
];

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
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [machines, setMachines] = useState<IWashingMachine[]>(initialState);
  const [waitList, setWaitList] = useState<IUser[]>([]);

  const createUser = (): IUser => {
    const user: IUser = {
      firstName:
        firstNames[Math.floor(Math.random() * (firstNames.length - 1) + 1)],
      lastName:
        lastNames[Math.floor(Math.random() * (lastNames.length - 1) + 1)],
      id: uuidv4(),
    };

    setUsers((prev) => [...prev, user]);
    return user;
  };

  const getAvailableMachine = () => machines.find((item) => !item.bookedUntil);

  const requestMachine = (washType: TWashType): number =>
    machines.find((item) => {
      if (item.bookedUntil <= Date.now()) {
        return true;
      }
    })?.id ?? -1;

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

  const addToWaitlist = (user: IUser) => setWaitList((prev) => [...prev, user]);
  const getNextUserFromWaitlist = () => {
    const user = waitList[0];
    setWaitList((prev) => prev.filter((item) => item.id !== user.id));
    return user;
  };

  return {
    machines,
    users,
    selectedUser,
    waitList,

    reserveMachine,
    createUser,
    setSelectedUser,
    getAvailableMachine,
    requestMachine,
    addToWaitlist,
    getNextUserFromWaitlist,
  };
};

export default useDatabase;
