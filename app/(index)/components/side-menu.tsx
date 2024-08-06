import { useEffect, useState } from "react";

const menus = [
  { label: "About", anchor: "" },
  { label: "Experience", anchor: "experience" },
  { label: "Education", anchor: "education" },
  { label: "Side Projects", anchor: "side-projects" },
]

export default function SideMenu() {
  const [currentMenu, setCurrentMenu] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const distanceArr = menus.map((menu) => {
        const offsetTop = document.getElementById(menu.anchor)?.offsetTop || 0;
        if (!offsetTop) return scrollY;

        const distance = Math.abs(scrollY - offsetTop)
        return distance
      })

      const menuInScope = distanceArr.find((distance) => distance < 110)
      if (!menuInScope) {
        // find min
        setCurrentMenu(menus[distanceArr.indexOf(Math.min(...distanceArr))].anchor)
        return
      } else {
        setCurrentMenu(menus[distanceArr.indexOf(menuInScope)].anchor)
      }

    }
    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const handleScrollTo = (anchor: string) => () => {
    const element = document.getElementById(anchor);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  return <div className="fixed left-0 sidemenu:left-4 top-1/3 flex-col gap-2 font-mono text-lg items-end text-gray-500 w-[200px] z-10 hidden sidemenu:flex">
    {menus.map((menu) => (
      <span
        key={menu.label}
        className={`hover:text-shadow-3 cursor-pointer hover:text-primary hover:font-bold transition-all duration-300 hover:scale-150 ${currentMenu === menu.anchor ? "text-primary font-bold" : ""}`}
        onClick={handleScrollTo(menu.anchor)}
      >
        {menu.label}
      </span>
    ))}
  </div>
}
