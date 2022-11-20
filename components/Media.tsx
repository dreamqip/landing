import type { FC } from "react";

const Media: FC = () => {
  return (
    <section className="bg-media py-[100px] -rotate-180 text-white full-width">
      <div className="grid-container rotate-180 primary-container">
        <div className="download border-2 border-primary p-8 rounded-3xl">
          <h3 className="uppercase text-[30px] leading-[35px] mb-8">
            Nunc ultrices <span className="font-bold text-[34px] leading-[22px]">tortor</span>
          </h3>
          <p className="mb-8">In nec purus vulputate, finibus lectus eu, varius massa. Vestibulum quis velit a nulla
            faucibus suscipit
            congue vel tellus. Morbi bibendum volutpat nibh eget cursus. Aenean ultrices ex ut mi tincidunt ornare. Sed
            ullamcorper libero ligula, sed suscipit tellus commodo a. Quisque ac tempus purus. Suspendisse vestibulum
            sem vel orci egestas, sed dignissim magna ultricies.
          </p>
          <button className="primary-button">
            Download
          </button>
        </div>
        <div className="github border-2 border-primary p-8 rounded-3xl flex items-center">
          <h3 className="uppercase text-[30px] leading-[35px]">
            Nunc ultrices <span className="font-bold text-[34px] leading-[22px]">tortor</span>
          </h3>
          <p className="">In nec purus vulputate, finibus lectus eu, varius massa. Vestibulum quis velit a nulla
            faucibus suscipit
            congue vel tellus. Morbi bibendum volutpat nibh eget cursus. Aenean ultrices ex ut mi tincidunt ornare. Sed
            ullamcorper libero ligula, sed suscipit tellus commodo a. Quisque ac tempus purus. Suspendisse vestibulum
            sem vel orci egestas, sed dignissim magna ultricies.
          </p>
          <button className="primary-button">
            Download
          </button>
        </div>
        <div className="twitter border-2 border-primary p-8 rounded-3xl"></div>
        <div className="presentation border-2 border-primary p-8 rounded-3xl"></div>
      </div>
    </section>
  );
};

export default Media;