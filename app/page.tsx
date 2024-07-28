import HeroSection from "@/components/HeroSection";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { PatientForm } from "@/components/forms/PatientForm";
import Link from "next/link";
import { PasskeyModal } from "@/components/PasskeyModel";
export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams?.admin === "true";
  return (
    <>
     {isAdmin && <PasskeyModal />}
      <HeroSection />
      <section id="gettingStarted">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <PatientForm />
          <div className="w-full flex items-center justify-end">
            <Link
              href="/?admin=true"
              className="text-green-600 font-bold hover:text-green-400 "
            >
              Admin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
