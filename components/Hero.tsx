import type { FC } from "react";
import Image from "next/image";
import HeroImage from "../public/hero-image.webp";

const Hero: FC = () => {
  return (
    <section className="flex justify-between w-full relative pb-20">
      <div className="flex max-w-[620px] flex-col justify-center items-center relative z-10">
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
          className='relative z-10'
          width={660}
          height={560}
        />
        <div className='rounded-[20px] bg-hero w-[780px] h-[440px] absolute bottom-0 right-10 z-[1]'></div>
      </div>
      <div className='blur-[120px] opacity-20 bg-[#BA50DF] absolute top-1/2 left-1/3 z-[100] w-[400px] h-[400px]'></div>
    </section>
  );
};

export default Hero;