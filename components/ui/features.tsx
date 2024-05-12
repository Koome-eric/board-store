import { FEATURES } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-12 lg:py-24">
      <div className="relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[600px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={300}
            height={600}
            className="feature-phone"
            style={{ marginLeft: '90px', marginTop: '-40px' }}
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <h2 className="bold-32 lg:bold-32">Our Commitments</h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:mg-10 lg:gap-10">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-3 lg:p-4 bg-custom-red">
        <Image src={icon} alt="map" width={24} height={24} />
      </div>
      <h2 className="bold-16 lg:bold-20 mt-3 capitalize">
        {title}
      </h2>
      <p className="regular-14 mt-2 bg-white/80 text-gray-30 lg:mt-[20px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
