import type { FC } from "react";
import Image from "next/image";
import HeroImage from "../public/hero-image.webp";

const Hero: FC = () => {
  return (
    <section
      className="flex gap-y-10 flex-col-reverse justify-center items-center md:justify-between xl:flex-row w-full relative pb-20">
      <div className="flex max-w-[620px] flex-col justify-center items-center relative z-10">
        <h1
          className="font-bold text-[36px] leading-[44px] text-center xl:text-left uppercase text-white mb-4 xl:text-[76px] xl:leading-[72px]">
          Racing is life; the rest are just details.
        </h1>
        <p className="text-center xl:text-left text-[22px] leading-[26px] opacity-90 text-white">
          Web3 lifestyle application encourages people to use bikes in their daily lives with a corresponding incentive.
          It is a complete environment within which people of different genders, ages, religions, and life views can
          work together toward achieving their goals and making life on our planet better.
        </p>
      </div>
      <div className="xl:relative">
        <Image
          src={HeroImage}
          alt="hero-image"
          priority={true}
          placeholder="blur"
          className="relative z-10"
          width={660}
          height={560}
        />
        <div
          className="rounded-[20px] hidden sm:block bg-hero w-3/4 h-3/4 xl:w-[780px] xl:h-[440px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:top-auto xl:left-auto xl:-translate-x-0 xl:-translate-y-0 xl:bottom-0 xl:right-10 z-[1]"></div>
      </div>
      <div className="blur-[120px] opacity-20 bg-[#BA50DF] absolute top-1/2 left-1/3 z-[100] w-[400px] h-[400px]"></div>
    </section>
  );
};

export default Hero;