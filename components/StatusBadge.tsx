import clsx from "clsx";
import Image from "next/image";

import { StatusIcon } from "@/constants";

export const StatusBadge = ({ status }: { status: Status }) => {
  return (
    <div
      className={clsx("status-badge flex items-center justify-evenly mx-2", {
        "bg-green-600": status === "scheduled",
        "bg-blue-600": status === "pending",
        "bg-red-600": status === "cancelled",
      })}
      style={{ borderRadius: "12px" }}
    >
      <div>
        <Image
          src={StatusIcon[status]}
          alt="doctor"
          width={30}
          height={30}
          className="h-fit w-4 text-white"
        />
      </div>

      <div className={clsx("text-12-semibold capitalize text-white")}>
        {status}
      </div>
    </div>
  );
};
