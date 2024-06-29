import React from "react";
import { Menu, MenuItem, Sidebar, sidebarClasses } from "react-pro-sidebar";
import {Img} from "./.."; 

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="86px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed} // Corrected: Use curly braces and equal sign for JSX attribute value
      rootStyles={{ [`.${sidebarClasses.container}`]: { gap: 834 } }}
      className={`${props.className} flex flex-col h-screen pt-[30px] gap-[834px] top-0 lg:gap-[625px] md:gap-[625px] sm:gap-[417px] sm:pt-4 bg-black-900_02 !sticky overflow-auto md:hidden`}
    >
      <img
        src="images/img_megaphone.svg"
        alt="megaphone image"
        className="h-[32px] w-[32px]"
      />
      <Menu
        menuItemStyles={{
          button: { padding: "", margin: "" },
        }}
        className="mb-1 w-full self-stretch"
      >
        <MenuItem
          icon={
            <Img
              src="images/img_search.svg"
              alt="search icon"
              className="h-[32px] w-[32px]"
            />
          }
        />
      </Menu>
    </Sidebar>
  );
}
