import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import RegisterForm from "@/components/forms/RegisterForm";
import Link from "next/link";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);
  if (patient) redirect(`/patients/${userId}/new-appointment`);
  return (
    <section id="gettingStarted">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <RegisterForm user={user} />
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

export default Register;
