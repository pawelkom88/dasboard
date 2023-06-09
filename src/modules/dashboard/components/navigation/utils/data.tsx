import { DashboardLink, User } from "./types";

export const DashboardLinks: DashboardLink[] = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 h-5 fill-current dark:text-gray-400">
        <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
      </svg>
    ),
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 h-5 fill-current dark:text-gray-400">
        <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
      </svg>
    ),
    name: "Wishlist",
    link: "wishlist",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-5 h-5 fill-current dark:text-gray-400">
        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
        <rect width="32" height="64" x="256" y="232"></rect>
      </svg>
    ),
    name: "Logout",
    link: "/",
  },
];

export const user: User = {
  name: "Marek",
  img: "https://source.unsplash.com/100x100/?portrait",
};
