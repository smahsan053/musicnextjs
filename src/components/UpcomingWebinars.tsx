"use client";
import Link from "next/link";
import { HoverEffect } from "@/components/card-hover-effect";

function UpcomingWebinars() {
  const musicSchoolWebinars = [
    {
      title: "Vocal Mastery: Techniques for Singers",
      description:
        "Join us to explore vocal techniques that will help you control your voice, improve pitch, and enhance your vocal range. Perfect for singers at any level!",
      slug: "vocal-mastery-techniques",
      isFeatured: true,
    },
    {
      title: "Guitar for Beginners: Learn the Basics",
      description:
        "This webinar is designed for beginner guitarists. Learn the fundamentals of guitar playing, including chords, scales, and basic music theory.",
      slug: "guitar-for-beginners",
      isFeatured: false,
    },
    {
      title: "Music Theory Essentials: Understanding the Basics",
      description:
        "Dive into the basics of music theory, including scales, chords, and rhythm. This session is perfect for musicians looking to strengthen their foundational knowledge.",
      slug: "music-theory-essentials",
      isFeatured: true,
    },
    {
      title: "Piano Techniques: From Beginner to Advanced",
      description:
        "Whether you're just starting out or looking to refine your skills, this webinar will guide you through essential piano techniques for all levels.",
      slug: "piano-techniques",
      isFeatured: false,
    },
    {
      title: "Drumming Essentials: Building Your Rhythm",
      description:
        "Learn the key elements of drumming, including rhythm patterns, timing, and coordination. Perfect for drummers looking to improve their skills.",
      slug: "drumming-essentials",
      isFeatured: true,
    },
    {
      title: "Songwriting 101: Turning Ideas into Songs",
      description:
        "Have a great melody or lyrics but don’t know how to turn them into a full song? This webinar will teach you the fundamentals of songwriting and song structure.",
      slug: "songwriting-101",
      isFeatured: false,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={musicSchoolWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
