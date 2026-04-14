import { Hero } from '../components/Hero';
import { BeforeAfter } from '../components/BeforeAfter';
import { PainPoints } from '../components/PainPoints';
import { HowItWorks } from '../components/HowItWorks';
import { HowItWorksAlt } from '../components/HowItWorksAlt';
import { Features } from '../components/Features';
import { VideoDemoTabs } from '../components/VideoDemoTabs';
import { MarkingSafe } from '../components/MarkingSafe';
import { LabelTypes } from '../components/LabelTypes';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <PainPoints />
      <HowItWorks />
      <HowItWorksAlt />
      <Features />
      <VideoDemoTabs />
      <MarkingSafe />
      <LabelTypes />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}