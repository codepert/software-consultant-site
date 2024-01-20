import {
  About,
  Contact,
  Experience,
  Hero,
  Intro,
  Layout,
  Projects,
  Skills,
  NewProjects,
} from '@/containers';

import type { NextPage } from 'next';
/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  return (
    <>
      {/* <SmoothScroll> */}
      <Layout>
        <Hero />
        <Intro />
        {/* <About /> */}
        <Skills />
        {/* <Experience /> */}
        {/* <Projects /> */}
        {/* <NewProjects /> */}
        <Contact />
      </Layout>
      {/* </SmoothScroll> */}
    </>
  );
};

export default Home;
