"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { PanelRight } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["right"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export default function Sidebar() {
  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">
              <PanelRight />{" "}
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <div className="flex flex-col items-center justify-center">
              <div className="my-5">
                <Link href="/" className="text-blue-800 hover:text-blue-400">
                  Home
                </Link>
              </div>
              <div className="my-5">
                <Link
                  href="/about"
                  className="text-blue-800 hover:text-blue-400"
                >
                  About
                </Link>
              </div>
              <div className="my-5">
                <Link
                  href="/doctors"
                  className="text-blue-800 hover:text-blue-400"
                >
                  Doctors
                </Link>
              </div>
              <div className="my-5">
                <Link
                  href="/blogs"
                  className="text-blue-800 hover:text-blue-400"
                >
                  Blogs
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
