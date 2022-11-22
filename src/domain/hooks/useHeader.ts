import { IHeaderProps } from "@view/compositions/Header";
import logo from "@assets/logo.png";

const useHeader = (): IHeaderProps => {
  return {
    HeadlineProps: {
      title: "WashIT",
      logo,
    },
    MenuItemsProps: {
      items: [
        { to: "/overview", children: "Overview" },
        { to: "/booking", children: "Booking" },
      ],
    },
  };
};

export default useHeader;
