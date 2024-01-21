import { ServiceSection } from '@/lib/content/service';

import { Wrapper } from '@/components';
import { ServiceCard } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Service = () => {
  return (
    <Wrapper
      id="services"
      {...getSectionAnimation}
      className="justify-center  gap-6 mt-12 xs:gap-7 xs:mt-0 pt-32"
    >
      <div className="space-y-4 text-center">
        <div className=" md:text-xl flex flex-col">
          <p className="my-2 font-bold tracking-wide text-4xl text-white">
            {ServiceSection.title[0]}&nbsp;&nbsp;
            <span className="text-blue-500">{ServiceSection.title[1]}</span>
          </p>
          {ServiceSection.description.map((item, i) => (
            <div
              key={i}
              className="tracking-wide text-lg leading-6 text-primary"
            >
              {item}
            </div>
          ))}
          <div className="grid gap-6 grid-cols-auto-250 place-items-center mt-20">
            {ServiceSection.items.map((item, i) => (
              <ServiceCard title={item.title} content={item.content} key={i} />
            ))}
          </div>
          <div className="text-center py-2 mt-8">
            <button className="py-4 px-8 bg-white text-black text-sm rounded-full">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Service;
