import type { FC } from "react";

const Presentation: FC = () => {
  return (
    <section className='flex justify-center items-center pb-20'>
      <iframe
        src="https://www.youtube.com/embed/9bZkp7q19f0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className='max-w-4xl w-full rounded-2xl h-[600px]'
      />
    </section>
  );
};

export default Presentation;