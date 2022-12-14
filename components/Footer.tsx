import type { FC } from 'react';
import Image from 'next/image';

const Footer: FC = () => {
  return (
    <footer className='py-6 justify-center items-center flex w-full bg-footer'>
      <div className='flex items-center gap-x-2'>
        <Image height={64} width={64} className="h-12 w-12 md:h-16 md:w-16" src='/logo.svg' alt='logotype' />
        <span className='uppercase font-bold text-white text-[22px]'>treadle</span>
      </div>
    </footer>
  );
};

export default Footer;