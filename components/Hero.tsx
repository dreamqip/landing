import type { FC } from "react";
import Image from "next/image";
import HeroImage from "../public/hero-image.png";

const Hero: FC = () => {
  return (
    <section className="flex justify-between w-full relative pb-20">
      <div className="flex max-w-[620px] flex-col justify-center items-center">
        <h1 className="font-bold text-[76px] uppercase tracking-[-0.4px] text-white mb-4 leading-[72px]">Lorem ipsum
          dolor sit amet</h1>
        <p className='text-[22px] tracking-[-0.4px] leading-[26px] opacity-90 text-white'>Aenean tortor orci, consectetur sit amet eleifend vitae, egestas sit amet orci. Ut eu neque ac est feugiat
          faucibus nec at augue. Fusce eu metus dui. Ut maximus venenatis ultrices. Aliquam maximus ante vulputate
          euismod pretium. </p>
      </div>
      <div className='relative'>
        <Image
          src={HeroImage}
          alt='hero-image'
          priority={true}
          placeholder='blur'
        />
        <div className='rounded-[20px] bg-hero w-[780px] h-[440px] absolute top-[20%] right-10 -z-10'></div>
        <div className='blur-[120px] opacity-20 bg-[#BA50DF] absolute top-1/3 right-1/2 -z-10 w-full h-full'></div>
      </div>
    </section>
  );
};

export default Hero;