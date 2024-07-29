"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname } from "next/navigation";
export default function Paging() {
  const pathname = usePathname();
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="/blogs/1"
            isActive
            className={`text-black ${
              pathname === "/blogs/1" ? "border-black" : "border-white"
            } `}
          >
            1
          </PaginationLink>
        </PaginationItem>
        {/* <PaginationItem>
          <PaginationLink
            href="/blogs/2"
            className={`text-black ${
              pathname === "/blogs/2" ? "border-black" : "border-white"
            } `}
          >
            2 
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="/blogs/3"
            className={`text-black ${
              pathname === "/blogs/3" ? "border-black" : "border-white"
            } `}
          >
            3
          </PaginationLink>
        </PaginationItem> */}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/blogs/1" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
