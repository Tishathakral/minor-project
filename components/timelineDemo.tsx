import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Legal and Compliance",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm lg:text-lg font-normal mb-6 md:mb-8">
            InquiroAI can be used to quickly analyze legal documents, extract key clauses, and identify similarities between contracts. This can aid lawyers and compliance officers in managing large volumes of documentation more efficiently.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://image.lexica.art/full_webp/691c7893-c778-4a78-8aa5-35a96073e9cb"
              alt="Legal Documents"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://image.lexica.art/full_webp/9f5a41f1-332d-4a59-92a0-2e0ed1518175"
              alt="Compliance Check"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Academic Research",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm lg:text-lg font-normal mb-6 md:mb-8">
            Academic researchers can benefit from InquiroAI by easily comparing research papers, extracting relevant data, and analyzing document similarities for citations or plagiarism checks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://image.lexica.art/full_webp/2bc09186-9d58-495a-9773-52267149a1cb"
              alt="Research Papers"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://image.lexica.art/full_webp/97e6b566-6b5d-4f53-b348-424e29666945"
              alt="Plagiarism Check"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Human Resources",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm lg:text-lg font-normal mb-6 md:mb-8">
            InquiroAI can streamline HR processes by analyzing job descriptions, extracting skill sets from resumes, and comparing applicant profiles to find the best match for open positions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://image.lexica.art/full_webp/6b3d83fc-ed88-426c-b319-189a59e612a7"
              alt="HR Analysis"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://image.lexica.art/full_webp/6cf2c9d9-76ef-4dda-9896-e5eaa8089e3f"
              alt="Resume Extraction"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Financial Services",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm lg:text-lg font-normal mb-6 md:mb-8">
            Financial institutions can use InquiroAI to extract key financial metrics from reports, perform due diligence, and compare financial documents to identify trends and insights.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://image.lexica.art/full_webp/2e63a83b-ec93-4aaa-80a3-18a5f70bd3ea"
              alt="Financial Reports"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://image.lexica.art/full_webp/32274974-5782-4655-935a-b5983720b8da"
              alt="Metrics Extraction"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Healthcare",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-sm lg:text-lg font-normal mb-6 md:mb-8">
            InquiroAI can assist in the healthcare sector by analyzing medical records, extracting patient information, and comparing treatment documents to ensure compliance with healthcare standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="https://image.lexica.art/full_webp/b9cd4a96-7edb-463c-b2fc-26a96724f5de"
              alt="Medical Records"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
            <Image
              src="https://image.lexica.art/full_webp/ceac1377-045a-4d99-bed7-e19c4b53a9a4"
              alt="Healthcare Analysis"
              width={500}
              height={500}
              className="rounded-lg object-cover h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
