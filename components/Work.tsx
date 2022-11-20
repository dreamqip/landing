import type { FC } from "react";

const Work: FC = () => {
  return (
    <section className='pb-20'>
      <h2 className="uppercase text-center text-white text-[34px] font-bold mb-8">How does it work?</h2>
      <div className="flex justify-between items-center text-white gap-x-24">
        <div className="flex flex-col items-center">
          <p>Phasellus tristique, justo vitae ultrices viverra, tortor nisi pharetra quam, at pharetra sapien elit quis
            elit. Maecenas at justo felis. In sit amet suscipit erat. Nam fermentum auctor mattis. Morbi iaculis nunc
            faucibus sem commodo auctor. Aenean ultrices ex ut mi tincidunt ornare. Sed ullamcorper libero ligula, sed
            suscipit tellus commodo a. Quisque ac tempus purus. Aliquam quis tortor eleifend, pretium enim vitae,
            lobortis ex. </p>
        </div>
        <div className="flex flex-col items-center">
          <p>Phasellus tristique, justo vitae ultrices viverra, tortor nisi pharetra quam, at pharetra sapien elit quis
            elit. Maecenas at justo felis. In sit amet suscipit erat. Nam fermentum auctor mattis. Morbi iaculis nunc
            faucibus sem commodo auctor. Aenean ultrices ex ut mi tincidunt ornare. Sed ullamcorper libero ligula, sed
            suscipit tellus commodo a. Quisque ac tempus purus. Aliquam quis tortor eleifend, pretium enim vitae,
            lobortis ex. </p>
        </div>
      </div>
    </section>
  );
};

export default Work;