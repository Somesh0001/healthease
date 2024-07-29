import React from "react";
import Image from "next/image";
import Paging from "@/components/Pagination";

const blogs = [
  {
    title: "The Importance of Regular Health Check-ups",
    author: "Dr. Shekhar Sinha",
    date: "July 15, 2024",
    description:
      "Regular health check-ups can help find potential health issues before they become a problem. Learn why you should schedule your next visit today.",
    path: "/images/docMale2.jpeg",
  },
  {
    title: "Understanding Mental Health",
    author: "Dr. Rohan Shetty",
    date: "July 10, 2024",
    description:
      "Mental health is just as important as physical health. Explore the different aspects of mental well-being and how to maintain it.",
    path: "/images/docMale3.jpeg",
  },
  {
    title: "Healthy Eating Habits",
    author: "Dr. Priya Nair",
    date: "July 8, 2024",
    description:
      "Discover the benefits of a balanced diet and how to incorporate healthy eating habits into your daily routine.",
    path: "/images/docFem2.jpeg",
  },
  {
    title: "Exercise and Fitness Tips",
    author: "Dr. Shipa Dwivedi",
    date: "July 5, 2024",
    description:
      "Learn effective exercise and fitness tips to stay in shape and maintain a healthy lifestyle.",
    path: "/images/docFem3.jpeg",
  },
];
const BlogCard = ({ title, author, date, description, path }: Blog) => (
  <div className="flex mb-6 items-start justify-start">
    <div
      className="flex-shrink-0 mr-4 h-24 w-24"
      style={{ overflow: "hidden" }}
    >
      <Image src={path} alt="author" height={100} width={100} />
    </div>
    <div className="max-w-full w-full rounded overflow-hidden shadow-lg p-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
      <div className="mt-4">
        <p className="text-gray-600 text-sm">By {author}</p>
        <p className="text-gray-600 text-sm">{date}</p>
      </div>
    </div>
  </div>
);

const Blogs = () => {
  return (
    <section id="gettingStarted">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-6 lg:py-16 flex items-center justify-center flex-col relative">
        <div className="text-4xl font-semibold text-cyan-500">
          HealthEase Blogs{" "}
        </div>
        <section className="flex flex-col items-start justify-start">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </section>
        <Paging />
        <div className="absolute bottom-0">© 2024 HealthEase</div>
      </div>
    </section>
  );
};

export default Blogs;
