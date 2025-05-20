"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";

import WhatsappIcon from "@/assets/whatsapp.svg";
import Logo from "@/assets/logo.svg";

import { NAV_LINKS } from "./data";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex w-full justify-center fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center max-w-[1710px] justify-between w-full px-3 py-5">
        <Logo width={180} height={104} />

        <nav>
          <ul className="flex text-lg">
            {NAV_LINKS.map((navItem) => (
              <li key={navItem.id}>
                <Link
                  href={navItem.link}
                  className="relative inline-block px-6 group"
                >
                  {navItem.name}
                  <span
                    className={cn(
                      "pointer-events-none absolute left-6 -bottom-1 h-0.5 w-0 transition-all duration-300 group-hover:w-[calc(100%-3rem)]",
                      isScrolled ? "bg-black" : "bg-white"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href={"#"}
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <WhatsappIcon
              width={45}
              height={45}
              className={cn(isScrolled ? "text-black" : "text-white")}
            />
          </Link>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 text-lg cursor-pointer group">
                  <Link className="font-semibold" href="tel:79046285078">
                    +7 (904) 628-50-78
                  </Link>
                  <ChevronDownIcon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-180 pointer-events-none" />
                </div>
              </TooltipTrigger>
              <TooltipContent
                sideOffset={10}
                side="bottom"
                hideArrow={false}
                className={cn(
                  "text-sm max-w-[186px] flex flex-col gap-2 text-[15px]",
                  isScrolled
                    ? "bg-white text-black"
                    : "bg-white/4 backdrop-blur-md text-white"
                )}
              >
                <p>690014, Владивосток, Народный пр., 2А</p>
                <p>10.00-18.00 пн-пт (по записи)</p>
                <Link
                  className="underline underline-offset-2"
                  href="mailto:hello@lineikadesign.ru"
                >
                  hello@lineikadesign.ru
                </Link>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button
            variant={"outline"}
            className={cn(
              "uppercase text-lg",
              !isScrolled && "border-white hover:bg-white hover:text-black"
            )}
          >
            Оставить заявку
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
