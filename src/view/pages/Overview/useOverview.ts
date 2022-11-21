import { IOverviewProps } from "./Overview";

const useOverview = (): IOverviewProps => {
  return {
    HeaderProps: {
      HeadlineProps: {
        title: "WashIT",
      },
      MenuItemsProps: {
        items: [
          { to: "/", children: "Overview" },
          { to: "/", children: "Booking" },
        ],
      },
    },
  };
};

export default useOverview;
