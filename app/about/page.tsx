import React from "react";
import Image from "next/image";
import logo from "@/public/images/AboutLogo.png";
const RequestSuccess = async () => {
  return (
    <section id="gettingStarted">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-6 lg:py-16 flex items-center justify-center flex-col relative">
        <section className="flex flex-col items-center">
          <div>
            <Image src={logo.src} height={300} width={280} alt="success" />
          </div>
          <div className="header mb-6 max-w-[800px] text-center">
            Welcome to HealthEase, your one-stop solution for seamless
            healthcare appointments. Our user-friendly platform allows patients
            to effortlessly book appointments with their preferred doctors in
            real-time. Browse through our comprehensive list of available
            doctors, complete with their qualifications, and gain valuable
            insights from blogs written by various medical professionals.
          </div>
          <div className="header mb-6 max-w-[800px] text-center">
            With HealthEase, booking an appointment is a breeze, and you will
            receive instant SMS notifications for your bookings. Our robust
            admin panel empowers administrators to track the number of daily
            appointments and provides doctors with the flexibility to manage
            their schedules, including canceling appointments if necessary.
          </div>
          <div>
            Experience healthcare convenience like never before with HealthEase.
          </div>
        </section>

        <div className="absolute bottom-0">© 2024 HealthEase</div>
      </div>
    </section>
  );
};

export default RequestSuccess;
