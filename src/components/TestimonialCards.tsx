"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "The instructors at this music school are amazing! They helped me find my true voice and guided me through every step of my musical journey.",
    name: "Emily Rose",
    title: "Vocalist & Songwriter",
  },
  {
    quote:
      "I never thought I'd be able to play the guitar so confidently. Thanks to their structured lessons and patient guidance, I'm now performing at local gigs!",
    name: "James Oliver",
    title: "Guitarist",
  },
  {
    quote:
      "The theory classes made everything click for me. Understanding the 'why' behind music has taken my piano playing to the next level.",
    name: "Sophia Martinez",
    title: "Pianist",
  },
  {
    quote:
      "From learning the basics to mastering advanced techniques, this music school has everything. The supportive environment kept me motivated throughout.",
    name: "Michael Harris",
    title: "Drummer",
  },
  {
    quote:
      "The personalized feedback and one-on-one coaching sessions made a huge difference in my growth as a violinist. I highly recommend this place!",
    name: "Olivia Carter",
    title: "Violinist",
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;
