import type { FC } from "react";
import Image from "next/image";

const amount = 8;

const Team: FC = () => {
  return (
    <section className="py-[100px] bg-team relative full-width z-10 text-white">
      <div className="primary-container">
        <h2 className="uppercase font-bold text-center text-[34px] leading-[22px] mb-12">Team</h2>
        <div className="grid grid-cols-4 gap-8">
          {[...Array(amount)].map((_, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt='member'
                width={260}
                height={260}
                className="rounded-full object-cover aspect-square mb-4"
              />
              <h3 className="text-[22px] font-bold mb-2">John Doe</h3>
              <p>CEO</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;