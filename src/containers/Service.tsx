import { ServiceSection } from '@/lib/content/service';

import { Wrapper } from '@/components';
import { ServiceCard } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Service = () => {
  return (
    <Wrapper
      id="service"
      {...getSectionAnimation}
      className="justify-center  gap-6 mt-12 xs:gap-7 xs:mt-0 pt-32"
    >
      <div className="space-y-4 text-center">
        <div className="font-bold tracking-tighter md:text-xl flex flex-col">
          <p className="mt-2 tracking-wide text-4xl text-white">
            {ServiceSection.title[0]}&nbsp;&nbsp;
            <span className="text-blue-500">{ServiceSection.title[1]}</span>
          </p>
          {ServiceSection.description.map((item, i) => (
            <div key={i} className="mt-2 tracking-wide text-xl">
              {item}
            </div>
          ))}
          <div className="grid gap-6 grid-cols-auto-250 xs:grid-cols-auto-300 place-items-center">
            {ServiceSection.items.map((item, i) => (
              <div key={i} className="mt-2 tracking-wide text-xl">
                <ServiceCard title={item.title} content={item.content} />
              </div>
            ))}
          </div>
          <div className="text-center py-2 mt-10">
            <button className="py-2 px-5 bg-white text-black text-sm rounded-full">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Service;
