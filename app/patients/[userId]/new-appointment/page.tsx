import React from "react";
import Image from "next/image";
import AppointmentForm from "@/components/forms/AppointmentForm";
import Link from "next/link";
import { getPatient } from "@/lib/actions/patient.actions";

const Appointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  return (
    <section id="gettingStarted">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <AppointmentForm
          patientId={patient?.$id}
          userId={userId}
          type="create"
        />
        <div className="w-full flex items-center justify-end">
          <Link
            href={"#"}
            className="text-green-600 font-bold hover:text-green-400 "
          >
            Admin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
