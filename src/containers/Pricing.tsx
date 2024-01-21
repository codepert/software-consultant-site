import { PricingSection } from '@/lib/content/pricing';

import { Wrapper } from '@/components';
import PricingCard from '@/components/Pricing/PricingCard';

import { getSectionAnimation } from '@/styles/animations';

const Pricing = () => {
  return (
    <Wrapper
      id="pricing"
      {...getSectionAnimation}
      className="justify-center  gap-6 mt-12 xs:gap-7 xs:mt-0 pt-32 "
    >
      <div className="space-y-4 ">
        <div className="font-bold tracking-tighter md:text-xl flex flex-col">
          <p className="mt-2 tracking-wide text-4xl text-white text-center">
            {PricingSection.title}
          </p>
          <p className="text-center mt-5 text-primary">
            {PricingSection.description}
          </p>
          <div className="grid gap-5 grid-cols-auto-232 mt-14">
            {PricingSection.items.map((item, i) => (
              <PricingCard
                title={item.title}
                discountPrice={item.discountPrice}
                price={item.price}
                plan={item.plan}
                index={i}
                key={i}
              ></PricingCard>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;
