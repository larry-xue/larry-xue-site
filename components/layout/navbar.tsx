"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "../ThemeSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <div className="w-screen h-auto fixed top-4 flex justify-center items-center light-green z-50">
      <Tabs aria-label="menu" selectedKey={pathname} defaultSelectedKey="/" color="default" radius="full">
        <Tab key="/" href="/" title="Home" />
        <Tab key="/blog" href="/blog" title="Blog" />
        <Tab key="/contact" href="/contact" title="Contact" />
        <Tab key="theme" className="p-0" title={<ThemeSwitcher />} onClick={() => window.location.reload()} />
      </Tabs>
    </div>
  );
}
