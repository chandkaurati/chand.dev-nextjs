import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center">
      <div>
        Chand Kaurati
      </div>
      <div className="w-1/3 rounded-md border hidden md:flex justify-between py-2 px-8 bg-transparent ">
         <p>About</p>
         <p>Contact me</p>
         <p>Discord</p>
      </div>
      <div className="w-1/3 md:hidden">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      </div>
    </div>
  );
}

export default Navbar;
