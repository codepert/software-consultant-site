import { Faq, Hero, Layout, Pricing, Service } from '@/containers';
/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

function Home() {
  return (
    <>
      {/* <SmoothScroll> */}
      <Layout>
        <Hero />
        <Service />
        <Pricing />
        <Faq />
      </Layout>
      {/* </SmoothScroll> */}
    </>
  );
}

export default Home;
