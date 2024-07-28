import clsx from "clsx";
import Image from "next/image";

type StatCardProps = {
  type: "appointments" | "pending" | "cancelled";
  count: number;
  label: string;
  icon: string;
};

export const StatCard = ({ count = 0, label, icon, type }: StatCardProps) => {
  return (
    <div
      className={clsx("max-w-400 px-4 py-2 border-black  ", {
        "bg-green-200": type === "appointments",
        "bg-yellow-200": type === "pending",
        "bg-red-200": type === "cancelled",
      })}
      style={{ border: "2px solid black", borderRadius:"12px"}}
    >
      <div className="flex items-center gap-4">
        <Image
          src={icon}
          height={32}
          width={32}
          alt="appointments"
          className="size-8 w-fit"
        />
        <h2 className="text-32-bold text-black">{count}</h2>
      </div>

      <p className="text-14-regular">{label}</p>
    </div>
  );
};
