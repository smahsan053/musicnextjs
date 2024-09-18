"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Comprehensive Music Curriculum",
    description:
      "Our school offers a wide range of music programs designed to cater to students of all levels, from beginners to advanced musicians. Learn to play various instruments, understand music theory, and develop performance skills under the guidance of experienced instructors.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--green-500))] flex items-center justify-center text-white">
        Comprehensive Music Curriculum
      </div>
    ),
  },
  {
    title: "Individual and Group Lessons",
    description:
      "Whether you prefer one-on-one lessons or enjoy learning in a group setting, we have options for you. Our individual lessons are tailored to your personal goals, while group lessons offer a collaborative environment to enhance your learning experience.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
        Individual and Group Lessons
      </div>
    ),
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from the best! Our instructors are not only experienced educators but also accomplished performers in their respective fields. They are dedicated to helping you achieve your musical aspirations, offering guidance and support every step of the way.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
        Expert Instructors
      </div>
    ),
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Our music school is equipped with top-of-the-line instruments and modern facilities to provide the best learning environment. From recording studios to performance halls, we ensure that our students have everything they need to succeed.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--teal-500),var(--orange-500))] flex items-center justify-center text-white">
        State-of-the-Art Facilities
      </div>
    ),
  },
  {
    title: "Performance Opportunities",
    description:
      "Get ready to showcase your talents! We offer numerous performance opportunities, including recitals, concerts, and competitions. Our school helps you build confidence as a performer and prepares you for the stage.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--cyan-500))] flex items-center justify-center text-white">
        Performance Opportunities
      </div>
    ),
  },
  {
    title: "Flexible Scheduling",
    description:
      "We understand that students have busy schedules. That's why we offer flexible lesson times to accommodate your lifestyle. Learn at your own pace, at times that are convenient for you.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--blue-500))] flex items-center justify-center text-white">
        Flexible Scheduling
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}></StickyScroll>
    </div>
  );
}

export default WhyChooseUs;
