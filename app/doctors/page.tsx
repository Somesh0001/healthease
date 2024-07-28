import React from "react";
import DoctorCard from "@/components/DoctorComponent";
const Doctors = async () => {
  return (
    <section id="gettingStarted">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-6 lg:py-16 flex items-center justify-center flex-col relative">
        <div className="text-4xl font-semibold">Our Doctors</div>
        <div>Meet our team of experienced and world-class doctors</div>

        <section className="flex flex-col items-center">
          <DoctorCard />
        </section>

        <div className="absolute bottom-0">© 2024 HealthEase</div>
      </div>
    </section>
  );
};

export default Doctors;
