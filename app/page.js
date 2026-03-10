import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";

const stories = [
  {
    id: "mountains",
    imageSrc: "/Mountains-around-grenoble.jpg",
    imageAlt:
      "The majestic mountain ranges surrounding Grenoble, with snow-capped peaks under a clear sky",
    title: "Surrounded by Giants",
    subtitle: "Chapter I — The Mountains",
    description:
      "Grenoble sits at the confluence of three mountain ranges — the Chartreuse, Vercors, and Belledonne. These towering peaks create a natural amphitheatre of breathtaking beauty that changes with every season. In winter, they wear a pristine coat of snow; in summer, they glow emerald green under the warm Alpine sun. There are few cities in the world where you can stand in the heart of an urban centre and feel so utterly enveloped by nature's grandest architecture.",
    reverse: false,
  },
  {
    id: "bastille",
    imageSrc: "/Grenoble-Bastille cable car.jpg",
    imageAlt:
      "The iconic Grenoble-Bastille cable car ascending above the city rooftops toward the Bastille fort",
    title: "Rising Above the City",
    subtitle: "Chapter II — The Bastille Cable Car",
    description:
      "Since 1934, the Grenoble-Bastille cable car — affectionately known as \"Les Bulles\" (the bubbles) — has carried visitors up to the Bastille fortress, 476 meters above the city. The transparent spherical cabins offer a spellbinding panoramic view as you glide over the Isère River and the old town rooftops. At the summit, the panorama unfolds in all directions: the distant Mont Blanc, the winding river, and the terracotta rooftops of the city below. It is a ride that transforms perspective — literally and figuratively.",
    reverse: true,
  },
  {
    id: "cycling",
    imageSrc: "/cycling-in-grenoble.jpg",
    imageAlt:
      "Cyclists enjoying one of Grenoble's many dedicated cycling paths through the city",
    title: "A City on Two Wheels",
    subtitle: "Chapter III — The Cycling Culture",
    description:
      "Grenoble is consistently ranked among France's most cycling-friendly cities — and it's easy to see why. With over 320 kilometres of dedicated cycling paths weaving through the city and into the surrounding valleys, biking here is not just a mode of transport; it is a way of life. From students pedalling to university along the Isère to weekend adventurers tackling legendary Alpine cols, the bicycle is woven into the very identity of Grenoble. The flat city centre and the Métrovélo bike-sharing system make it effortless for anyone to join in.",
    reverse: false,
  },
  {
    id: "avenue",
    imageSrc: "/longest-avenue-in-france.webp",
    imageAlt:
      "The grand Cours Jean Jaurès, the longest avenue in France, lined with trees stretching toward the mountains",
    title: "The Longest Avenue in France",
    subtitle: "Chapter IV — Cours Jean Jaurès",
    description:
      "Stretching an impressive 3.5 kilometres through the heart of the city, Cours Jean Jaurès holds the distinction of being the longest straight avenue in all of France. Lined with elegant plane trees and flanked by charming cafés, this grand boulevard connects the train station to the old city, serving as Grenoble's monumental spine. Walking down this avenue at sunset, with the golden light filtering through the canopy and the silhouettes of the Alps framing the horizon, is one of those simple yet unforgettable Grenoble moments.",
    reverse: true,
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IntroSection />
      {stories.map((story, index) => (
        <StorySection
          key={story.id}
          {...story}
          index={index}
        />
      ))}
      <Footer />
    </main>
  );
}
