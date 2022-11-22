import { IUser } from "types/User";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

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

  return {
    users,
    selectedUser,
    createUser,
    setSelectedUser,
  };
};

export default useUsers;
