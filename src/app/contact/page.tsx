"use client";
import { useState } from "react";
import { Meteors } from "@/components/ui/meteors";

function Page() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className="min-h-screen bg-slate-900 py-12 pt-36">
        <h2 className="text-5xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h2>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey
        </p>
        <form
          action=""
          className="flex flex-col justify-center items-center mt-10"
        >
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-11/12 sm:w-5/12 p-4 rounded-xl bg-transparent border mb-4"
          />
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={4}
            className="w-11/12 sm:w-5/12  p-4 rounded-xl bg-transparent border"
          ></textarea>
          <div>
            <button className="bg-teal-400 rounded-xl py-3 px-5 mt-4 hover:bg-teal-600">
              Send Message
            </button>
          </div>
        </form>
        <Meteors number={100} />
      </div>
    </div>
  );
}

export default Page;
