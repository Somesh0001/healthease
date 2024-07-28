import React from "react";
import doctor from "@/public/images/doctor2.png";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              src={doctor.src}
              alt="doctor"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="lg:py-24">
            <div className="text-4xl font-bold sm:text-5xl text-cyan-600">
              HealthEase{" "}
            </div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Connect to your doctor online
            </h2>

            <p className="mt-4 text-black-100">
              Welcome to <span className="text-black">HeathEase</span>, your
              trusted online platform for seamless doctor appointments. With a
              few clicks, you can book an appointment with the doctor of your
              choice, ensuring you receive the care you need, when you need it.
              Our user-friendly interface allows you to browse through a wide
              range of specialists, read reviews, and select the best fit for
              your health concerns. Experience the convenience and peace of mind
              that comes with managing your healthcare online. Your well-being
              is our priority.
            </p>

            <a
              href="#gettingStarted"
              className="mt-8 inline-block rounded bg-cyan-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-cyan-400  focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
