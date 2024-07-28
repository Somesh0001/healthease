import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";

const AdminPage = async () => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header style={{ marginTop: "2em" }}>
        <div className="text-3xl font-semibold ">Admin Dashboard</div>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <div className="text-2xl font-bold">Welcome 👋</div>
          <div
            className="text-black-700 text-2xl my-2"
            style={{ marginBottom: "12px" }}
          >
            Start the day with managing new appointments
          </div>
        </section>

        <section className="flex items-center justify-between">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/icons/cancelled.svg"}
          />
        </section>

        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default AdminPage;
