import { IUser } from "types/User";
import { useState } from "react";

const useWaitlist = () => {
  const [waitList, setWaitList] = useState<IUser[]>([]);

  const addToWaitlist = (user: IUser) => setWaitList((prev) => [...prev, user]);
  const getNextUserFromWaitlist = () => {
    const user = waitList[0];
    setWaitList((prev) => prev.filter((item) => item.id !== user.id));
    return user;
  };

  return {
    waitList,

    addToWaitlist,
    getNextUserFromWaitlist,
  };
};

export default useWaitlist;
