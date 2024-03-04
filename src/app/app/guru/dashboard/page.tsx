import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Progress } from "@/components/progress";
import TeacherBanner from "@/components/teacher-banner";
import React from "react";
import { MdMoreHoriz } from "react-icons/md";

type ClassCardProps = {
  subject: string;
  name: string;
  progress: number;
};

const classCard: ClassCardProps[] = [
  {
    name: "Kelas XII RPL 6 - Stematel",
    progress: 80,
    subject: "Matematika",
  },
  {
    name: "Kelas XII RPL 6 - Stematel",
    progress: 50,
    subject: "Matematika",
  },
  {
    name: "Kelas XII RPL 6 - Stematel",
    progress: 50,
    subject: "Matematika",
  },
];

const page = () => {
  return (
    <div className="w-full ">
      <TeacherBanner />
      <div className="mt-8">
        <h1 className="font-bold text-2xl">Kelas Anda</h1>
        <div className="mt-6 gap-4 grid grid-cols-3">
          {classCard.map((cls, idx) => (
            <div key={idx} className="rounded-lg bg-white shadow-sm">
              <div className="relative w-full h-36 bg-gray-300 rounded-t-lg">
                <Button
                  size={"iconSm"}
                  className="bg-white absolute right-3 top-3 hover:bg-gray-100"
                >
                  <MdMoreHoriz size={"20"} className="text-gray-600" />
                </Button>
              </div>
              <div className="my-4 px-4">
                <Badge variant={"blue"}>Matematika</Badge>
                <h3 className="font-medium text-xl mt-2">{cls.name}</h3>
                <div className="mt-4 flex items-center gap-x-4">
                  <Progress maxValue={100} value={cls.progress} size="small" />
                  <h5 className="text-neutral-4 font-medium">
                    {cls.progress}%
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
