import { Faq, Hero, Layout, Pricing, Service, FV } from '@/containers';

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
