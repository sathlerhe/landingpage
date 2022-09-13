import { Layout } from "../src/containers/Layout/index";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("../src/sections/Homepage/HeroSection")
);
const AboutSection = dynamic(
  () => import("../src/sections/Homepage/AboutSection")
);
const FindSection = dynamic(
  () => import("../src/sections/Homepage/FindSection")
);
const ReasonsSection = dynamic(
  () => import("../src/sections/Homepage/ReasonsSection")
);
const StepSection = dynamic(
  () => import("../src/sections/Homepage/StepSection")
);
const NewsletterSection = dynamic(
  () => import("../src/sections/Homepage/NewsletterSection")
);

export function Index() {
  return (
    <Layout>
      <HeroSection />

      <AboutSection />

      <FindSection />

      <ReasonsSection />

      <StepSection />

      <NewsletterSection />
    </Layout>
  );
}

export default Index;
