import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { CalendarCheck } from "lucide-react";
import tick from "@/public/gifs/tick.gif";
const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );
  return (
    <section id="gettingStarted">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 flex items-center justify-center flex-col relative">
        <section className="flex flex-col items-center">
          <div>
            <Image src={tick.src} height={300} width={280} alt="success" />
          </div>
          <div className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-[#4FA33D]">appointment request</span> has
            been successfully submitted!
          </div>
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>
        <section className="flex items-center justify-center flex-col">
          <div className="my-2 underline">Requested appointment details: </div>
          <div className="flex items-center gap-3 my-4">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={200}
              height={200}
              className="size-6"
            />
            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <p> {formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

        <Button variant="success" className="shad-primary-btn my-4" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>

        <div className="absolute bottom-0">© 2024 HealthEase</div>
      </div>
    </section>
  );
};

export default RequestSuccess;
