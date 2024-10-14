import { FeaturesSectionDemo } from "@/components/featureSectionDemo";
import HomePage from "@/components/homePage";
import Navbar from "@/components/navbarDemo";

import { TimelineDemo } from "@/components/timelineDemo";
export default function Home() {
  return (
  <main>
   <HomePage />
   <TimelineDemo />
   <div className="text-3xl flex justify-center mt-6 font-bold underline bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600">
  Explore InquiroAI's Capabilities
</div>

   <FeaturesSectionDemo />
    </main>
  );
}
