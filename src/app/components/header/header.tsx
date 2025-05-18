import Image from "next/image";

import { NAV_LINKS } from "./data";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gray-100 flex w-full justify-center">
      <div className="flex items-center max-w-[1710px] justify-between w-full px-3 py-5">
        <Image src={"./logo.svg"} alt="Logo svg" width={180} height={104} />

        <nav>
          <ul className="flex text-lg">
            {NAV_LINKS.map((navItem) => (
              <li key={navItem.id}>
                <Link
                  href={navItem.link}
                  className="relative inline-block px-6 group"
                >
                  {navItem.name}
                  <span className="pointer-events-none absolute left-6 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-[calc(100%-3rem)]" />
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
            <Image
              alt="Whatsapp icon"
              src={"./whatsapp.svg"}
              width={45}
              height={45}
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
                className="text-sm max-w-[186px] bg-white text-black shadow-md p-3 flex flex-col gap-2"
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

          <Button variant={"outline"} className="uppercase text-lg">
            Оставить заявку
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
