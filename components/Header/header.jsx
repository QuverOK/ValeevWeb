"use client";

import { useContext } from "react";
import { UiToggler } from "../uikit/ui-toggler";
import { ValeevWebRowIcon } from "@/public/icons/valeev-web-row-icon";
import { ThemeContext } from "../ThemeProvider";
import Link from "next/link";
import clsx from "clsx";

export function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isChecked = theme === "light" ? false : true;

  function handleCheckboxChange(e) {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header className="flex-[0_1_auto] pt-[30px]">
      <div className="container flex justify-between items-center py-[18px]">
        <Link
          href="./"
          className={clsx(
            "text-[20px] font-semibold leading-6 hover:text-[#52bcd6] transition-colors",
          )}
        >
          <ValeevWebRowIcon textColor={theme === "light" ? "#000" : "#fff"} />
        </Link>
        <div className="flex items-center gap-x-[22px]">
          <ul className="flex gap-x-[22px] items-center">
            <li>
              <a href="#" className="text-[20px] leading-6">
                Блоги
              </a>
            </li>
            <li>
              <a href="#" className="text-[20px] leading-6">
                Проекты
              </a>
            </li>
            <li>
              <a href="#" className="text-[20px] leading-6">
                Обо мне
              </a>
            </li>
            <li>
              <a href="#" className="text-[20px] leading-6">
                Новости
              </a>
            </li>
          </ul>
          <UiToggler
            id="ThemeSwitcher"
            className="flex items-center justify-center"
            isChecked={isChecked}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
      </div>
    </header>
  );
}
