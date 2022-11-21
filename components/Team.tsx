import type { FC } from "react";
import Image from "next/image";
import { team } from "../data/team";

const Team: FC = () => {
  return (
    <section className="py-[100px] bg-team relative full-width z-10 text-white" id="team">
      <div className="primary-container">
        <h2 className="uppercase font-bold text-center text-[34px] leading-[22px] mb-12">Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-none lg:flex lg:flex-wrap lg:justify-center lg:items-center xl:grid xl:grid-cols-4 gap-y-10 sm:gap-x-4 lg:gap-x-8">
          {team.map((member, i) => (
            <div key={i} className="flex max-w-[260px] lg:flex-[0 0 calc(33.33% - 32px)] flex-col items-center justify-center">
              <Image
                src={member.image}
                alt={member.name}
                width={260}
                height={260}
                className="rounded-full object-cover object-top aspect-square mb-4"
              />
              <h3 className="text-[22px] font-bold mb-2">{member.name}</h3>
              <p className="text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;