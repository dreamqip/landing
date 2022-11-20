import type { FC } from "react";

const Media: FC = () => {
  return (
    <section className="bg-media py-[100px] -rotate-180 text-white full-width">
      <div className="grid-container rotate-180 primary-container">
        <div className="download border-2 border-primary px-10 py-8 rounded-3xl">
          <h3 className="uppercase text-[30px] leading-[35px] mb-8">
            Nunc ultrices <span className="font-bold text-[34px] leading-[22px]">tortor</span>
          </h3>
          <p className="mb-8">In nec purus vulputate, finibus lectus eu, varius massa. Vestibulum quis velit a nulla
            faucibus suscipit congue vel tellus
          </p>
          <button className="primary-button">
            Download
          </button>
        </div>
        <div className="github border-2 border-primary px-10 py-8 rounded-3xl gap-8 justify-between flex items-center">
          <h3 className="uppercase text-[30px] leading-[35px] w-full max-w-[230px]">
            erat ultricies <span className="font-bold text-[34px] leading-[22px]">Github</span>
          </h3>
          <p className="">
            In nec purus vulputate, finibus lectus eu, varius massa. Vestibulum quis velit a nulla
            faucibus suscipit congue vel tellus.
          </p>
          <button className="primary-button mt-auto">
            Download
          </button>
        </div>
        <div className="twitter border-2 border-primary px-10 py-8 gap-8 flex justify-center items-start flex-col rounded-3xl">
          <h3 className="uppercase font-bold text-[34px] leading-[22px]">
            Twitter
          </h3>
          <p>
            Aenean ultrices ex ut mi tincidunt ornare. Sed ullamcorper libero ligula, sed suscipit tellus commodo a.
            Quisque ac tempus purus.
          </p>
          <button className="primary-button mt-auto">
            twitter.com
          </button>
        </div>
        <div className="presentation border-2 border-primary px-10 py-8 gap-8 flex flex-col rounded-3xl justify-center items-start">
          <h3 className="uppercase font-bold text-[34px] leading-[22px]">
            presentation
          </h3>
          <p>
            Curabitur auctor eget metus et viverra. Integer sit amet sapien vel dolor imperdiet fringilla. Suspendisse
            vestibulum sem vel orci egestas, sed dignissim magna ultricies.
          </p>
          <button className="primary-button mt-auto">
            presentation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Media;