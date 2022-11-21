import type { FC } from "react";

const Media: FC = () => {
  return (
    <section className="bg-media py-[100px] -rotate-180 text-white full-width" id="media">
      <div className="grid-container rotate-180 primary-container">
        <div
          className="download border-2 border-primary px-6 md:px-10 py-4 md:py-8 rounded-3xl flex flex-col items-start">
          <h3 className="uppercase text-[24px] leading-[32px] mb-4 md:mb-8">
            Download
            <br />
            <span className="font-bold text-[22px] leading-[28px] md:text-[30px] md:leading-[35px]">Now</span>
          </h3>
          <p className="mb-8">
            You can download the app to your phone via the button below and start your first journey with Treadle
            Lifestyle App. Create a NEAR Protocol account, log in, mint your first NFT and ride! Let&apos;s change the
            world
            together!
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1WQTh5rzxGSXtwuY9covcIvSNXzVqkwTy"
            target="_blank"
            rel="noreferrer"
            className="primary-button mt-auto">
            Download
          </a>
        </div>
        <div
          className="github flex flex-col lg:flex-row justify-center items-start lg:items-center gap-4 md:gap-8 border-2 border-primary px-6 md:px-10 py-4 md:py-8 rounded-3xl ">
          <h3
            className="uppercase text-[24px] leading-[32px] md:text-[30px] md:leading-[35px] w-full break-keep max-w-[230px]">
            Our <br /> <span
            className="font-bold text-[22px] leading-[28px] md:text-[30px] md:leading-[35px]">Github</span>
          </h3>
          <p>
            We created a comprehensive Github organization to structure our repositories and manage access. Follow the
            link below to see the source code of each of our project&apos;s modules!
          </p>
          <a
            href="https://github.com/treadle"
            target="_blank"
            className="primary-button mt-auto"
            rel="noreferrer">
            GitHub
          </a>
        </div>
        <div
          className="twitter border-2 border-primary px-6 md:px-10 py-4 md:py-8 gap-4 md:gap-8 flex justify-center items-start flex-col rounded-3xl">
          <h3 className="uppercase font-bold text-[24px] leading-[32px] md:text-[30px] md:leading-[35px]">
            Twitter
          </h3>
          <p>
            Do not forget to follow our Twitter account, which will offer complete information about the Treadle
            Lifestyle App and more exciting content.
          </p>
          <a
            href="https://twitter.com/trdlapp?s=21&t=XYsQGlA-CE3RSTzvkVuUhg"
            target="_blank"
            className="primary-button mt-auto"
            rel="noreferrer">
            Twitter
          </a>
        </div>
        <div
          className="presentation border-2 border-primary px-6 md:px-10 py-4 md:py-8 gap-4 md:gap-8 flex flex-col rounded-3xl justify-center items-start">
          <h3 className="uppercase font-bold text-[24px] leading-[32px] md:text-[30px] md:leading-[35px]">
            presentation
          </h3>
          <p>
            In our presentation of the Treadle Lifestyle App, we explain the idea behind our project, as well as show
            its functionality and features. Finally, we pointed out all the advantages and disadvantages of our current
            technical and theoretical achievements and what we will do to improve and extend them.
          </p>
          <a
            href="https://www.youtube.com/watch?v=m4mAHkytqys"
            target="_blank"
            className="primary-button mt-auto"
            rel="noreferrer">
            Presentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Media;