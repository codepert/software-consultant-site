import { SmoothScroll } from '@/components';
import { Faq, FV, Hero, Layout, Pricing, Service } from '@/containers';
const Home = () => {
  return (
    <>
      {/* <SmoothScroll> */}
      <Layout>
        <FV></FV>
        <Hero />
        <Service />
        <Pricing />
        <Faq />
      </Layout>
      {/* </SmoothScroll> */}
    </>
  );
};

export default Home;
