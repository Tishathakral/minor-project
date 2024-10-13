import { FeaturesSectionDemo } from "@/components/featureSectionDemo";
import HomePage from "@/components/homePage";
import Navbar from "@/components/navbarDemo";

import { TimelineDemo } from "@/components/timelineDemo";
export default function Home() {
  return (
  <main>
   <HomePage />
   <TimelineDemo />
   <FeaturesSectionDemo />
    </main>
  );
}
