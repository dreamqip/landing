import type { FC } from "react";

const Work: FC = () => {
  return (
    <section className='pb-20'>
      <h2 className="uppercase text-center text-white text-[34px] font-bold mb-8">How does it work?</h2>
      <div className="flex flex-row gap-y-8 justify-center text-white gap-x-16">
        <div className="flex text-center justify-center items-center max-w-[440px]">
          <p>Equip your NFT bike, make a trip, and get an award in the form of $SCRW fungible tokens.

            Wait for the energy recovery, energy soul-bound fungible token, and go again on the road.

            During the trip, you can see the speed, the mileage that was driven on the bike, the number of tokens earned, etc.

            While waiting for power to be restored, you can admire your bikes or count the number of zeros in the token balance.</p>
        </div>
        {/*<div className="h-[1px] block md:hidden border border-gray-400 w-full"></div>*/}
        {/*<div className="flex flex-col items-center">*/}
        {/*  <p>*/}
        {/*    During the trip, you can see the speed, the mileage that was driven on the bike, the number of tokens earned, etc.*/}

        {/*    While waiting for power to be restored, you can admire your bikes or count the number of zeros in the token balance.</p>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default Work;