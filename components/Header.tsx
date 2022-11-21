import type { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <header className="p-4 md:p-6 mx-auto max-w-[1280px] w-full flex justify-between items-center gap-y-4 flex-wrap md:flex-nowrap">
      <div className="flex items-center gap-x-2 md:order-1">
        <Image width={64} height={64} className="h-12 w-12 md:h-16 md:w-16" src="/logo.svg" alt="logotype" priority />
        <span className="uppercase font-bold text-white text-[22px]">
          treadle
        </span>
      </div>
      <nav className="order-3 flex justify-center w-full md:w-auto md:ml-auto md:order-2 md:mr-4">
        <ul className="flex items-center gap-x-4">
          <li className="hover:opacity-80 transition">
            <a
              href="#about"
              className="text-white text-[16px] leading-[22px]"
            >
              About
            </a>
          </li>
          <li className="hover:opacity-80 transition">
            <a
              href="#media"
              className="text-white text-[16px] leading-[22px]"
            >
              Media
            </a>
          </li>
          <li className="hover:opacity-80 transition">
            <a
              href="#team"
              className="text-white text-[16px] leading-[22px]"
            >
              Team
            </a>
          </li>
        </ul>
      </nav>
      <div className="order-2 md:order-3">
        <a
          href="https://drive.google.com/uc?export=download&id=1WQTh5rzxGSXtwuY9covcIvSNXzVqkwTy"
          className="primary-button"
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
    </header>
  );
};

export default Header;
