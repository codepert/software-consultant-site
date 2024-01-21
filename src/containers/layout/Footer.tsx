import { footerSection } from '@/lib/content/footer';

const Footer = () => {
  return (
    <footer className="container max-w-[1120px] mx-auto font-mono text-xs lg:px-0 px-12">
      <div className="lg:flex md:flex pt-16 px-4">
        <div className="w-1/2">
          <h3 className="text-white text-3xl py-2">{footerSection.title}</h3>
          <p className=" py-2 text-base text-primary">
            {footerSection.termsAndCondition}
          </p>
          <p className=" py-2 text-base text-primary">
            {footerSection.privacyPolicy}
          </p>
        </div>
        <div className="flex-grow ">
          <div className="lg:flex">
            <div>
              <h3 className="text-3xl py-2 lg:pl-20 text-white font-bold  tracking-tighter">
                {footerSection.readToGetStarted}
              </h3>
            </div>
            <div className="lg:pl-4 lg:mt-0 mt-3">
              <button className="py-4 px-6 bg-white font-bold text-black rounded-full">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6  px-4">
        <p className="text-base text-primary">
          © 2023 Kodemorph. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
