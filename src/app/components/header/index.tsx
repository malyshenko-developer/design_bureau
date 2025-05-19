import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import WhatsappIcon from "@/assets/whatsapp.svg";

import { NAV_LINKS } from "./data";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-transparent flex w-full justify-center fixed top-0 left-0 z-50">
      <div className="flex items-center max-w-[1710px] justify-between w-full px-3 py-5">
        <Image
          src={"./logo.svg"}
          alt="Logo svg"
          width={180}
          height={104}
          className="fill-amber-300"
        />

        <nav>
          <ul className="flex text-lg text-white">
            {NAV_LINKS.map((navItem) => (
              <li key={navItem.id}>
                <Link
                  href={navItem.link}
                  className="relative inline-block px-6 group"
                >
                  {navItem.name}
                  <span className="pointer-events-none absolute left-6 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-[calc(100%-3rem)]" />
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
            <WhatsappIcon width={45} height={45} className="text-white" />
          </Link>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-2 text-lg cursor-pointer group text-white">
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
                className="text-sm max-w-[186px] bg-white/4 backdrop-blur-md text-white flex flex-col gap-2 text-[15px]"
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
            className="uppercase text-lg text-white border-white hover:bg-white hover:text-black"
          >
            Оставить заявку
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
