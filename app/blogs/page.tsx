"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Paging from "@/components/Pagination";
import { useRouter } from "next/navigation";
const Blogs = async () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/blogs/1");
  }, []);

  return (
    <section id="gettingStarted">
      <div className="text-4xl text-cyan-600">HealthEase Blogs </div>
    </section>
  );
};

export default Blogs;
