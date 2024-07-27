"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../theme-switcher";

export default function Navbar() {
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <div className="w-screen h-auto fixed top-4 flex justify-center items-center light-green z-50">
      <Tabs aria-label="menu" selectedKey={pathname} defaultSelectedKey="/" color="default" radius="full">
        <Tab key="/" href="/" title="Home" />
        <Tab key="/blog" href="/blog" title="Blog" />
        <Tab key="/contact" href="/contact" title="Contact" />
        <Tab key="resume" href="https://drive.google.com/file/d/1Dl-s1_Aq4bRQ5QT-fvuLHe1Eo9KXiiPW/view" target="_blank" title="Resume" />
        <Tab key="theme" className="p-0" title={<ThemeSwitcher />} onClick={() => window.location.reload()} />
      </Tabs>
    </div>
  );
}
