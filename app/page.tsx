import { FeaturesSectionDemo } from "@/components/featureSectionDemo";
import HomePage from "@/components/homePage";
import Navbar from "@/components/navbarDemo";

import { TimelineDemo } from "@/components/timelineDemo";
export default function Home() {
  return (
  <main>
  
   <HomePage />
   <div className="md:text-4xl text-2xl mt-4 font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 dark:from-purple-400 dark:via-teal-400 dark:to-blue-500">How InQuiroAI will Transform the Future</div>
   <TimelineDemo />
   <div id="learn-more" className="md:text-3xl text-xl  flex justify-center mt-6 font-bold underline bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600">
    Explore InquiroAI's Capabilities
</div>

   <FeaturesSectionDemo />
    </main>
  );
}
