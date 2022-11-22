import useDatabase, { TWashType } from "@application/useDatabase";
import { IUser } from "models/User";
import { IBookingProps } from "./Booking";

const useBooking = (): IBookingProps => {
  const {
    machines,
    users,
    createUser,
    reserveMachine,
    selectedUser,
    setSelectedUser,
    getAvailableMachine,
  } = useDatabase();

  const handleMachineReservationClick = (washType: TWashType) => {
    const availableMachine = getAvailableMachine();

    if (!availableMachine) {
      alert("No available machines!");
    }
  };

  return {
    buttons: [
      {
        onClick: () => handleMachineReservationClick("cookWash"),
        children: "Cookwash",
      },
      {
        onClick: () => handleMachineReservationClick("fabricWash"),
        children: "Fabric wash",
      },
      {
        onClick: () => handleMachineReservationClick("handWash"),
        children: "Handwash",
      },
    ],
    UserSectionProps: {
      createUser,
      items: users.map((item) => ({
        title: item.firstName,
        subtitle: item.lastName,
        subtitle2: item.id,
        onClick: (e) => setSelectedUser(item),
        selected: selectedUser?.id === item?.id,
      })),
    },
    MachineSectionProps: {
      items: machines.map((item) => ({
        title: `Machine #${item?.id}`,
        onClick: (e, value: TWashType) =>
          reserveMachine({
            machineID: item?.id,
            user: selectedUser as IUser,
            washType: value,
          }),
        status: Boolean(item?.bookedUntil) ? "busy" : "available",
        statusExplanation: Boolean(item?.bookedUntil)
          ? `Busy for the next ${item.bookedUntil - Date.now()}`
          : "",
      })),
    },
  };
};

export default useBooking;
